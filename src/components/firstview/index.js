import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Image from "../image/index"

export default function FirstView() {
  const FirstView = styled.div`
    width: 100vw;
    height: 80vh;
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
      height: 80vh;
      min-height: 300px;

    }
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
        <Image filename="profile.png" />
      </FirstView>
      <Arrow/>
    </div>
  );
}