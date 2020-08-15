import { Request, Response } from 'express'
import { SendSMSService } from './SendSMSService'

export class SendSMSController {
  constructor (
    private SendSMSService: SendSMSService
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { mobile, msg } = request.body

    try {
      await this.SendSMSService.execute({
        mobile,
        msg
      })
      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
