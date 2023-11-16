import styled from "styled-components";

export const Container = styled.footer`
  background-color: #eef0f5;
  width: 100%;
  padding: 32px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  // Should it be fixed ?
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CopyrigthText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #580f78;
`;

export const MessageFromCompanyText = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #580f78;
`;
