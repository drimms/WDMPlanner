import rootStore from "../../../store/rootStore";
import { SelectChangeEvent } from "@mui/material";
import { opticalAmplifier } from '../inventory/amplifier'


const useAmplifier = () => {

    const handleAmpChange = (e: SelectChangeEvent) => {
        let typeAmplifier = e.target.value;
        rootStore.amplifierStore.setType(typeAmplifier);
        let amp = opticalAmplifier.filter(p => p.title === typeAmplifier);
        rootStore.amplifierStore.setNF(amp[0].nf);
      };

    return (
        {
            handleAmpChange
        }
    )
};

export default useAmplifier;