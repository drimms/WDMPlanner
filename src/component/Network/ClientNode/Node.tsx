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

    const { handleNodeInput } = useNode();

    const modeKey = rootStore.unitStore.node[index]?.mode as keyof typeof clientTransponder[0]["mode"] | undefined;
    const modeArray = modeKey ? clientTransponder.find(p => p.title === rootStore.unitStore.node[index]?.type)?.mode[modeKey] : [];

    return (
        <>
            <Card sx={{ width: 1100, mt: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar  aria-label="recipe">
                            <img src={'/assets/network/icon-dwdm-tunning.webp'} width="40px" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleDeleteComponent(index)}>
                            <HighlightOffIcon />
                        </IconButton>
                    }
                    title={ru.nodeTitle}
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
                            value={rootStore.unitStore.node[index]?.title || ""}
                            onChange={e => handleNodeInput(index, e)}
                            name='title'
                        />
                        <Select
                            value={rootStore.unitStore.node[index]?.type || ""}
                            onChange={(e) => handleNodeInput(index, e)}
                            name='type'
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
                            value={rootStore.unitStore.node[index]?.mode || ""}
                            onChange={e => handleNodeInput(index, e)}
                            name='mode'
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                {ru.nodeTypeMode}
                            </MenuItem>
                            {Object.keys(
                                clientTransponder.find((p) => p.title === rootStore.unitStore.node[index]?.type)?.mode || []).map((p, i) => (
                                <MenuItem key={i} value={p}>
                                    {p}
                                </MenuItem>
                            ))
                            }
                        </Select>
                        <Select
                            value={rootStore.unitStore.node[index]?.payload}
                            onChange={e => handleNodeInput(index, e)}
                            name='payload'
                            displayEmpty
                            autoWidth
                        >
                            <MenuItem value="" disabled>
                                {ru.nodeTypePayload}
                            </MenuItem>
                            {
                            modeArray?.map((p:string, i:number) => (
                                <MenuItem key={i} value={p}>
                                    {p}
                                </MenuItem>
                            ))
                            }
                        </Select>
                        <TextField
                            label={ru.nodeCardPower}
                            value={rootStore.unitStore.node[index]?.power || 0}
                            name='power'
                            onChange={e => handleNodeInput(index, e)}
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