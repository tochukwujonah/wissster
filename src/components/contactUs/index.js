import React from 'react'


import{ 
    Container,
    Button,
 } from './style'

const ContactUs = () => {
  return (
    <Container>
        <h3>Contact us</h3>
        <p>We’re available for a chat, let’s collaborate on your next big project.</p>
        <Button>Shoot us a mail</Button>
    </Container>
  )
}

export {ContactUs}