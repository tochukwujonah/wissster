import React from 'react'
import styled from 'styled-components'

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

    & h3 {
        font-family: 'Dela Gothic One', cursive;
    }

    & p {
        font-family: 'Metropolis', sans-serif;

    }
`;