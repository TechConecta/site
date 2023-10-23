import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadService } from './../../../shared/services/lead-service/lead.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  leadCreated = false;

  leadForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    area: new FormControl('', Validators.required)
  });

  constructor(private leadService: LeadService) {}

  async SendForm() {
    this.leadCreated = false;

    if (this.leadForm.valid) {
      const leadCreated = await this.leadService.create({
        name: this.leadForm.get('name')?.value,
        email: this.leadForm.get('email')?.value,
        cellphone: this.leadForm.get('cellphone')?.value,
        area: this.leadForm.get('area')?.value
      });

      if (leadCreated) {
        this.leadForm.reset();
        this.leadCreated = true;
      }
    }
  }
}
