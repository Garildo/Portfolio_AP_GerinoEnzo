import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  nombreEL : string = '';
  descripcionEL : string = '';

  constructor(private sExperiencia: SExperienciaLaboralService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new ExperienciaLaboral(this.nombreEL, this.descripcionEL);
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experiencia Añidada");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    })
  }

  

}
