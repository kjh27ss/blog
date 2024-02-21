import React from 'react'
import styled from 'styled-components'
import { FcDislike } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCandleSticks } from "react-icons/fc";


const Magna = styled.div`
    max-width:1300px;
    height:auto;
    background-color:#fff;
    text-align:center;
    border-bottom:1px solid #e9e9e9;
`;

const Tbox = styled.div`
    text-align:center;
`;

const Ttext = styled.h1`
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

const Mbox = styled.div`
    max-width:auto;
    height:500px;
    // border:1px solid #333;
    margin-top:20px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;

`;

const Card = styled.div`
    max-height:auto;
    width:30%;
    // border:1px solid #333;
    text-align:center


`;

const Cardimg = styled.div`
    width:200px;
    height:200px;
    background-color:#fff;
    border:1px solid #e6e6e6;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    
`;

const Cardcir = styled.div`
    width:170px;
    height:170px;
    border:1px solid #e6e6e6;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Iconh1 = styled.h1`
    color:#666;
    margin-top:30px;

`;

const Icont = styled.span`
    color:#666;
    margin-top:10px;
`;

const Mbtn = styled.button`
    padding:10px 30px;
    background-color:#fff;
    border:1px solid #e6e6e6;
    color:#666;
    border-radius:10px;
    margin-top:30px;
    margin:0 auto;
    margin-bottom:40px;

`;





const SessionB = () => {
  return (
    <Magna>
        <Tbox>
            <Ttext>Magna Veroeros</Ttext>
            <Cline></Cline>
        </Tbox>
        <Mbox> 
            {/* //1 */}
            <Card> 
                <Cardimg>
                    <Cardcir>
                        <FcDislike style={{fontSize:"5em"}}/>
                    </Cardcir>
                </Cardimg>
                <Iconh1>Ipsum consequat</Iconh1>
                <Icont>
                    Sed lorem amet ipsum dolor et amet<br/>
                    nullam consequat a feugiat consequat<br/>
                    tempus veroeros sed consequat.
                </Icont>
            </Card>
            {/* //2 */}
            <Card>
                <Cardimg>
                    <Cardcir>
                        <FcAndroidOs style={{fontSize:"5em"}}/>
                    </Cardcir>
                </Cardimg>
                <Iconh1>Amed sed feugiat</Iconh1>
                <Icont>
                    Sed lorem amet ipsum dolor et amet<br/>
                    nullam consequat a feugiat consequat<br/>
                    tempus veroeros sed consequat.
                </Icont>
            </Card>
            {/* 3 */}
            <Card>
                <Cardimg>
                    <Cardcir>
                        <FcCandleSticks style={{fontSize:"5em"}}/>
                    </Cardcir>
                </Cardimg>
                <Iconh1>Dolor nullam</Iconh1>
                <Icont>
                    Sed lorem amet ipsum dolor et amet<br/>
                    nullam consequat a feugiat consequat<br/>
                    tempus veroeros sed consequat.
                </Icont>
            </Card>
        </Mbox>
        <Mbtn>Learn More</Mbtn>
    </Magna>
  )
}

export default SessionB