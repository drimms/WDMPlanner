import { Box, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { clientTransponder } from './inventory/transponter'
import { useMenu } from "../UI/useMenu";
import { IProps } from "./IInterface";

const Node = ({ index }: IProps) => {
    const [type, setType] = useState('');
    const [payload, setPayload] = useState('');
    const [power, setOutputPower] = useState('');
    const [error, setError] = useState(false);

    const { handleCardClose } = useMenu();

    const handleAmpChange = (e: SelectChangeEvent) => {
        let typeClientCard = e.target.value;
        setType(typeClientCard);
    };

    const handleChangeOutputPower = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value !== "") {
            setError(false);
        } else {
            setError(true);
        }

        setOutputPower(value);
    };

    return (
        <>
            <Card sx={{ width: 600, mt: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                            {index}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleCardClose(index)}>
                            <HighlightOffIcon />
                        </IconButton>
                    }
                    title="Клиентский узел"
                    subheader={type}
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
                            value={type}
                            onChange={handleAmpChange}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                Ввести тип платы
                            </MenuItem>
                            {clientTransponder.map((p, i) => (
                                <MenuItem key={i} value={p.title}>
                                    {p.title}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            value={payload}
                            onChange={e => setPayload(e.target.value)}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                Тип трафика
                            </MenuItem>
                            {clientTransponder.find(p => p.title === type)?.payload.map((p, i) => (
                                <MenuItem key={i} value={p}>
                                    {p}
                                </MenuItem>
                            ))
                            }
                        </Select>
                        <TextField
                            label="Уровень выходной мощности, дБм"
                            value={power}
                            onChange={handleChangeOutputPower}
                            error={error}
                            helperText={error ? "В шары не долбись, брат" : ''}
                        />
                    </Box>
                </CardContent>



            </Card>
        </>
    )
};

export default Node;