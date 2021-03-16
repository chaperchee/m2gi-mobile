import { AccountInfo } from 'src/app/models/accountInfo';
import { Observable } from 'rxjs';
import { Todo } from './todo';

export class List {
  id: string;
  name: string;
  owner: string;
  ownerObj: Observable<AccountInfo> = null;
  canRead: string[];
  canWrite: string[];
  todos: Todo[] = [];

  constructor(name: string, ownerId?: string, canRead?: string[], canWrite?: string[]) {
    this.name = name;
    this.owner = ownerId;
    this.canRead = canRead;
    this.canWrite = canWrite;
    // if(id)
    //   this.id = id;
  }

  get stats(): string {
    return   this.todos.filter((t) => t.isDone).length + "/" + this.todos.length;
  }
}
