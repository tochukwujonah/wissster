import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

import { BlogCard } from '../blogCard'

const OurBlog = () => {
  return (
    <Container>
        <h3>Our Blog</h3>
        <p>We share ideas related to branding to help you understand we do at Wisster</p>

        <BlogCard />
    </Container>
  )
}

export {OurBlog}

const Container = styled.section`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 80px;

    & h3 {
        font-family: 'Dela Gothic One', cursive;
        color: ${colors.light_grey};
    }

    & p {
        font-family: 'Metropolis', sans-serif;
        color: ${colors.light_grey};
        padding-top: 16px;
    }
`;