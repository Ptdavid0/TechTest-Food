import styled from "styled-components";

const backgroundVariant = {
  success: "#00A296",
  neutral: "#6D6F73",
  clear: "#F8ECFE",
};

const colorVariant = {
  success: "#FFFFFF",
  neutral: "#FFFFFF",
  clear: "#7B1FA2",
};

export const Container = styled.button<{
  variant: "success" | "neutral" | "clear";
  icon?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  padding: ${({ icon }) => (icon ? "8px 24px 8px 16px;" : "8px 24px")};
  background-color: ${({ variant }) => backgroundVariant[variant]};
  border: none;
  outline: none;
  cursor: pointer;

  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${({ variant }) => colorVariant[variant]};
`;
