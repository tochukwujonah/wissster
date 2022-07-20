import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  background-color: ${colors.secondary};
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1150px;
  min-height: calc(100vh - 80px);
  /* align-items: center; */
  padding: 9.1rem 0;
  margin: 0 auto;
  border: 1px solid red;
`;
