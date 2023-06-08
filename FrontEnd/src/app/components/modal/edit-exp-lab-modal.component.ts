import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';

@Component({
  selector: 'app-edit-exp-lab-modal',
  templateUrl: './edit-exp-lab-modal.component.html',
  styleUrls: ['./edit-exp-lab-modal.component.css']
})
export class EditExpLabModalComponent implements OnInit {
  expLab : ExperienciaLaboral = null;

  constructor(private sExperiencia: SExperienciaLaboralService, private activatedRouter: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
      this.expLab = data;
    }, err => {
      alert("Error al modificar Experiencia Laboral");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {this.router.navigate(['']);
    }, err => {
      alert("Error al modificar Experiencia Laboral");
      this.router.navigate(['']);
    })
  }
}
