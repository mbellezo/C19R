export class SMS {
    public mobile: string;
    public msg: string;

    constructor (props: SMS) {
      Object.assign(this, props)
    }
}
