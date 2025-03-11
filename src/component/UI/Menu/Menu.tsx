import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMenu } from './useMenu';
import ru from '../../Network/inventory/ru_dictionary';


const BasicMenu = () => {
  const { open, anchorEl, handleClick, handleAddComponent, handleClose } = useMenu();

  
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="success"
        variant="contained"
      >
        {ru.inputComponent}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleAddComponent('Node')} >
          {ru.nodeTitle}
        </MenuItem>
        <MenuItem onClick={() => handleAddComponent('Pump')} >
          {ru.opticalAmp}
        </MenuItem>
        <MenuItem onClick={() => handleAddComponent('Fiber')} >
          {ru.opticalSpan}
        </MenuItem>
        <MenuItem onClick={() => handleAddComponent('Mux')} >
          {ru.mux}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu;