export default class AppareilService {
    appareils = [
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

    onALL(){
        this.appareils.map(appareil => appareil.status = 'on');
    }

    offALL(){
        this.appareils.map(appareil => appareil.status = 'off');
    }

    appareilOn(id){
        const appareil = this.appareils.find(appareil => appareil.id === id);
        if (appareil) appareil.status = "on";
    }

    appareilOff(id){
        const appareil = this.appareils.find(appareil => appareil.id === id);
        if (appareil) appareil.status = "off";
    }

    getAppareil(id:number){
        return this.appareils.find(appareil => {
            console.log(typeof appareil.id +'- '+typeof id);
            return appareil.id === id;
        })
    }
}
