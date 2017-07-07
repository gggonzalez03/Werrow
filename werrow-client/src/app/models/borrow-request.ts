import { User } from './user';

export class BorrowRequest {
  constructor(
    public _id: string = "",
    public item_name: string = "",
    public reason: string ="",
    public time_stamp: number = Date.now(),
    public time_ago: string = "",
    public map_hidden: boolean = true,
    public satisfied: boolean = false,
    public user_id: User = new User(),
  ){}
}
