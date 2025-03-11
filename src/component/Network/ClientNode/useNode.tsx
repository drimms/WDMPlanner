import rootStore from "../../../store/rootStore";
import { runInAction } from "mobx";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

const useNode = () => {

    const handleNodeInput = (index: any, e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (!name) return;

        runInAction(() => {
            rootStore.unitStore.setUnitStore('unit', name, value, index)
        })
    };

    return ({
        handleNodeInput
    })
}

export default useNode;