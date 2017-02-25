import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  form: FormGroup;
  title: 'Contact';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "name": ["", Validators.required],
      "email": ["", Validators.required],
      "query": ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  sendQuery(event) {
    console.log(this.form);
  }
}
