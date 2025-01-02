import { createContext, useContext, useState } from "react";
import { useCalculation } from "../Network/useCalculation";


const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [components, setComponents] = useState([]);
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const open = Boolean(anchorEl);
    const [total, setTotal] = useState([])
    const { result } = useCalculation()

    const handleAddComponent = (componentType: string) => {
        setComponents((prev) => [...prev, componentType]);
        
        handleClose();
    };
    console.log(result)
    const handleClick = (event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCardClose = (index: number) => {
        setComponents((prev) => prev.filter((_, idx) => idx !== index));
    }

    return (
        <MenuContext.Provider
            value={{
                components,
                open,
                anchorEl,
                handleAddComponent,
                handleClick,
                handleClose,
                handleCardClose
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};