import { SelectChangeEvent } from "@mui/material";
import rootStore from "../../../store/rootStore";
import { ChangeEvent } from "react";
import { toJS } from "mobx";

const useNode = () => {

    const handleNodeInput = (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
        const { name, value } = e.target;

        rootStore.transponderStore.setTransponderNode({
            ...rootStore.transponderStore.transponderNode,
            [name]: value
        });
    };
console.log(toJS(rootStore.transponderStore.transponderNode))
    return ({
        handleNodeInput
    })
}

export default useNode;