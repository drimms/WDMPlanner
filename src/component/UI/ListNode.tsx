import Fiber from '../Network/OpticalSpan/Fiber'
import Pump from '../Network/Amplifier/Pump'
import Node from '../Network/ClientNode/Node'
import BasicMenu from './Menu/Menu';
import Result from './Result/Result';
import { observer } from 'mobx-react-lite';
import rootStore from '../../store/rootStore';
import { toJS } from 'mobx';

const ListNode = () => {

  const components = rootStore.menuStore.components;

  const renderComponent = (type:string, id:any) => {
    
    switch (type) {
      case 'Node':
        return <Node key={id} index={id} />;
      case 'Fiber':
        return <Fiber key={id} index={id} />;
      case 'Pump':
        return <Pump key={id} index={id} />;
      default:
        return null;
    }
  };

  return (
    <>
      <BasicMenu />
      <div>
        {components.map(({ type, id }) => renderComponent(type, id))}
      </div>

      {
        components.length > 1 ? <Result /> : ''
      }

    </>
  )
};

export default observer(ListNode);