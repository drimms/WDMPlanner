import { useCallback } from 'react';

const useResult = () => {
    const handleCalc = useCallback((value: any) => {
        console.log(value)
    }, []);

    return (
        {
            handleCalc
        }
    )

};

export default useResult;