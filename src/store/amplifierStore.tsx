import { makeAutoObservable } from "mobx";

class AmplifierStore {
    nf: number = 0;
    type: string = '';
    gain: number = 0;

    constructor() {
        makeAutoObservable(this);
    };

    setNF(nf:number) {
        this.nf = nf;
    };

    setType(type:string) {
        this.type = type;
    };

    setGain(gain:number) {
        this.gain = gain;
    };
    
};

export default AmplifierStore;