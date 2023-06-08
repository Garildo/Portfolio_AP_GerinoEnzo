import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-edu-modal',
  templateUrl: './edu-modal.component.html',
  styleUrls: ['./edu-modal.component.css']
})
export class EduModalComponent implements OnInit {
  nombreEd : string = '';
  descripcionEd : string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.nombreEd, this.descripcionEd);
    this.sEducacion.save(educ).subscribe(data => {
      alert("Educacion Añidada");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    })
  }

}
