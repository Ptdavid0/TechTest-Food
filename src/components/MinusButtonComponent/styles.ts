import styled from "styled-components";

import { devices } from "@utils/styles";

export const ButtonContainer = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.Transparent};
  border: none;
  cursor: pointer;
  padding: 0;

  > img {
    width: 100%;
    object-fit: contain;
    @media screen and (${devices.laptop}) {
      width: 80%;
    }
  }
`;
