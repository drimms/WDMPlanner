import UnitStore from "./unitStore";
import MenuStore from "./menuStore";

class rootStore {
    unitStore;
    menuStore;

    error:boolean = false;

    constructor() {
        this.unitStore = new UnitStore();
        this.menuStore = new MenuStore();
    };

    setError(error:boolean) {
        this.error = error;
    }

};

export default new rootStore();