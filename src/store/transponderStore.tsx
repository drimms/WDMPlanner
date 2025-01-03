import { makeAutoObservable } from "mobx";

class TransponderStore {
    type: string = '';
    payload: string = '';
    power: number = 0;

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
    
};

export default TransponderStore;