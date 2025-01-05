import { makeAutoObservable } from "mobx";

class FiberStore {
    att = 0;

    fiberSection = {
        span: 0,
        fiberType: '',
        totalLoss: 0,
    };

    constructor() {
        makeAutoObservable(this);
    };

    setAtt(att: number) {
        this.att = att;
    };

    setFiberSection({ span, fiberType 
        }: {
            span: number;
            fiberType: string;
        }) 
        {
            this.fiberSection.span = span;
            this.fiberSection.fiberType = fiberType;
            this.fiberSection.totalLoss = span * this.att;
        };
};

export default FiberStore;