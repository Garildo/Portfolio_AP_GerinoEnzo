import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
  
})
export class ExperienciaComponent implements OnInit {
  expe: ExperienciaLaboral[] = [];
  nombreEL : string = '';
  descripcionEL : string = '';
  
  constructor(private sExperiencia: SExperienciaLaboralService, private tokenService: TokenService, private sExperiuencia: SExperienciaLaboralService, private router: Router) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data =>  {this.expe = data;})
  }

  delete(id?: number) {
    if(id != undefined){this.sExperiencia.delete(id).subscribe(
      data =>{this.cargarExperiencia();
    }, err => {
      alert("Fallo ELimiación de Exp. Laboral");
    }
    )}
  } 
}


