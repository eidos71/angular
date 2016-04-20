/**
 * Created by blackswam on 20/04/16.
 */
class User {
    fullName:string;
    _firstName:string;
    _lastName:string;
    constructor(firstName:string,lastName:string){
        this._firstName=firstName;
        this._lastName=lastName;
        this.fullName=firstName+ "" + lastName;

    }
    sayHello():string{
        return "Hello dear " +this.fullName;
    }
    get firstName(): string {
        return this._firstName;
    }
    set firstName (name: string){
             this._firstName=name;
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastName (name: string){
        this._lastName=name;
    }
}
var user= new User("Mary","Jane");
