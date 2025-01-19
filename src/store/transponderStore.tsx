import { makeAutoObservable } from "mobx";

class TransponderStore {
    transponderNode = {
        type: '',
        mode: '',
        payload: '',
        power: 0,
        title: ''
    }

    constructor() {
        makeAutoObservable(this);
    };

    setTransponderNode({type, payload, mode, power, title}: 
        {
            type: string,
            mode: string,
            payload: string,
            power: number,
            title: string
        }) 
        {
            this.transponderNode.title = title;
            this.transponderNode.type = type;
            this.transponderNode.payload = payload;
            this.transponderNode.mode = mode;
            this.transponderNode.power = power;
    }
};

export default TransponderStore;