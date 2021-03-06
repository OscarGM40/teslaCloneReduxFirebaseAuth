import "./HeaderBlock.css";

type Props = {};

const HeaderBlock = (props: Props) => {
  return (
    <div className="headerBlock">
      <div className="headerBlock__info">

        <div className="headerBlock__infoText">
          <h1>Model 3</h1>
          <h4>Order Online for <span>Touchless Delivery</span></h4>
      </div>

        <div className="headerBlock__actions">
        <button className="headerBlock__buttonPrimary">
          custom order 
        </button>
        <button className="headerBlock__buttonSecondary">
          exiting inventory
        </button>
      </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
