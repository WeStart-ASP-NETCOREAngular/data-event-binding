import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
})
export class SuccessAlertComponent implements OnInit {
  buttonText = 'Hide Alert';
  messageBlock = false;

  buttonDisabled = true;
  constructor() {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2000);
  }

  ngOnInit(): void {}

  printConsoleLog() {
    this.messageBlock = !this.messageBlock;
    this.buttonText = this.messageBlock == true ? 'Show Alert' : 'Hide Alert';
    console.log('Clicked !');
  }
}
