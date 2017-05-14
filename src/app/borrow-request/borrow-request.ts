export class BorrowRequest {
  constructor(
    public _id: number = Math.floor(Math.random()*100),
    public item_name: string = "",
    public reason: string ="",
    public time_stamp: number = Date.now(),
    public satisfied: boolean = false,
    public user_id: number = 0,
  ){}
}
