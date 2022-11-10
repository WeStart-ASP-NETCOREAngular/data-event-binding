import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-event-binding',
  templateUrl: './input-event-binding.component.html',
  styleUrls: ['./input-event-binding.component.css'],
})
export class InputEventBindingComponent implements OnInit {
  textValue = '';

  constructor() {}

  ngOnInit(): void {}

  getTextFromInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.textValue = target.value;
  }
}
