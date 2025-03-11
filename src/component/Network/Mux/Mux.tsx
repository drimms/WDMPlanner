import { Box, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMenu } from "../../UI/Menu/useMenu";
import { IProps } from "../IInterface";
import rootStore from "../../../store/rootStore";
import useAmplifier from "./useMux";
import { observer } from "mobx-react-lite";
import ru from '../inventory/ru_dictionary'

const Mux = observer(({ index }: IProps) => {
  
  const {handleDeleteComponent} = useMenu();

  const { handleMuxChange } = useAmplifier();

  return (
    <>
      <Card sx={{ maxWidth: 600, mt: 3 }}>
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={'/assets/network/muxdemux.png'}width="40px" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleDeleteComponent(index)}>
              <HighlightOffIcon />
            </IconButton>
          }
          title={ru.mux}
        />
        <CardContent>

          <Box sx={{ '& .MuiTextField-root': { ml: 2, mb: 2, width: '25ch' } }}>
            <TextField
              label={ru.inputMux}
              value={rootStore.unitStore.mux[index]?.totalLoss || 0}
              onChange={(e) => handleMuxChange(index, e)}
              name='totalLoss'
              type="number"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  )
});

export default Mux;