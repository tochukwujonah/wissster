import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  background-color: ${colors.primary};
`;

export const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 1300px;
  padding: 3rem 0;
  margin: 0 auto;
  gap: 2.5rem;
`;
export const ServiceWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
`;
export const ServiceCard = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 3rem 4.5rem;
  background-color: ${colors.secondary};
  display: flex;
  gap: 1.6rem;
`;
export const IconWrapper = styled.div`
  height: 4rem;
  width: 6rem;
  border: 1px solid red;
`;
export const Icon = styled.div``;
export const ServiceTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  & > h3 {
    font-size: 2.25rem;
    font-weight: 400;
    color: ${colors.white};
  }
  & > p {
    font-size: 16px;
    color: ${colors.light_grey};
    line-height: 34px;
    margin-top: 0.5rem;
  }
`;
