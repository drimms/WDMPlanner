import { runInAction, toJS } from "mobx";
import rootStore from "../../../store/rootStore";
import { ChangeEvent } from "react";


const useMux = () => {

    const handleMuxChange = (index: string, e: ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = e.target;

        if (!name) return; 
        runInAction(() => {
            rootStore.unitStore.setUnitStore('mux', name, value, index);
        });
        console.log(toJS(rootStore.unitStore.networkKit))
    };

    return ({
            handleMuxChange
    })
};

export default useMux;