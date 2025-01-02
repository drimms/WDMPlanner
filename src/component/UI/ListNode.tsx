import Fiber from '../Network/Fiber'
import Pump from '../Network/Pump'
import Node from '../Network/Node'
import { useMenu } from './useMenu';
import BasicMenu from './Menu';
import Result from './Result';


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

export default ListNode;