import Button from "./ButtonDefault";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={() => {
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
};

export default ButtonBack;
