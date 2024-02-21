import React from 'react'
import styled from 'styled-components'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Fdiv = styled.div`
    margin-top:80px;
    text-align:center;
`;

const Fird = styled.div`
  margin-bottom:50px;
  color:rgba(255,255,255,.9);
`;

const Ficon = styled.div`
  margin-bottom:50px;
  display:flex;
  justify-content:center;
`;

const Twit = styled.p`
  border:1px solid rgba(255,255,255,.7);
  padding:10px 10px;
  border-radius:30px;
  display:flex;
  align-items:center;
`;

const Faceb = styled.p`
  border:1px solid #333;
  border:1px solid rgba(255,255,255,.7);
  padding:10px 10px;
  border-radius:30px;
  display:flex;
  align-items:center;
  margin-left:30px;
  margin-right:30px;
`;

const Insta = styled.p`
  border:1px solid #333;
  border:1px solid rgba(255,255,255,.7);
  padding:10px 10px;
  border-radius:30px;
  display:flex;
  align-items:center;
`;

const Footer = () => {
  return (
    <Fdiv>
      <Fird>
        Copyright &copy; 2024 blog all right reserved
      </Fird>
      <Ficon>
        <Twit>
          <FaSquareXTwitter size={32}/>
        </Twit>
        <Faceb>
          <FaFacebookF size={32}/>
        </Faceb>
        <Insta>
          <FaInstagram size={32}/>
        </Insta>
      </Ficon>
    </Fdiv>
  )
}

export default Footer