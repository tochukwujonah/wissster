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
            href="https://web.facebook.com/wisssterstudio/">

            Facebook
          </FooterLink>

          <FooterLink 
            href="https://www.instagram.com/wisssterstudio/">

            Instagram
          </FooterLink>

          <FooterLink 
            href="https://www.linkedin.com/company/wisssterstudio">

            LinkedIn
          </FooterLink>

          <FooterLink 
            href="https://www.pinterest.com/wisssterstudio/">

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
