import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  // template: '<h2>John Deo</h2>',
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  //Properties
  fname: "Sweta";
  lname: "Pate";
  age: 20;

  //method
  constructor() {
    console.log("hello world");
    this.sayHello();
  }

  sayHello() {
    console.log(`Hi, This is ${this.fname}`);
  }
}
