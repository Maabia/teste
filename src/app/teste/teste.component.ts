import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  testeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder

    ) { }


  ngOnInit(): void {
    this.testeForm = this.formBuilder.group({
      cnpj: ["",
        [
          Validators.required
        ]
      ],


    })
  }


}
