import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit {

  workExperience: Array<any> = [] ;

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha : "2017-2022",
      ubicacion : "Cordóba, Ver",
      puesto : "CEO",
      empresa : "Web Special",
      logros : [
             { descripcion: "Implementación de Domotica"},
             { descripcion: "Uso de Arduino"},
      ]
    };
    let work2 = {
      fecha : "2015-2017",
      ubicacion : "Cordóba, Ver",
      puesto : "CEO",
      empresa : "Kubbet",
      logros : [
               { descripcion: "Cluster headoop"},
             { descripcion: "Red Neuronsl GAN"},
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);

  }

}
