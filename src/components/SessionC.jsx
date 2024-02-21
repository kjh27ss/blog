import React from 'react'
import styled from 'styled-components'
import { FcLineChart } from "react-icons/fc";


const Sesc = styled.div`
    max-width:1300px;
    height:auto;
    background-color:#fff;
    text-align:center;
    border-bottom:1px solid #e9e9e9;
`;

const Cbox = styled.div`
    text-align:center;
    height:auto;
`;

const Ctext = styled.h1`
    color:#333;
    font-size:30px;
    padding-top:40px;
`;

const Cline = styled.p`
    width:120px;
    height:3px;
    background-color: #935d8c;
    background-image: url("../public/images/overlay.png"), linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
    margin:0 auto;
`;

const Cspan = styled.p`
    color:#555;
    margin-top:30px;
`;

const Cimgbox = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom:50px;
`;

const Clist = styled.div`
    width:350px;
    height:150px;
    background-color:
    border-radius:10px;
`;

const Cnum = styled.h4`
    color:#333;
    font-weight:200;
`;

const SessionC = () => {
  return (
    <Sesc>
        <Cbox>
            <Ctext>Ipsum consequat</Ctext>
            <Cline></Cline>
            <Cspan>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue<br/>
                posuere. Nulla massa uma, fermentum eget quam aliquet.
            </Cspan>
            <Cimgbox>
                <Clist>
                    <FcLineChart style={{fontSize:"6em"}}/>
                    <Cnum>5,120</Cnum>
                </Clist>
            </Cimgbox>
        </Cbox>
    </Sesc>
  )
}

export default SessionC