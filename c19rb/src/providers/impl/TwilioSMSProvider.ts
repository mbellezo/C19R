import { ISMSProvider, IMessage } from '../ISMSProvider'

import Twilio from 'twilio'

export class TwilioSMSProvider implements ISMSProvider {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    private accountSid: string = `${process.env.ACCOUNT_SID}`;
    private authToken: string = `${process.env.AUTH_TOKEN}`;
    private mobileFrom: string = `${process.env.FROM_NUMBER}`;

    async sendSMS (message: IMessage): Promise<void> {
      await Twilio(this.accountSid, this.authToken)
        .messages.create({
          body: `${message.msg}`,
          to: `${message.mobile}`,
          from: this.mobileFrom
        })
        .then((message: { to: any; }) => console.log(message.to))
    }
}
