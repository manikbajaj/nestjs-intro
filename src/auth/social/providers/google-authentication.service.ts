import { Inject, Injectable, OnModuleInit, forwardRef } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/auth/config/jwt.config';
import { OAuth2Client } from 'google-auth-library';
import { UsersService } from 'src/users/providers/users.service';
import { GoogleTokenDto } from '../dtos/google-token.dto';
import { GenerateTokensProvider } from 'src/auth/providers/generate-tokens.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Injectable()
export class GoogleAuthenticationService implements OnModuleInit {
  private oauthClient: OAuth2Client;

  constructor(
    // Injecting UserService
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    /**
     * Inject jwtConfiguration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    /**
     * Inject generateTokensProvider
     */
    private readonly generateTokensProvider: GenerateTokensProvider,
  ) {}

  onModuleInit() {
    const clientId = this.jwtConfiguration.googleClientId;
    const clientSecret = this.jwtConfiguration.googleClientSecret;
    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  async authenticate(googleTokenDto: GoogleTokenDto) {
    // Verify the Google Token Sent By User
    const loginTicket = await this.oauthClient.verifyIdToken({
      idToken: googleTokenDto.token,
    });
    // Extract the payload from Google Token
    const { email, sub: googleId } = loginTicket.getPayload();
    // Find the user in the database using the googleId
    const user = await this.usersService.findOneByGoogleId(googleId);
    // If user id found generate the tokens
    if (user) {
      return this.generateTokensProvider.generateTokens(user);
    } else {
      // If not create a new user and generate the tokens
    }

    // throw Unauthorised exception if not Authorised
  }
}
