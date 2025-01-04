import { Box, MenuItem, Select, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { clientTransponder } from '../inventory/transponter'
import { useMenu } from "../../UI/Menu/useMenu";
import { IProps } from "../IInterface";
import rootStore from "../../../store/rootStore";
import useNode from "./useNode";
import { observer } from "mobx-react-lite";
import ru from "../inventory/ru_dictionary";


const Node = observer(({ index }: IProps) => {

    const { handleDeleteComponent } = useMenu();

    const { handlePayloadChange, handleChangeOutputPower, handleTitleNode } = useNode();
    

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
                        <IconButton aria-label="settings" onClick={() => handleDeleteComponent(index)}>
                            <HighlightOffIcon />
                        </IconButton>
                    }
                    title={ru.nodeTitle}
                    subheader={rootStore.transponderStore.type}
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
                            <TextField
                            label={ru.nodeTitleNode}
                            value={rootStore.transponderStore.title}
                            onChange={handleTitleNode}
                        />
                        <Select
                            value={rootStore.transponderStore.type}
                            onChange={handlePayloadChange}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                {ru.nodeTypeCard}
                            </MenuItem>
                            {clientTransponder.map((p, i) => (
                                <MenuItem key={i} value={p.title}>
                                    {p.title}
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            value={rootStore.transponderStore.payload}
                            onChange={e => rootStore.transponderStore.setPayload(e.target.value)}
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                {ru.nodeTypePayload}
                            </MenuItem>
                            {clientTransponder.find(p => p.title === rootStore.transponderStore.type)?.payload.map((p, i) => (
                                <MenuItem key={i} value={p}>
                                    {p}
                                </MenuItem>
                            ))
                            }
                        </Select>
                        <TextField
                            label={ru.nodeCardPower}
                            value={rootStore.transponderStore.power}
                            onChange={handleChangeOutputPower}
                            error={rootStore.error}
                            type='number'
                        />
                    </Box>
                </CardContent>



            </Card>
        </>
    )
});

export default Node;