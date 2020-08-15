export interface IMessage{
    mobile: string,
    msg: string
}

export interface ISMSProvider{
  sendSMS(message: IMessage): Promise<void>;
}
