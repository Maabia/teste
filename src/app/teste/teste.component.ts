import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  testeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private testeService: TesteService

    ) { }


  ngOnInit(): void {
    this.testeForm = this.formBuilder.group({
      cnpj: ["",
        [
          Validators.required,
          Validators.maxLength(18),

        ]
      ],
      ValueA: ["",
        [
          Validators.required
        ]
      ],
      ValueB: ["",
        [
          Validators.required
        ]

      ]


    })
  }


}
