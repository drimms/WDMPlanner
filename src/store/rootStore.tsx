import FiberStore from "./fiberStore";
import AmplifierStore from "./amplifierStore";
import TransponderStore from "./transponderStore";

class rootStore {
    fiberStore;
    amplifierStore;
    transponderStore;

    error:boolean = false;

    constructor() {
        this.fiberStore = new FiberStore();
        this.amplifierStore = new AmplifierStore();
        this.transponderStore = new TransponderStore();
    };

    setError(error:boolean) {
        this.error = error;
    }

};

export default new rootStore();