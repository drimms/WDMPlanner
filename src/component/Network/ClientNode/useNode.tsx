import { SelectChangeEvent } from "@mui/material";
import rootStore from "../../../store/rootStore";
import { ChangeEvent } from "react";
import { toJS } from "mobx";

const useNode = () => {

    const handlePayloadChange = (e: SelectChangeEvent) => {
        let typeClientCard = e.target.value;
        rootStore.transponderStore.setType(typeClientCard);
    };

    const handleChangeOutputPower = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        rootStore.transponderStore.setOutputPower(Number(value));
    };

    const handleTitleNode = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        rootStore.transponderStore.setTitle(value);
    };

    console.log(toJS(rootStore.transponderStore), '---')
    return ({
        handleTitleNode,
        handlePayloadChange,
        handleChangeOutputPower
    })
}

export default useNode;