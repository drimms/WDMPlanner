import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from 'uuid';

class MenuStore {
    components: { 
        id: string; 
        type: any;
        param: any }[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    addComponent(type: any, param: any) {
        const id = uuidv4();
        this.components.push({ id, type, param });
      }
    
    removeComponent(id: number) {
        this.components = this.components.filter((component) => component.id !== id);
    }
}

export default MenuStore;