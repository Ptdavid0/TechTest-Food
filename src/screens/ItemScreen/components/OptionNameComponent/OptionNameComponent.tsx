import CifraIcon from "../../../../assets/icons/cifra.svg";

import { NameContainer, NameText } from "./styles";

interface OptionNameInterface {
  name: string;
  discountPrice?: number | null;
}

const OptionNameComponent: React.FC<OptionNameInterface> = ({
  name,
  discountPrice,
}) => {
  return (
    <NameContainer>
      {discountPrice ? <img src={CifraIcon} alt="Cifra" /> : null}
      <NameText>{name}</NameText>
    </NameContainer>
  );
};

export default OptionNameComponent;
