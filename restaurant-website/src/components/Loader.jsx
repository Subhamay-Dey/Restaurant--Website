import React, { useEffect } from 'react';
import styled from "styled-components";
import {gsap, CSSPlugin, Expo} from "gsap";
gsap.registerPlugin(CSSPlugin);

export default function Loader() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const count = setInterval(() => {
        setCounter(
            (counter) => (
                counter < 100 ? Counter + 1 : (clearInterval(count), setCounter(100))
            )
        )
      }, 25)
    })
    

  return <AppContainer>

        <Loading>
            <Follow className="follow"></Follow>
            <ProgressBar className="hide" style={{width: counter + "%"}}></ProgressBar>
            <Count className="hide">{counter}%</Count>
        </Loading>

        <Content>
        <p className="title-lines">The greatest glory in living lies</p>
        <p className="title-lines">not in never falling,</p>
        <p className="title-lines">but in rising every time we fall.</p>
        <p className="title-lines">-Nelson Mandela</p>
        </Content>

    </AppContainer>
}

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    color: #000000;
    position: relative;
    text-align: center;
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Follow = styled.div`
  position: absolute;
  background-color: #f48049;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #121212;
  padding: auto;

  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  color: #fff
`;