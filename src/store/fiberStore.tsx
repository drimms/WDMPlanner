import { makeAutoObservable } from "mobx";

class FiberStore {
    span: string = '';
    fiber: string = '';
    result: number | '' = ''; 
    att: string = '';

    constructor() {
        makeAutoObservable(this);
    };

    setFiber(fiber: string) {
        this.fiber = fiber;
    };

    setSpan(span:string) {
        this.span = span;
    };

    setAtt(att: string) {
        this.att = att;
    };

    setResult(result: number | '') {
        this.result = result;
    }

};

export default FiberStore;