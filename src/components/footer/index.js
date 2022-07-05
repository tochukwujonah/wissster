import React from "react";
import {
  
  FooterWrap,
  FooterContentWrap,
  FooterNav,
  FooterCredit,
  FooterLink,
} from "./style";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContentWrap>
        <FooterNav>
          <FooterLink 
            href="https://facebook.com/">

            Facebook
          </FooterLink>

          <FooterLink 
            href="https://instagram.com/">

            Instagram
          </FooterLink>

          <FooterLink 
            href="https://linkedIn.com/">

            LinkedIn
          </FooterLink>

          <FooterLink 
            href="https://pinterest.com/">

            Pinterest
          </FooterLink>
        </FooterNav>
        <FooterCredit>
          ©2022 Wissster, All rights reserved.
        </FooterCredit>
      </FooterContentWrap>
    </FooterWrap>
      )
};

export { Footer };
