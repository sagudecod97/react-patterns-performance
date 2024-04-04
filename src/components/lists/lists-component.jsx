import "./lists-component.scss";

const ListsComponent = ({ sourcePropName, items, ListToRender }) => {
  return <ListToRender {...{ [sourcePropName]: items }} />;
};

export default ListsComponent;
