import { makeAutoObservable, toJS } from "mobx";
import { IAmplifier, IFiber, IMux, IUnit } from "../component/Network/IInterface";
import rootStore from "./rootStore";

type networkTypeKit = "fiber" | "amplifier" | "unit" | "mux";

class UnitStore {

    networkKit:  {
        fiber: Record<string, IFiber>, 
        amplifier: Record<string, IAmplifier>, 
        unit: Record<string, IUnit>
        mux: Record<string, IMux>
    };

    constructor() {
        makeAutoObservable(this);

        this.networkKit = {
            fiber: {},
            amplifier: {},
            unit: {},
            mux: {}
        };
    };

    setUnitStore(key: networkTypeKit, field: string, value: any, idx: string ) {
        if (idx === undefined || idx === null) return;

        if (!this.networkKit[key][idx]) {
            if (key === "fiber") {
                this.networkKit[key][idx] = { 
                    //index: idx, 
                    span: 0, 
                    fiberType: "", 
                    totalLoss: 0 } as IFiber;
            }
            if (key === "amplifier") {
                this.networkKit[key][idx] = {
                    //index: idx,
                    type: "",
                    gain: 0,
                    nf: 0
                }
            }
            if (key === "unit") {
                this.networkKit[key][idx] = {
                    //index: idx, 
                    type: "",
                    mode: "",
                    payload: "",
                    power: 0,
                    title: ""
                }
            }
            if (key === "mux") {
                console.log(toJS(rootStore.unitStore), key, idx, field)
                
                this.networkKit[key][idx] = {
                    totalLoss: 0
                }
            }
        }
        
       (this.networkKit[key][idx] as Record<string, any>)[field] = value;

    }

    get mux() {
        return this.networkKit.mux;
    }

    get fiber() {
        return this.networkKit.fiber;
    };

    get pump() {
        return this.networkKit.amplifier;
    };

    get node() {
        return this.networkKit.unit;
    }

    setFiber(index: string, value: number) {
        this.networkKit.fiber[index]['totalLoss'] = value * this.networkKit.fiber[index]['span'];
    };

}

export default UnitStore;