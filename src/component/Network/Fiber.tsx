import { Card, Box, Select, MenuItem, TextField, Typography, SelectChangeEvent } from "@mui/material";
import { opticalFiber } from "./inventory/fiber";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMenu } from "../UI/useMenu";
import { IProps } from "./IInterface";
import { useCalculation } from "./useCalculation";


const Fiber = ({ index }: IProps) => {
    const { handleCardClose } = useMenu();
    const { fiber, span, result, handleFiberChange, handleSpanLength } = useCalculation();
   
    return (
        <>
            <Card sx={{ width: 600, mt: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'green' }} aria-label="recipe">
                            {index}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleCardClose(index)}>
                            <HighlightOffIcon />
                        </IconButton>
                    }
                    title="Оптическое волокно"
                    subheader={fiber}
                />
                <CardContent>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 0, width: '25ch' },
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: 2
                        }}>
                        <Select
                            value={fiber}
                            onChange={handleFiberChange}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                Ввести тип волокна
                            </MenuItem>
                            {opticalFiber.map((p, i) => (
                                <MenuItem key={i} value={p.title}>
                                    {p.title}
                                </MenuItem>
                            ))}
                        </Select>

                        <TextField
                            label="Ввести длину пролета, км"
                            value={span}
                            onChange={handleSpanLength}
                            type='number'

                        />
                        <TextField
                            disabled
                            value={result + ' ' + 'дБ'} />
                    </Box>
                </CardContent>



            </Card>
        </>
    )
};

export default Fiber