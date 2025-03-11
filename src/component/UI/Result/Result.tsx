import { CircularProgress, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
import useResult from "./useResult";
import { toJS } from "mobx";
import ru from "../../Network/inventory/ru_dictionary";


const Result = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<number[][]>([]);
    const [count, setCount] = useState(0)
    const { handleCalculationOSNR } = useResult();

    const handleCalculation = () => {
        setLoading(true);

        setTimeout(() => {
            const calculation = handleCalculationOSNR(); 
            setData(toJS(calculation) as number[][]); 
            setLoading(false); 
            setCount(prev => prev + 1)
        }, 500); 
    };

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
                    /></> : 
                    count === 0 ? ru.resultTitleButton : ru.resultReTitleButton}
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
                                    <TableCell align="center">{ru.resultTableHeadResult}</TableCell>
                                    <TableCell align="center">{ru.resultTableHeadOSNR}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((p, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{p[0]}</TableCell>
                                        <TableCell align="center">{p[1]}</TableCell>
                                        <TableCell align="center">{(p[2]) ? p[2].toFixed(2) : '-'}</TableCell>
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