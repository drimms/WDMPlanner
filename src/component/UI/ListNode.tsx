import Fiber from '../Network/OpticalSpan/Fiber'
import Pump from '../Network/Amplifier/Pump'
import Node from '../Network/ClientNode/Node'
import { useMenu } from './Menu/useMenu';
import BasicMenu from './Menu/Menu';
import Result from './Result';
import { observer } from 'mobx-react-lite';


const ListNode = () => {
  const { components } = useMenu();

  const renderComponent = (component:string, index:number) => {
    switch (component) {
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
        {components.map((component, index) => renderComponent(component, index))}
      </div>

      {
        components.length > 1 ? <Result /> : ''
      }

    </>
  )
};

export default observer(ListNode);