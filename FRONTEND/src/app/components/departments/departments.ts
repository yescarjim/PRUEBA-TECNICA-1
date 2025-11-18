import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/departments';

@Component({
  selector: 'app-departments',
  imports: [ReactiveFormsModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private depService: DepartmentService
  ) {
    this.form = this.fb.group({
      code: [''],
      name: [''],
    });
  }

  create() {
    this.depService.create(this.form.value).subscribe(() => {
      alert("Departamento creado exitosamente!");
    });
  }
}