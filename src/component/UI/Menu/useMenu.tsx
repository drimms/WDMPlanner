import { createContext, useContext, useState } from "react";
import rootStore from "../../../store/rootStore";

type MenuContextType = {
    open: boolean;
    anchorEl: HTMLElement | null,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleClose: () => void,
    handleAddComponent: (componentType: string) => void,
    handleDeleteComponent: (index: string) => void
};

const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider = ({ children }: any) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    let id;

    const handleAddComponent = (componentType: string) => {
        switch (componentType) {
            case 'Node':
                id = rootStore.menuStore.addComponent(componentType, rootStore.unitStore.node);
                rootStore.menuStore.setKey(id);
                break
            case 'Fiber':
                id = rootStore.menuStore.addComponent(componentType, rootStore.unitStore.fiber);
                rootStore.menuStore.setKey(id);
                break
            case 'Pump':
                id = rootStore.menuStore.addComponent(componentType, rootStore.unitStore.pump);
                rootStore.menuStore.setKey(id);
                break
            case 'Mux':
                id = rootStore.menuStore.addComponent(componentType, rootStore.unitStore.mux);
                rootStore.menuStore.setKey(id);
                break
        }
        handleClose();
    };
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteComponent = (index: string) => {
        rootStore.menuStore.removeComponent(index);
    }

    return (
        <MenuContext.Provider
            value={{
                open,
                anchorEl,
                handleClick,
                handleClose,
                handleAddComponent,
                handleDeleteComponent
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return context;
};