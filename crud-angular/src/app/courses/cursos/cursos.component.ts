import { Component, OnInit } from '@angular/core';
import { Course, Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Course[] = [];

  constructor(){
    //this.cursos = [];
  }

  ngOnInit(): void {

  }

}
