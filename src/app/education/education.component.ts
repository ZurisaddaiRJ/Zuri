import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Array<any> = [] ;

  constructor() { }

  ngOnInit(): void {

    let educ1 = {
      fecha : "2008-2014",
      etapa : "Educación Primaria",
      escuela : "Primaria Hermanegildo Galeana",
      ubicacion : "Amatlán de los Reyes",
     
    };
    let educ2 = {
      fecha : "2014-2017",
      etapa : "Educación Secundaria",
      escuela : "Escuela Secundaria General de Amatlán",
      ubicacion : "Amatlán de los Reyes",
     
    };
    let educ3 = {
      fecha : "2017-2020",
      etapa : "Preparatoria",
      escuela :"Colegio de Bachilleres del Estado de Veracruz ",
      ubicacion : "Amatlán de los Reyes",
     
    };
    let educ4 = {
      fecha : "2020-Actualmente",
      etapa : "Universidad",
      escuela : "Universidad Veracruzana",
      ubicacion : "Orizaba-Córdoba, Sumidero",
     
    };

    this.education.push (educ1);
    this.education.push (educ2);
    this.education.push (educ3);
    this.education.push (educ4);
    

  }

}
