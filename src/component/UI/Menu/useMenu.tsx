import { createContext, useContext, useState } from "react";
import rootStore from "../../../store/rootStore";


const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const open = Boolean(anchorEl);

    const handleAddComponent = (componentType: string) => {
        rootStore.menuStore.addComponent(componentType);
        handleClose();
    };
    
    const handleClick = (event: MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteComponent = (index: number) => {
        rootStore.menuStore.removeComponent(index);
    }

    return (
        <MenuContext.Provider
            value={{
                open,
                anchorEl,
                handleAddComponent,
                handleClick,
                handleClose,
                handleDeleteComponent
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};