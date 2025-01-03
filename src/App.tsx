
import './App.css'
import Topology from './component/UI/Topology'
import ListNode from './component/UI/ListNode'
import { MenuProvider } from './component/UI/Menu/useMenu'
import { observer } from "mobx-react-lite";


const App = observer(() => {

  return (
    <>
      <MenuProvider>
        <Topology />
        <ListNode /> 
      </MenuProvider>
    </>
  )
});

export default App
