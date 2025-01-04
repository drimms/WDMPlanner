import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from 'uuid';

class MenuStore {
    components: { id: string; type: string }[] = [];

    constructor() {
        makeAutoObservable(this);
    };

    addComponent(type: string) {
        const id = uuidv4();
        this.components.push({ id, type });
      }
    
    removeComponent(id: number) {
        this.components = this.components.filter((component) => component.id !== id);
    }
}

export default MenuStore;