import { Component, Input, OnInit } from '@angular/core';
import { InputForm } from '../shared/interfaces';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @Input()
  inputFormData: InputForm = {} as InputForm;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}