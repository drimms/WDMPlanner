import { Container, Box, Typography } from "@mui/material";
import { useMenu } from "./Menu/useMenu";
import client from '../../assets/network/icon-aocs.webp';
import ampl from '../../assets/network/icon-passives-new.png';
import fiber from '../../assets/network/icon-cables.webp';
import rootStore from "../../store/rootStore";
import { observer } from "mobx-react-lite";
import ru from "../Network/inventory/ru_dictionary";


const Topology = () => {

    const components = rootStore.menuStore.components;

    const renderComponent = (component, index) => {
        console.log(component, index)
        const componentMap = {
            Node: { src: client, label: ru.nodeTitle, color: 'blue' },
            Fiber: { src: fiber, label: ru.opticalSpan, color: 'green' },
            Pump: { src: ampl, label: ru.opticalAmp, color: 'red' },
        };

        const { src, label, color } = componentMap[component] || {};
        if (!src) return null;

        return (
            <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                margin={1}
            >
                <img src={src} width="100px" alt={`${label} Icon`} style={{background: `${color}`}}/>
                <Typography variant="caption" align="center">{label}</Typography>
            </Box>
        );
    };


    return (
        <>
            <Container>
                <Box sx={{ mb: 3, display: 'flex' }}>
                    {components.map(({ type }, index) => renderComponent(type, index))}
                </Box>
            </Container>
        </>
    )
};

export default observer(Topology);