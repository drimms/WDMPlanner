import { makeAutoObservable, toJS } from "mobx";
import { v4 as uuidv4 } from 'uuid';

class MenuStore {

    key = '';
    components: { 
        id: string; 
        type: any;
        param: any }[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    setKey(key: string) {
        this.key = key;
    };

    addComponent(type: any, param: any) {
        const id = uuidv4();
        this.components.push({ id, type, param });
        return id;
    };
    
    removeComponent(id: number) {
        this.components = this.components.filter((component) => component.id !== id);
    };

    addInfo(key: string, info: any) {
        let current = this.components.find((component) => component.id === key);
        if (current) {
            current.param = {...current.param, info};
        }
        
    }
}

export default MenuStore;