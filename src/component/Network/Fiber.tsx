import { Card, Box, Select, MenuItem, TextField, Typography, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { opticalFiber } from "./inventory/fiber";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import {IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMenu } from "../UI/useMenu";


const Fiber = ({index}) => {
    const [span, setSpan] = useState('');
    const [att, setAtt] = useState<number | undefined>();
    const [fiber, setFiber] = useState('');
    const result = span && att ? parseFloat(span) * parseFloat(att) : '';

    const { handleCardClose } = useMenu();

    const handleFiberChange = (e: SelectChangeEvent) => {
        let typeAmplifier = e.target.value;
        setFiber(typeAmplifier);
        let amp = opticalFiber.find(p => p.title === typeAmplifier);
        setAtt(amp?.attenuation);
    };

    return (
        <>
        

            <Card sx={{ width: 600, mt:3 }}>
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
                sx={{ '& .MuiTextField-root': { m: 0, width: '25ch' },
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
                    onChange={(e) => setSpan(e.target.value)}
                    type='number'

                    />
                <TextField 
                    disabled
                    value={result + ' ' + 'дБ'}/>
            </Box>
      </CardContent>
      
    
      
    </Card>
        </>
    )
};

export default Fiber