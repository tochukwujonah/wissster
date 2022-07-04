import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-width: 1150px;
  padding: 5rem 0;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
