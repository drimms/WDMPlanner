import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMenu } from "../../UI/Menu/useMenu";
import { IProps } from "../IInterface";
import rootStore from "../../../store/rootStore";
import useAmplifier from "./useAmplifier";
import { opticalAmplifier } from '../inventory/amplifier'
import { observer } from "mobx-react-lite";

const Pump = observer(({ index }: IProps) => {
  
  const { handleCardClose } = useMenu();

  const { handleAmpChange } = useAmplifier();

  return (
    <>
      <Card sx={{ maxWidth: 600, mt: 3 }}>
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
          subheader={rootStore.amplifierStore.type}
        />
        <CardContent>

          <Box sx={{ '& .MuiTextField-root': { ml: 2, mb: 2, width: '25ch' } }}>
            <Select
              value={rootStore.amplifierStore.type}
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
              value={rootStore.amplifierStore.gain}
              onChange={e => rootStore.amplifierStore.setGain(Number(e.target.value))}
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
});

export default Pump;