import rootStore from '../../../store/rootStore';


const useResult = () => {
    const handleCalculationOSNR = () => {
        const result = rootStore.menuStore.components;

        let currentPower: number;
        let currentOSNR = [];

        function calculateSum(currentOSNR:any[]) {
            let res: number = currentOSNR.reduce((sum, ai) => {
                if (typeof ai === 'number') {
                    return sum + Math.pow(10, -0.1 * ai);  
                } 
                return sum; 
            }, 0);
            let resdB = -10*Math.log10(res);
            return resdB
        }

        let calculation = result.map((p, i) => {
            switch(p.type) {
                case 'Node':
                    if (!result[i-1]) {
                        currentPower = Number(p.param[p.id].power);
                        currentOSNR.push(45)
                        return [`УД "${p.param[p.id].title}"`, currentPower, 45];
                    }
                    currentOSNR.push('node')           
                    return [p.param[p.id].title, currentPower.toFixed(2), calculateSum(currentOSNR)];
                case 'Pump':
                    let pin = currentPower;
                    let calcOSNR = -10*Math.log10(Math.pow(10, -0.1*(pin - Number(p.param[p.id].nf) + 58)));
                    currentOSNR.push(calcOSNR)               
                    currentPower = currentPower + Number(p.param[p.id].gain)

                    return ['Усилитель', currentPower.toFixed(2), calculateSum(currentOSNR)];
                case 'Fiber':
                    currentOSNR.push('-');
                    currentPower = currentPower - Number(p.param[p.id].totalLoss)
                    return [`Оптический пролет ${p.param[p.id].span}км`, currentPower.toFixed(2), 0];
                case 'Mux':
                    currentOSNR.push('-');
                    currentPower = currentPower - Number(p.param[p.id].totalLoss);
                    return ['MUX/DeMUX', currentPower, 0]
                default: 
                    return null;
            }
        })
        
        return calculation;
    }
   
    return { handleCalculationOSNR };
};

export default useResult;