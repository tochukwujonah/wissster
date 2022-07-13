import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import { 
    swirl, 
    customerService,
 } from '../../assets';

import { Button } from '../button';

const LetsConnect = () => {
  return (
    <Container>
        <LetsWork>
            <h5>We're available</h5>
            <h3>Lets get to work</h3>
            <Button filled bgColor={colors.yellow} noIcon text={'Contact us'} />
        </LetsWork>

        <img src={customerService} alt="" />
    </Container>
  )
}

const Container = styled.section`
    width: 1080px;
    max-width: 100%;
    padding: 45px 50px;
    background-image: url(${swirl});
    background: linear-gradient(120.14deg, #6201C6 0%, #180641 100%);
    display: flex;
    justify-content: space-between;
    margin: 55px auto;
    position: relative;

    & > img{
        position: absolute;
        right: 10%;
        top: 0;
    }
  `;

  const LetsWork = styled.div`

    
    & > h3{
        margin-bottom: 30px;
    }

    & > h5{
        margin-bottom: 24px;
    }
  `

export {LetsConnect}