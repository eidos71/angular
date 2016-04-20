/**
 * Created by blackswam on 20/04/16.
 */
class User {
    fullName:string;
    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.fullName=firstName+ "" + lastName;

    }
    sayHello():string{
        return "Hello dear " +this.fullName;
    }

}
var user= new User("Mary","Jane");
alert(user.sayHello() );