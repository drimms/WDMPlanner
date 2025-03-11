
import { opticalFiber } from "../inventory/fiber";
import rootStore from "../../../store/rootStore";
import { runInAction } from "mobx";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";


export const useFiber = () => {

    const handleFiberInput = (index: string, e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (!name) return; 

        runInAction(() => {
            rootStore.unitStore.setUnitStore('fiber', name, value, index);

        })

        let loss = opticalFiber.find(p => p.title === rootStore.unitStore['fiber'][index]['fiberType']);
        rootStore.unitStore.setFiber(index, loss ? loss.attenuation : 0);
    };
  
    return ({handleFiberInput});
}