import React from 'react'
import styled from 'styled-components'

const Ipsum = styled.div`
    max-width:1300px;
    height:500px;
    background-color:#fff;
    display:flex;
    align-items:center;
    border-bottom:1px solid #333;
    border-color:#e9e9e9;
`;

const Ipsumbox = styled.div`
    width:60%;
    // text-align:center;
    padding-left:40px;
`;

const Ipsumh1 = styled.h1`
    color:#333;
    font-size:30px;
`;

const Linep = styled.p`
    width:150px;
    height:5px;
    background-color: #935d8c;
    background-image: url("../public/images/overlay.png"), linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
`;

const Spant = styled.span`
    color:#333;
`;

const Btnbox = styled.button`
    padding:10px 30px;
    background-color:#fff;
    border:1px solid #e6e6e6;
    color:#666;
    border-radius:10px;
    margin-top:30px;
`;

const IpsumImgbox = styled.div`
    width:40%;
    // border:1px solid #333;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Cir = styled.div`
    width:300px;
    height:300px;
    background-color:#fff;
    border:1px solid #e6e6e6;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Imgcir = styled.div`
    width:270px;
    height:270px;
    border:1px solid #333;
    border-radius:50%;
    background-color:rgb(239, 207, 161);
    border:none;
`;

const SessionA = () => {
  return (
    <Ipsum>
        <Ipsumbox>
            <Ipsumh1>Ipsum sed adipiscing</Ipsumh1>
            <Linep></Linep>
            <Spant>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna<br/>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna<br/>
                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
            </Spant><br/>
            <Btnbox>Learn More</Btnbox>
        </Ipsumbox >
        <IpsumImgbox>
            <Cir>
                <Imgcir></Imgcir>
            </Cir>
        </IpsumImgbox>


    </Ipsum>
  )
}

export default SessionA