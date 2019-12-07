import {Subject} from "rxjs";

export interface AppareilServiceInterface {
    id: number;
    name: string;
    status: string;
}

export default class AppareilService {

    appareilSubject = new Subject<AppareilServiceInterface[]>();

    private appareils: Array<AppareilServiceInterface> = [
        {
            id: 1,
            name: 'Computer',
            status: 'off'
        },
        {
            id: 2,
            name: 'Mobile',
            status: 'on'
        },
        {
            id: 3,
            name: 'Television',
            status: 'off'
        },
    ];

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
}
