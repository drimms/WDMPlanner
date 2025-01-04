import { makeAutoObservable } from "mobx";

class TransponderStore {
    type: string = '';
    payload: string = '';
    power: number = 0;
    title: string = '';

    constructor() {
        makeAutoObservable(this);
    };

    setType(type:string) {
        this.type = type;
    };

    setPayload(payload:string) {
        this.payload = payload;
    };

    setOutputPower(power:number) {
        this.power = power;
    };
    
    setTitle(title:string) {
        this.title = title;
    }
};

export default TransponderStore;