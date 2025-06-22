import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from 'src/common/guards/google-auth.guard';
import {
  UserRole,
  UserSource,
  UserStatus,
} from 'src/common/interfaces/user.interface';
import { IUser } from 'src/users/interface/user.interface';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) // private readonly configService: ConfigService,
  {}

  // @Get('login/google')
  // @UseGuards(GoogleAuthGuard)
  // getLoginGoogle() {
  //   console.log('loginGoogle');
  // }

  // @Post('login/google')
  // // @UseGuards(GoogleAuthGuard)
  // async loginGoogle(
  //   @Body() body: { account: any; profile: any },
  //   @Res() res: Response,
  // ) {
  //   const { account, profile } = body;
  //   console.log('body', body);
  //   try {
  //     // Validate the access token and retrieve user information
  //     // const user = await this.authService.validateSocialToken(
  //     //   provider,
  //     //   access_token,
  //     // );

  //     const userData: IUser = {
  //       email: profile.email,
  //       name: profile.name,
  //       firstName: profile.given_name,
  //       lastName: profile.family_name,
  //       picture: profile.picture,
  //       verified: true,
  //       status: UserStatus.Verified,
  //       roles: [UserRole.CUSTOMER],
  //       lastLoggedIn: new Date(),
  //       source: UserSource.Google,
  //       googleData: {
  //         id: account.providerAccountId,
  //         token: account.access_token,
  //       },
  //     };

  //     // Check if the user exists in the database
  //     const user = this.authService.registerGoogleUser(userData);

  //     // If everything is fine, return a success response
  //     return res.status(200).json({ message: 'Account is valid', user });
  //   } catch (error) {
  //     console.error('Error validating social token:', error);
  //     return res.status(401).json({ message: 'Invalid token or account' });
  //   }
  // }

  // @Post('callback/google')
  // @UseGuards(GoogleAuthGuard)
  // async loginGoogleRedirect(@Req() req, @Res() res: Response) {
  //   try {
  //     const user = req.user;
  //     const userData: IUser = {
  //       email: user.email,
  //       name: user.displayName,
  //       firstName: user.givenName,
  //       lastName: user.familyName,
  //       picture: user.picture,
  //       verified: true,
  //       status: UserStatus.Verified,
  //       roles: [UserRole.CUSTOMER],
  //       lastLoggedIn: new Date(),
  //       source: UserSource.Google,
  //       googleData: {
  //         id: user.googleData.id,
  //         token: user.googleData.token,
  //       },
  //     };

  //     console.log('userData', userData);
  //     // const response = await this.authService.googleAuthRedirect(userData);
  //     // res.redirect(
  //     //   `${this.configService.get('web.url')}/oauth?token=${
  //     //     response.data.accessToken
  //     //   }`,
  //     // );
  //     return await this.authService.googleAuthRedirect(userData);
  //   } catch (err) {
  //     res.status(500).send({ success: false, message: err.message });
  //   }
  // }
}
