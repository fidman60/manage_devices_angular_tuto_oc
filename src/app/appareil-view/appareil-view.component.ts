import { Component, OnInit } from '@angular/core';
import AppareilService from "../services/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  lastUpdate: Date;

  constructor(private appareilService: AppareilService){
    this.lastUpdate = new Promise<Date>(resolve => {
      setTimeout(() => {
        resolve(new Date());
      }, 2000);
    });
  }

  onAllumer(){
    this.appareilService.onALL();
  }

  onEteindre(){
    this.appareilService.offALL();
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

}
