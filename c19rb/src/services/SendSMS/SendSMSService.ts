import { IsmsDTO } from './IsmsDTO'
import { ISMSProvider } from "@providers/ISMSProvider.1"

export class SendSMSService {
  constructor (
      private provider: ISMSProvider
  ) {}

  async execute (data: IsmsDTO) {
    await this.provider.sendSMS({
      mobile: data.mobile,
      msg: data.msg
    })
  }
}
