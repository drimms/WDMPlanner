import rootStore from '../../../store/rootStore';


const useResult = () => {

    const handleCalculationOSNR = () => {
        const result = rootStore.menuStore.components;
        return result;
    }
   
    return { handleCalculationOSNR };
};

export default useResult;