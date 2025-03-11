import { runInAction } from "mobx";

import rootStore from "../../../store/rootStore";
import { opticalAmplifier } from "../inventory/amplifier";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";


const useAmplifier = () => {

    const handleAmpChange = (index: string, e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (!name) return; 
        
        runInAction(() => {
            rootStore.unitStore.setUnitStore("amplifier", name, value, index);
        });
        let nf = opticalAmplifier.find(p => p.title === rootStore.unitStore.networkKit['amplifier'][index]['type']);
        rootStore.unitStore.setUnitStore("amplifier", 'nf', nf?.nf, index)
    };

    const validation = (index: string) => {
        if (rootStore.unitStore.pump[index]) {
            const x = rootStore.unitStore.pump[index]?.gain;

            const amplifier = opticalAmplifier.find(p => p.title === rootStore.unitStore.networkKit['amplifier'][index]['type'])
            const pumpmin = amplifier?.pumpmin ?? 0; 
            const pumpmax = amplifier?.pumpmax ?? 0;
            return x !== undefined && !(pumpmin <= x && x <= pumpmax);
        }
        return false
        
    }

    return (
        {
            handleAmpChange,
            validation
        }
    )
};

export default useAmplifier;