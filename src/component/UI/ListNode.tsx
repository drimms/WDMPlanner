import Fiber from '../Network/OpticalSpan/Fiber'
import Pump from '../Network/Amplifier/Pump'
import Node from '../Network/ClientNode/Node'
import BasicMenu from './Menu/Menu';
import Result from './Result/Result';
import { observer } from 'mobx-react-lite';
import rootStore from '../../store/rootStore';

const ListNode = () => {

  const components = rootStore.menuStore.components;

  const renderComponent = (type:string, index:number) => {
    
    switch (type) {
      case 'Node':
        return <Node key={index} index={index} />;
      case 'Fiber':
        return <Fiber key={index} index={index} />;
      case 'Pump':
        return <Pump key={index} index={index} />;
      default:
        return null;
    }
  };

  return (
    <>
      <BasicMenu />
      <div>
        {components.map(({ type }, index) => renderComponent(type, index))}
      </div>

      {
        components.length > 1 ? <Result /> : ''
      }

    </>
  )
};

export default observer(ListNode);