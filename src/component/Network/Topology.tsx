import { Container, Box, Typography } from "@mui/material";
import { useMenu } from "../UI/useMenu";
import client from '../../assets/network/client.png';
import mux from '../../assets/network/muxdemux.png';
import fiber from '../../assets/network/fiber.png';


const Topology = () => {

    const { components } = useMenu();

    const renderComponent = (component, index) => {
        const componentMap = {
            Node: { src: client, label: 'Узел доступа' },
            Fiber: { src: fiber, label: 'Оптический пролет' },
            Pump: { src: mux, label: 'Усилитель' },
        };

        const { src, label } = componentMap[component] || {};
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
                <img src={src} width="100px" alt={`${label} Icon`} />
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