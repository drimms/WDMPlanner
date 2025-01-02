
import './App.css'
import Topology from './component/Network/Topology'
import ListNode from './component/UI/ListNode'
import { MenuProvider } from './component/UI/useMenu'

function App() {
  

  return (
    <>
      <MenuProvider>
        <Topology />
        <ListNode /> 
      </MenuProvider>
    </>
  )
}

export default App
