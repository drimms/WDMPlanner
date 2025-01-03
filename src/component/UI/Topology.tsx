import { Container, Box, Typography } from "@mui/material";
import { useMenu } from "./Menu/useMenu";
import client from '../../assets/network/icon-aocs.webp';
import ampl from '../../assets/network/icon-passives-new.png';
import fiber from '../../assets/network/icon-cables.webp';


const Topology = () => {

    const { components } = useMenu();

    const renderComponent = (component, index) => {
        const componentMap = {
            Node: { src: client, label: 'Узел доступа', color: 'blue' },
            Fiber: { src: fiber, label: 'Оптический пролет', color: 'green' },
            Pump: { src: ampl, label: 'Усилитель', color: 'red' },
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
                    {components.map((component, index) => renderComponent(component, index))}
                </Box>
            </Container>
        </>
    )
};

export default Topology;