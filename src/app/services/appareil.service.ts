import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface AppareilServiceInterface {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export default class AppareilService {

    appareilSubject = new Subject<AppareilServiceInterface[]>();

    private appareils: Array<AppareilServiceInterface> = [];

    constructor(private httpClient: HttpClient){

    }

    emitAppareilSubject(){
        this.appareilSubject.next([...this.appareils]);
    }

    onALL(){
        this.appareils.map(appareil => appareil.status = 'on');
        this.emitAppareilSubject();
    }

    offALL(){
        this.appareils.map(appareil => appareil.status = 'off');
        this.emitAppareilSubject();
    }

    appareilOn(id){
        const appareil = this.appareils.find(appareil => appareil.id === id);
        if (appareil) appareil.status = "on";
        this.emitAppareilSubject();
    }

    appareilOff(id){
        const appareil = this.appareils.find(appareil => appareil.id === id);
        if (appareil) appareil.status = "off";
        this.emitAppareilSubject();
    }

    getAppareil(id:number){
        return this.appareils.find(appareil => appareil.id === id);
    }

    addAppareil(name: string, status: string) {
        const appareil: AppareilServiceInterface = {
            id: this.appareils[this.appareils.length - 1].id + 1,
            name,
            status
        };

        this.appareils = [
            ...this.appareils,
            appareil
        ];

        this.emitAppareilSubject();
    }

    saveAppareilsToServer(){
        this.httpClient.put('https://angular-app-476fb.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                () => {
                    console.log("saved !");
                },
                (error) => {
                    console.log("error: "+error);
                });
    }

    getAppareilsFromServer(){
        this.httpClient.get<Array<any>>('https://angular-app-476fb.firebaseio.com/appareils.json')
            .subscribe(
                appareils => {
                    console.log(appareils);
                    this.appareils = appareils;
                    this.emitAppareilSubject();
                },
                error => {
                    console.log(error);
                }
            );
    }
}
