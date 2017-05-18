export class Address {
  constructor(
    public _id: number = Math.floor(Math.random()*100),
    public street: string = "",
    public city: string = "",
    public state: string = "",
    public zip_code: string = "",
    public user_id: number = 0
  ){}
}
