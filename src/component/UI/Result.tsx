import { Box, Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState } from "react"


const Result = () => {

    const [loading, setLoading] = useState(false);

    const handleCalculation = () => {
        setTimeout(() => {
            setLoading(true); 
        }, 2000);
    }

    return (
        <>
            <Box  sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Button 
                    variant="contained" 
                    onClick={handleCalculation} 
                >
                    Посчитай, брат
                </Button>
                
                {loading && (<TableContainer 
                        component={Paper} 
                        sx={{
                            mt: 2, width: '40%', ml: '50%'
                        }}
                    >
                    <TableHead>
                        <TableRow>
                            <TableCell>Параметр</TableCell>
                            <TableCell>Значение</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Выход клиента</TableCell>
                            <TableCell>123</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Выход оптической секции</TableCell>
                            <TableCell>2323</TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>)}
            </Box>
            
        </>
    )

}

export default Result