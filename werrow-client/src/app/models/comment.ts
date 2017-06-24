export class Comment {
  constructor(
    public _id: number = Math.floor(Math.random()*100),
    public comment: string ="",
    public time_stamp: number = Date.now(),
    public time_ago: string = "",
    public borrow_post_id: string = "",
    public user_id: string = ""
  ){}
}
