import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import {useMenu} from './useMenu';


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
      >
        Добавить компонент
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
        <MenuItem onClick={() => handleAddComponent('Node')}> <AccountCircleIcon /> Клиентский узел</MenuItem>
        <MenuItem onClick={() => handleAddComponent('Pump')}><EmojiObjectsIcon /> Усилитель</MenuItem>
        <MenuItem onClick={() =>  handleAddComponent('Fiber')}><SpaceBarIcon /> Оптический пролет</MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu;