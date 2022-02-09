import "./ButtonSecondary.css";

type Props = {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
};

const ButtonSecondary = (props: Props) => {
  return (
    <button className={`buttonSecondary ${props.className}`} type={props.type}>
      <span>{props.name}</span>
    </button>
  );
};

export default ButtonSecondary;
