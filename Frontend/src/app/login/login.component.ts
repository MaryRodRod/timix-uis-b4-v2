import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  content: string = 'cambieme'
  text: string = 'esto es un texto'

  constructor() { }

  ngOnInit(): void {}

  showtext(){
      this.content = this.text;

    }


}
