import { TwilioSMSProvider } from '@providers/impl/TwilioSMSProvider'
import { SendSMSService } from './SendSMSService'
import { SendSMSController } from './SendSMSController'

const twilioSMSProvider = new TwilioSMSProvider()
const sendSMSService = new SendSMSService(
  twilioSMSProvider
)

const sendSMSController = new SendSMSController(
  sendSMSService
)

export { sendSMSService, sendSMSController }
