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
  flex-wrap: wrap;
  width: 100%;
  gap: 3rem;

  @media screen and (max-width: 600px) {
    gap: 1rem;
    }
`;
export const ServiceCard = styled.div`
  max-width: 550px;
  width: 100%;
  padding: 3rem 4.5rem;
  background-color: ${colors.secondary};
  display: flex;
  gap: 1.6rem;

  @media screen and (max-width: 600px) {
    padding: 3rem 2rem;
    }
`;
export const IconWrapper = styled.div`
  height: 4rem;
  width: 6rem;
`;
export const Icon = styled.img``;
export const ServiceTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  & > h3 {
    font-size: 2.25rem;
    font-weight: 400;
    color: ${colors.white};

    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  & > p {
    font-size: 16px;
    color: ${colors.light_grey};
    line-height: 34px;
    margin-top: 0.5rem;

    @media screen and (max-width: 600px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
