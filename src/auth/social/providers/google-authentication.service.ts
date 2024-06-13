import { Inject, Injectable, OnModuleInit, forwardRef } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from 'src/auth/config/jwt.config';
import { OAuth2Client } from 'google-auth-library';
import { UsersService } from 'src/users/providers/users.service';
import { GoogleTokenDto } from '../dtos/google-token.dto';

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
  ) {}

  onModuleInit() {
    const clientId = this.jwtConfiguration.googleClientId;
    const clientSecret = this.jwtConfiguration.googleClientSecret;
    this.oauthClient = new OAuth2Client(clientId, clientSecret);
  }

  async authenticate(googleTokenDto: GoogleTokenDto) {
    // Verify the Google Token Sent By User
    // Extract the payload from Google Token
    // Find the user in the database using the googleId
    // If user id found generate the tokens
    // If not create a new user and generate the tokens
    // throw Unauthorised exception if not Authorised
  }
}
