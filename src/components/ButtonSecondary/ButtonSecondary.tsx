import "./ButtonSecondary.css";

type Props = {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const ButtonSecondary = (props: Props) => {
  return (
    <button className="buttonSecondary" type={props.type}>
      <span>{props.name}</span>
    </button>
  );
};

export default ButtonSecondary;
