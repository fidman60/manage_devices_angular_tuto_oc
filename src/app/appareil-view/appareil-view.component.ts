import {Component, OnDestroy, OnInit} from '@angular/core';
import AppareilService, {AppareilServiceInterface} from "../services/appareil.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: Array<AppareilServiceInterface>;
  lastUpdate: Date;
  appareilSubscription: Subscription;

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
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe((appareils: Array<AppareilServiceInterface>) => {
      this.appareils = appareils;
    });
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }

}
