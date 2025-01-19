import { createContext, useContext, useState } from "react";
import rootStore from "../../../store/rootStore";
import { toJS } from "mobx";


const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null);
    const open = Boolean(anchorEl);

    const handleAddComponent = (componentType: string) => {
        switch (componentType) {
            case 'Node':
                let id = rootStore.menuStore.addComponent(componentType, rootStore.transponderStore.transponderNode);
                rootStore.menuStore.setKey(id);
                break
            case 'Fiber':
                id = rootStore.menuStore.addComponent(componentType, rootStore.fiberStore.fiberSection);
                rootStore.menuStore.setKey(id);
                break
            case 'Pump':
                id = rootStore.menuStore.addComponent(componentType, rootStore.amplifierStore.amplifier);
                rootStore.menuStore.setKey(id);
                break
        }
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
    return useContext(MenuContext);
};