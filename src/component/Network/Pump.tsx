import { Box, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import {IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { opticalAmplifier } from './inventory/amplifier'
import { useMenu } from "../UI/useMenu";

const Pump = ({index}) => {
    const [nf, setNF] = useState<number>();
    const [type, setType] = useState('');
    const [gain, setGain] = useState('');

    const { handleCardClose } = useMenu();

    const handleAmpChange = (e: SelectChangeEvent) => {
        let typeAmplifier = e.target.value;
        setType(typeAmplifier);
        let amp = opticalAmplifier.filter(p => p.title === typeAmplifier);
        setNF(amp[0].nf);
    };

    return (
        <>
           
            
            <Card sx={{ maxWidth: 600, mt:3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {index}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => handleCardClose(index)}>
            <HighlightOffIcon />
          </IconButton>
        }
        title="Оптический усилитель"
        subheader={type}
      />
      <CardContent>
        
      <Box sx={{ '& .MuiTextField-root': { ml: 2, mb:2, width: '25ch' } }}>
                <Select 
                    value={type}
                    onChange={handleAmpChange}
                    displayEmpty
                    
                >
                    <MenuItem value="" disabled>
                        Ввести тип усилителя
                    </MenuItem>
                    {opticalAmplifier.map((p, i) => (
                        <MenuItem key={i} value={p.title}>
                            {p.title}
                        </MenuItem>
                    ))}
                </Select>
                <TextField 
                    label="Ввести коэффициент усилителя" 
                    value={gain}
                    onChange={e => setGain(e.target.value)}
                    type="number"
                />
            </Box>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Краткое описание оптического усилителя
        </Typography>
      </CardContent>
    
      
    </Card>
        </>
    )
};

export default Pump