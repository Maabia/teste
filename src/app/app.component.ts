import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CnpjService } from './cnpj.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cnpj';

  cnpjForm!: FormGroup;
  cnpjMask: string = '00.000.000/0000-00';

  constructor(
    private cnpjService: CnpjService,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
      this.cnpjForm = this.formBuilder.group({
        cnpj: ["",
          [
            Validators.required,
            Validators.maxLength(14),

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

  obterCnpj() {
    this.cnpjService.getCnpj()
      .then(cnpj => console.log(cnpj))
      .catch(error => console.error());

  }
}
