import './MenuItem.css';

type Props = {
  title?: string;
};

const MenuItem = ({title}: Props) => {
  return <div className="menuItem">
    <h4>{title}</h4>
  </div>;
};

export default MenuItem;