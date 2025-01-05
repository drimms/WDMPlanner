import { makeAutoObservable } from "mobx";

class TransponderStore {
    transponderNode = {
        type: '',
        payload: '',
        power: 0,
        title: ''
    }

    constructor() {
        makeAutoObservable(this);
    };

    setTransponderNode({type, payload, power, title}: 
        {
            type: string,
            payload: string,
            power: number,
            title: string
        }) 
        {
            this.transponderNode.title = title;
            this.transponderNode.type = type;
            this.transponderNode.payload = payload;
            this.transponderNode.power = power;
    }
};

export default TransponderStore;