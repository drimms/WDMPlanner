import { Card, Box, Select, MenuItem, TextField } from "@mui/material";
import { opticalFiber } from "../inventory/fiber";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMenu } from "../../UI/Menu/useMenu";
import { IProps } from "../IInterface";
import { useFiber } from "./useFiber";
import rootStore from "../../../store/rootStore";
import { observer } from "mobx-react-lite";
import ru from "../inventory/ru_dictionary";


const Fiber = observer(({ index }: IProps) => {
    const { handleDeleteComponent } = useMenu();
    const { handleFiberInput } = useFiber();

    return (
        <>
            <Card sx={{ width: 600, mt: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                           <img src={'/assets/network/fiber.png'} width="40px" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleDeleteComponent(index)}>
                            <HighlightOffIcon />
                        </IconButton>
                    }
                    title={ru.opticalSpan}
                    //subheader={rootStore.unitStore.fiber[index]?.fiberType}
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
                            value={rootStore.unitStore.fiber[index]?.fiberType || ''}
                            name="fiberType"
                            onChange={e => handleFiberInput(index, e)}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                {ru.opticalFiberType}
                            </MenuItem>
                            {opticalFiber.map((p, i) => (
                                <MenuItem key={i} value={p.title}>
                                    {p.title}
                                </MenuItem>
                            ))}
                        </Select>
                        <TextField
                            label={ru.inputLengthFiber}
                            value={rootStore.unitStore.fiber[index]?.span || 0}
                            onChange={e => handleFiberInput(index, e)}
                            type='number'
                            name="span"
                        />
                        <TextField
                            disabled
                            value={rootStore.unitStore.fiber[index]?.totalLoss + ' ' + 'дБ' || 0} />
                    </Box>
                </CardContent>



            </Card>
        </>
    )
});

export default Fiber