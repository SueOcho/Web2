import { Component, OnInit } from '@angular/core';
import { IDirList } from 'src/app/shared/interfaces.model';
import { ResourcesConst } from 'src/app/shared/resources.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public rscDirList:IDirList[] = ResourcesConst.rsc.dirList;

  constructor() { 
  }

  ngOnInit(): void {
  }

}