import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WithoutTestingComponent } from './without-testing/without-testing.component';
import { TestingGenerateShortComponent } from './testing-generate-short/testing-generate-short.component';
import { InputEventBindingComponent } from './input-event-binding/input-event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AssignmentSolutionComponent } from './assignment-solution/assignment-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    WithoutTestingComponent,
    TestingGenerateShortComponent,
    InputEventBindingComponent,
    TwoWayBindingComponent,
    AssignmentSolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
