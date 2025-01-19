import { CircularProgress, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
import rootStore from '../../../store/rootStore';
import useResult from "./useResult";
import { toJS } from "mobx";
import ru from "../../Network/inventory/ru_dictionary";


const Result = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    const { handleCalculationOSNR } = useResult();

    const handleCalculation = () => {
        setLoading(true);

        setTimeout(() => {
            const result = handleCalculationOSNR(); 
            setData(toJS(result)); 
            setLoading(false); 
        }, 1000); 
    };

    console.log(data)
    return (
        <>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Button
                    variant="contained"
                    onClick={handleCalculation}
                    disabled = {loading}
                >
                    {loading ? <>{ru.resultTitleButtonLoader}<CircularProgress
                        size={24}
                        sx={{
                        color: 'inherit',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                        }}
                    /></> : ru.resultTitleButton}
                </Button>

                {
                !loading && data.length > 0 && (
                    <TableContainer
                        component={Paper}
                        sx={{ mt: 2, width: '100%' }}
                    >
                        <Table sx={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{ru.resultTableHeadType}</TableCell>
                                    <TableCell>{ru.resultTableHeadResult}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((p, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{p.type}</TableCell>
                                        <TableCell>{p.param.power}</TableCell>
                                        <TableCell>{p.param.title}</TableCell>
                                        <TableCell>{p.param.payload}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
            </Box>

        </>
    )

}

export default Result