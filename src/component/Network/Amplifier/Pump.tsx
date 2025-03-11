import { Box, MenuItem, Select, TextField } from "@mui/material";
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
import ru from '../../Network/inventory/ru_dictionary'

const Pump = observer(({ index }: IProps) => {
  
  const { handleDeleteComponent } = useMenu();

  const { handleAmpChange, validation } = useAmplifier();

  let disable = !!rootStore.unitStore.pump[index]?.type;

  return (
    <>
      <Card sx={{ maxWidth: 600, mt: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
              <img src={'/assets/network/icon-aocs.webp'} width="60px" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleDeleteComponent(index)}>
              <HighlightOffIcon />
            </IconButton>
          }
          title={ru.opticalAmp}
        />
        <CardContent>

          <Box sx={{ '& .MuiTextField-root': { ml: 2, mb: 2, width: '25ch' } }}>
            <Select
              value={rootStore.unitStore.pump[index]?.type}
              onChange={(e) => handleAmpChange(index, e)}
              displayEmpty
              name='type'
            >
              <MenuItem value="" disabled>
                {ru.inputTypeAmp}
              </MenuItem>
              {opticalAmplifier.map((p, i) => (
                <MenuItem key={i} value={p.title}>
                  {p.title}
                </MenuItem>
              ))}
            </Select>
            <TextField
              disabled={!disable}
              label={ru.inputGain}
              value={rootStore.unitStore.pump[index]?.gain}
              onChange={(e) => handleAmpChange(index, e)}
              error={validation(index)}
              helperText={ validation(index) ? "Значение вне рабочего диапазона" : "" }
              name='gain'
              type="number"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  )
});

export default Pump;