import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent {
  warningtext = 'This text from TS file';
  showMessage = true;
  datetimeTest = new Date();

  showMessageFunction() {
    return this.showMessage;
  }
}
