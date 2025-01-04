import FiberStore from "./fiberStore";
import AmplifierStore from "./amplifierStore";
import TransponderStore from "./transponderStore";
import MenuStore from "./menuStore";

class rootStore {
    fiberStore;
    amplifierStore;
    transponderStore;
    menuStore;

    error:boolean = false;

    constructor() {
        this.fiberStore = new FiberStore();
        this.amplifierStore = new AmplifierStore();
        this.transponderStore = new TransponderStore();
        this.menuStore = new MenuStore();
    };

    setError(error:boolean) {
        this.error = error;
    }

};

export default new rootStore();