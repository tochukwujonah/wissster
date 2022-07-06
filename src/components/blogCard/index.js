import React from 'react';

import{ 
    Container, 
    ImageContainer,
    DetailsContainer,
    DetailsInner,
    Image,
} from './style';

import { 
    macdonald,
     
} from '../../assets';

const BlogCard = () => {
  return (
    <Container>
        <ImageContainer>
        <Image src={macdonald} />
        </ImageContainer>

        <DetailsContainer>
            <DetailsInner>
                <h6>Brand</h6>
                <h4>Common lessons from MacDonalds branding</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit etiam eget proin elit, quis. Aliquet id amet et tincidunt eget id.</p>
                <a href="#" target='_blank'>Visit our blog</a>
            </DetailsInner>
        </DetailsContainer>
    </Container>
  )
};

export {BlogCard}