import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elaboracion-pe',
  templateUrl: './elaboracion-pe.component.html',
  styleUrls: ['./elaboracion-pe.component.scss']
})
export class ElaboracionPeComponent implements OnInit {

  constructor() {
  }
  public Opplan = ['CECyTEM','UNAM'];
  public Opins =['Colegio de Estudios Científicos y Tecnológicos del Estado de México'];
  public Opcct =['15ETC0042H'];
  public Opasig =['Álgebra'];
  public Opsem= ['1°<br>2019-2019'];
  public Opeje=[''];
  public Opcom =[''];
  public OpCc =[''];
  public OpCe =[''];
  public OpPe =[''];
  public OpCga =[''];
  public OpCd =[''];
  public OpCp =[''];
  public OpNtM =['one'];
  public OpEva =['one'];
  ngOnInit() {
  }
}
