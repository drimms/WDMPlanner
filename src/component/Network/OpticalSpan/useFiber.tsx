
import { SelectChangeEvent } from "@mui/material";
import { opticalFiber } from "../inventory/fiber";
import rootStore from "../../../store/rootStore";
import { ChangeEvent } from "react";


export const useFiber = () => {
    const res = 
        rootStore.fiberStore.span && rootStore.fiberStore.att 
            ? parseFloat(rootStore.fiberStore.span) * parseFloat(rootStore.fiberStore.att) : '';

    rootStore.fiberStore.setResult(res);

    const handleFiberChange = (e: SelectChangeEvent) => {
        let typeAmplifier = e.target.value;
        rootStore.fiberStore.setFiber(typeAmplifier);
        let amp = opticalFiber.find(p => p.title === typeAmplifier);
        rootStore.fiberStore.setAtt(amp?.attenuation);
    };

    const handleSpanLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
        rootStore.fiberStore.setSpan(e.target.value)
    }

    return (
        {
            handleFiberChange,
            handleSpanLength
        }
    )
}