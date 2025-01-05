
import { SelectChangeEvent } from "@mui/material";
import { opticalFiber } from "../inventory/fiber";
import rootStore from "../../../store/rootStore";
import { ChangeEvent } from "react";
import { toJS } from "mobx";


export const useFiber = () => {

    const handleFiberInput = (e: ChangeEvent<HTMLTextAreaElement> | SelectChangeEvent) => {
        const { name, value } = e.target;

        rootStore.fiberStore.setFiberSection({
            ...rootStore.fiberStore.fiberSection,
            [name]: value
        });

        let loss = opticalFiber.find(p => p.title === value);
            rootStore.fiberStore.setAtt(loss.attenuation);
        };

    console.log(toJS(rootStore.fiberStore.fiberSection))    
    return (
        {
            handleFiberInput
        }
    )
}