import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-solution',
  templateUrl: './assignment-solution.component.html',
  styleUrls: ['./assignment-solution.component.css'],
})
export class AssignmentSolutionComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {}

  ResetText() {
    this.username = '';
  }

  checkInput(): boolean {
    // if (this.username == '') return true;
    // else return false;
    return this.username == '';
  }
}
