import "./ButtonPrimary.css";

type Props = {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const ButtonPrimary = ({ name, type, onClick }: Props) => {
  return (
    <button 
      className="buttonPrimary"
      onClick={onClick}
      type={type}>{name}
    </button>
  );
};

export default ButtonPrimary;
