import { Address } from './address';
export class User {
  constructor(
    public _id: number = Math.floor(Math.random()*100),
    public name: string = "",
    public email: string = "",
    public password: string = "",
    public photo: string = "assets/img/user.png",
    public address: Address = new Address()
  ){}
}
