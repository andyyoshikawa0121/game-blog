import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Image from "../image/index"

export default function FirstView({ TitleText }) {
  const FirstView = styled.div`
    @media (max-width: 1079px) {
      height: 40vh;
      div {
        height: 40vh;
      }
    }
    @media (min-width: 1080px) {
      height: 80vh;
      div {
        height: 80vh;
      }
    }
    width: 100vw;
    min-height: 300px;
    background-color: gray;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 100px;
    position: relative;
    overflow: hidden;
    div {
      width: 100%;
      min-height: 300px;
    }
  `
  const TitleCard = styled.div`
    border-right: 20vw solid transparent;
    border-top: 100vh solid #64e830;
    height: 50vh!important;
    min-height: 300px!important;
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw!important;
    z-index: 1;
  `

  const Title = styled.h2`
    position: absolute;
    z-index: 2;
    text-align: center;
    width: 50vw;
    left: -5vw;
    font-size: 6vw;
  `
  const Arrow = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 auto;
    border: 5px solid;
    border-color:  transparent transparent #565656 #565656;
    transform: rotate(-45deg);
    margin-top: 32px;
    opacity: 0.5;
  `

  return (
    <div>
      <FirstView>
        <Title>
          { TitleText }
        </Title>
        <TitleCard/>
        <Image filename="profile.png" />
      </FirstView>
      <Arrow/>
    </div>
  );
}