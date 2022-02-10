import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import "./Car.css";

type Props = {
  imgSrc: string;
  model: string;
  testDrive?: boolean;
};

const Car = ({ imgSrc, model, testDrive }: Props) => {
  return (
    <div className="car">
      <div className="car__image">
        <img src={imgSrc} alt={model} />
      </div>
      <h2 className="car__model">{model}</h2>
      <div className="car__actions">
        <ButtonPrimary name="order" type="button" />
        { testDrive && <ButtonSecondary name="test drive" type="button" /> }
      </div>
      <div className="car__info">
        <span>Request a Call</span> to speak with a product specialist, value your trade-in or apply for leasing
      </div>
    </div>
  );
};

export default Car;
