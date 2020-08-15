import { Router } from 'express'
import { sendSMSController } from './services/SendSMS'

const router = Router()

router.post('/sms', (request, response) => {
  return sendSMSController.handle(request, response)
})

export { router }
