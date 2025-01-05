import { makeAutoObservable } from "mobx";
import { opticalAmplifier } from "../component/Network/inventory/amplifier";


class AmplifierStore {
    amplifier = {
        type: '',
        gain: 0,
        nf: 0,
    }

    constructor() {
        makeAutoObservable(this);
    };

    setAmplifier({type, gain}: {
        type: string, 
        gain: number 
    }) {
        this.amplifier.type = type;
        let amp = opticalAmplifier.filter(p => p.title === this.amplifier.type);
        this.amplifier.gain = gain;
        this.amplifier.nf = amp[0].nf;
    };    
};

export default AmplifierStore;