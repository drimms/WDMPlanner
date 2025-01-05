import { toJS } from "mobx";
import AmplifierStore from "../../../store/amplifierStore";
import rootStore from "../../../store/rootStore";
import { SelectChangeEvent } from "@mui/material";


const useAmplifier = () => {

    const handleAmpChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        rootStore.amplifierStore.setAmplifier({
            ...rootStore.amplifierStore.amplifier,
            [name]:value
        });
    };
    console.log(toJS(rootStore.amplifierStore.amplifier));
    
    return (
        {
            handleAmpChange
        }
    )
};

export default useAmplifier;