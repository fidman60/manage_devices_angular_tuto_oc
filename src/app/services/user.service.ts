import User from "../models/User";
import {Subject} from "rxjs";

export default class UserService {

    private users: Array<User> = [
        new User("James",
            "Smith",
            "james@smith.com",
            "Coca",
            ['coder', 'gym']),
    ];
    userSubject = new Subject<Array<User>>();

    emitUsers(){
        this.userSubject.next([...this.users]);
    }

    addUser(user: User){
        this.users = [
            ...this.users,
            user,
        ];
        this.emitUsers();
    }

}
