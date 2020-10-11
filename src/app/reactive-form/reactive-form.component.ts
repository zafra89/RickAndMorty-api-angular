import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formGroupSearchForm: any = {};

  @Output() searchCharacter = new EventEmitter;
  @Output() searchSpecies = new EventEmitter;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroupSearchForm = this.formBuilder.group({
      name: ['Search by name', [Validators.required]],
      species: ['Search by species']
      /*email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]*/
    })
  }
}