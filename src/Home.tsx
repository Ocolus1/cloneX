import React from 'react'

import styled from 'styled-components';
import { Link } from "react-router-dom";

const Home = () => {
  const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px;
    overflow-x: hidden;
  `;

  const RedDiv = styled.div`
    width: 100%;
    height: 30rem;
    background: #e00000;
    position: relative;

    @media (max-width: 768px) {
      height: 20rem;
    }
  `;
  const HeaderDiv = styled.div`
    width: 100vw;
    height: auto;
    background: inherit;
    padding-left: 15rem;
    padding-top: 1.5rem;
    margin-bottom: 0;
    overflow-x: hidden;

    @media (max-width: 1024px) {
      padding-left: 10%;
    }
  `;

  const HeadImg = styled('img')`
    width: 2rem;
    height: 3rem;

    @media (max-width: 1024px) {
      width: 1.7rem;
      height: 2.7rem;
    }
  `;
  const HeadImg2 = styled('img')`
    width: 8rem;
    height: 2rem;
    padding-left: 0.8rem;

    @media (max-width: 1024px) {
      width: 7.7rem;
      height: 1.7rem;
    }
  `;

  // const Test = styled.span`
  //   color: white;

  //   @media (max-width: 1280px) {
  //     color: blue;
  //   }
  //   @media (max-width: 1024px) {
  //     color: green;
  //   }
  //   @media (max-width: 992px) {
  //     color: yellow;
  //   }
  //   @media (max-width: 768px) {
  //     color: white;
  //   }
  //   @media (max-width: 576px) {
  //     color: blue;
  //   }
  //   @media (max-width: 360px) {
  //     color: brown;
  //   }
  // `;

  const ImageDiv = styled.div`
    margin-top: 0.4rem;
    text-align: center;
    width: 100vw;
  `;

  const Img = styled.img`
    width: 100%;
    transition: transform 1s;
    margin-bottom: 1rem;
    height: 9rem;

    @media (max-width: 992px) {
      height: 8rem;
      margin-bottom: 0.85rem;
    }

    @media (max-width: 768px) {
      height: 7rem;
      margin-bottom: 0.3rem;
    }

    @media (max-width: 576px) {
      height: 6rem;
    }

    @media (max-width: 360px) {
      height: 5rem;
    }
  `;

  const Slide = styled.div`
    height: 250px;
    width: 250px;
    display: flex;
    align - items: center;
    padding: 15px;
    perspective: 100px;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 576px) {
      width: 80px;
      height: 80px;
    }
  `;
  const Slider = styled.div`
    height: 10rem;
    margin: auto;
    position: relative;
    width: 90%;
    display: Grid;
    place-item: center;

    @media (max-width: 992px) {
      height: 9rem;
      margin-bottom: 0.71rem;
    }

    @media (max-width: 768px) {
      height: 8rem;
      margin-bottom: 0;
    }
    @media (max-width: 576px) {
      height: 7rem;
    }

    @media (max-width: 360px) {
      height: 6rem;
    }
  `;
  const SlideTrack = styled.div`
    display: flex;
    width: calc(250px * 28);
    animation: scroll 40s linear infinite;
    @media (max-width: 768px) {
      animation: scroll1 20s linear infinite;
    }
    @media (max-width: 576px) {
      animation: scroll2 10s linear infinite;
    }
  `;
  const SlideTracker = styled.div`
    display: flex;
    width: calc(250px * 28);
    animation: scroller 40s linear infinite;
    @media (max-width: 768px) {
      animation: scroller1 20s linear infinite;
    }
    @media (max-width: 576px) {
      animation: scroller2 10s linear infinite;
    }
  `;

  const WhiteDiv = styled.div`
    margin-top: 11rem;
    width: 100%;
    height: auto;
    text-align: center;

    @media (max-width: 992px) {
      margin-top: 9rem;
    }

    @media (max-width: 768px) {
      margin-top: 12rem;
    }

    @media (max-width: 576px) {
      margin-top: 8rem;
    }

    @media (max-width: 360px) {
      margin-top: 5rem;
    }
  `;

  const WhiteDivText = styled.p`
    font-family: 'Futura Lt BT';
    width: 50%;
    font-size: 300%;
    text-align: center;
    margin: 0.5rem auto;

    @media (max-width: 1024px) {
      font-size: 250%;
    }

    @media (max-width: 992px) {
      font-size: 200%;
    }

    @media (max-width: 768px) {
      font-size: 150%;
    }

    @media (max-width: 576px) {
      width: 80%;
      font-size: 150%;
    }
  `;
  const WhiteDivBoxWrapper = styled.div`
    width: 100%;
    margin: 1rem auto 4rem auto;
  `;

  const WhiteDivBox = styled.div`
    background: #e00000;
    padding: 0.1rem 0.5rem 2rem 0.5rem;
    width: 30%;
    height: auto;
    display: inline-block;
    margin: 1rem;
    border-radius: 7%;
    border: 1px solid black;

    @media (max-width: 576px) {
      display: block;
      margin: 1rem auto;
    }
  `;

  const WhiteDivBoxText = styled.p`
    font-size: 400%;
    font-family: 'Bradley Hand ITC';
    color: #ffffff;
    margin: 0.6rem;

    @media (max-width: 1024px) {
      font-size: 300%;
    }

    @media (max-width: 992px) {
      font-size: 250%;
    }

    @media (max-width: 768px) {
      font-size: 200%;
    }

    @media (max-width: 576px) {
      font-size: 150%;
    }
  `;

  const WhiteDivBoxButton = styled.button`
    background: #ffffff;
    padding: 0.5rem 3rem;
    color: #e00000;
    border-radius: 8%;
    font-size: 300%;
    font-weight: 600;
    border: 1px solid white;

    @media (max-width: 992px) {
      font-size: 200%;
      padding: 0.3rem 2rem;
    }

    @media (max-width: 576px) {
      font-size: 200%;
      padding: 0.2rem 1rem;
      font-size: 150%;
      font-weight: 500;
    }
  `;

  const WhiteDivBoxIconsWrapper = styled.p`
    width: 18.1%;
    margin: 0.3rem;
    text-align: center;
    display: inline-block;

    @media (max-width: 576px) {
      // margin: 0;
    }
  `;

  const WhiteDivBoxIcons = styled.img`
    width: 53px;
    height: 53px;

    @media (max-width: 992px) {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 576px) {
      width: 24px;
      height: 24px;
    }
  `;
  const WhiteDivBoxIconsLink = styled('a')`
    cursor: pointer;
    text-decoration: none;
  `;

  const RoadmapDiv = styled.div`
    width: 100%;
    background: #e00000;
    height: auto;
    padding: 3rem 0.8rem;
    margin-bottom: 6rem;
    margin-top: 6rem;

    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  `;

  const RoadmapDivText = styled.p`
    color: #ffffff;
    font-size: 300%;
    font-family: 'Bradley Hand ITC';
    text-align: center;
    text-decoration: underline;
    margin: 0.6rem 0.6rem 1.3rem 0.6rem;

    @media (max-width: 768px) {
      font-size: 200%;
    }
  `;

  const RoadmapOutDiv = styled.div`
    width: 90%;
    margin: 0.5rem auto;

    @media (max-width: 768px) {
      width: 97%;
      margin: 0;
    }

    @media (max-width: 576px) {
      width: 96%;
    }
  `;
  const RoadmapInDiv = styled.div`
    width: 50%;
    display: inline-block;
    font-size: 225%;
    margin-bottom: 1.2rem;
    margin-top: 0.1rem;
    padding: 0;
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 190%;
    }

    @media (max-width: 992px) {
      font-size: 150%;
    }

    @media (max-width: 768px) {
      font-size: 120%;
    }

    @media (max-width: 576px) {
      font-size: 100%;
      display: block;
      width: 100%;
    }

    @media (max-width: 360px) {
      display: block;
      width: 100%;
    }
  `;

  const RoadmapInTextL = styled.p`
    width: fit-content;
    background: #ffffff;
    color: #e00000;
    padding: 1rem;
    border-radius: 3%;
    margin: 0;

    @media (max-width: 1024px) {
      padding: 0.5rem;
    }

    @media (max-width: 576px) {
      display: block;
      margin: 0.7rem auto;
    }
  `;

  const RoadmapInTextR = styled.p`
    width: fit-content;
    background: #ffffff;
    color: #e00000;
    float: right;
    padding: 1rem;
    border-radius: 3%;
    margin: 0;

    @media (max-width: 1024px) {
      padding: 0.5rem;
    }

    @media (max-width: 576px) {
      float: none;
      display: block;
      width: fit-content;
      margin: 0.7rem auto;
    }
  `;

  const BrandDiv = styled.div`
    width: 100%;
    background: #e00000;
    height: auto;
    padding: 0.1rem 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 576px) {
      display: block;
      width: 100%;
    }
  `;
  const BrandDivIn = styled.div`
    display: inline-block;
    width: 28%;
    margin: 0.3rem;
    font-size: 250%;
    font-family: 'Bradley Hand ITC';

    @media (max-width: 1280px) {
      font-size: 220%;
    }

    @media (max-width: 1024px) {
      font-size: 180%;
    }

    @media (max-width: 992px) {
      font-size: 150%;
    }

    @media (max-width: 768px) {
      font-size: 140%;
    }

    @media (max-width: 576px) {
      display: block;
      width: 90%;
      margin: 0.1rem 0;
      text-align: center;
    }
  `;

  const BrandDivInTwo = styled.p`
    padding: 0.5rem 1rem;
    text-decoration: underline;
    display: inline-block;
    color: white;
  `;
  const BrandDivInTwo2 = styled.p`
    padding: 0.5rem 1rem;
    display: inline-block;
    color: white;
  `;
  const ProgressDiv = styled.div`
    width: 100vw;
    height: auto;
    padding: 2.5rem 0.5rem 3.5rem 0.5rem;
    background: black;
    text-align: center;
  `;

  const ProgressBar = styled.div`
    width: 90%;
    height: 4.5rem;
    padding: 0;
    border: 2px solid white;
    margin: 2.5rem auto;

    @media (max-width: 1024px) {
      height: 2.8rem;
    }

    @media (max-width: 768px) {
      margin: 2.5rem 1.5rem;
    }

    @media (max-width: 576px) {
      height: 2rem;
      width: 92%;
      margin: 2.5rem 0.3rem;
    }
  `;

  const ProgressBarIn = styled.div`
    width: 60%;
    margin: 0;
    height: inherit;
    background: #e00000;
  `;

  const ProgressStakeBtn = styled.p`
    background: #ffffff;
    padding: 0.5rem 1rem;
    color: #e00000;
    border-radius: 8%;
    font-size: 100%;
    display: block;
    width: fit-content;
    margin: auto;
    border: 1px solid #e00000;
  `;

  const ProgressStakeBtnRev = styled.p`
    background: #e00000;
    padding: 0.5rem 1rem;
    color: #ffff;
    border-radius: 8%;
    font-size: 100%;
    display: block;
    width: fit-content;
    margin: 1rem auto 0.5rem auto;
    border: 1px solid #ffffff;
  `;

  const ProgImage = styled.div`
    width: 18%;
    margin: 0.5rem;
    height: auto;
    display: block;
    float: left;
    text-align: center;

    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }

    @media (max-width: 576px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  `;

  const PImg = styled.img`
    width: 30%;
    height: 5rem;
    margin-bottom: 1rem;

    @media (max-width: 576px) {
      width: 60%;
      height: auto;
    }

    // @media (max-width: 360px) {
    //   width: 54%;
    //   height: 14rem;
    // }
  `;

  const PDiv = styled.div`
    width: 100%;
    padding-bottom: 5.5rem;
  `;

  const ProgText = styled.div`
    width: 38%;
    margin: 0.5rem;
    color: white;
    display: inline-block;
    text-align: left;

    @media (max-width: 576px) {
      width: 100%;
      margin-bottom: 2rem;
      text-align: center;
    }
  `;

  const ProgTextP = styled.p`
    margin: 0.3rem 0;
    font-size: 187%;
    font-family: 'Bradley Hand ITC';
  `;

  const ProgTextBtn = styled.span`
    background: #ffffff;
    padding: 0.5rem 1rem;
    color: #e00000;
    border-radius: 8%;
    font-size: 100%;
    display: block;
    text-align: center;
    width: fit-content;
    margin-top: 1rem;

    @media (max-width: 576px) {
      margin: 0.1rem auto;
    }
  `;
  const ProgTextLg = styled.div`
    text-align: center;
    margin: 0.5rem;
    color: #ffffff;
    font-size: 225%;
    font-family: 'Futura Md BT';

    @media (max-width: 1024px) {
      font-size: 200%;
    }

    @media (max-width: 992px) {
      font-size: 180%;
    }

    @media (max-width: 768px) {
      font-size: 160%;
    }

    @media (max-width: 576px) {
      font-size: 130%;
    }
  `;

  const LastBigWrapper = styled.div`
    width: 100%;
    padding: 4rem 1rem;
  `;

  const LastP = styled.p`
    width: 100%;
    text-align: center;
    font-size: 300%;
    font-weight: 600;
    font-family: 'Bradley Hand ITC';

    @media (max-width: 1024px) {
      margin: 0.7rem;
    }

    @media (max-width: 576px) {
      font-size: 200%;
      margin: 0.5rem;
    }

    @media (max-width: 576px) {
      font-size: 160%;
      margin: 0;
    }
  `;

  const LastWrapper = styled.div`
    width: 80%;
    margin .1rem auto;

    @media (max-width: 1024px) {
      width: 85%;
    }

    @media (max-width: 768px) {
      width: 94%;
    }
  `;

  const LastDiv = styled.div`
    width: 23%;
    margin: 0.7rem;
    display: inline-block;
    text-align: center;

    @media (max-width: 1280px) {
      margin: 0.5rem;
    }

    @media (max-width: 1024px) {
      margin: 0.3rem;
    }

    @media (max-width: 576px) {
      width: 50%;
      display: block;
      margin: 2rem auto;
    }
  `;

  const LastImg = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 7rem;
      height: 7rem;
    }
  `;

  const Lasth6 = styled.h6`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Bradley Hand ITC';
    margin: 0.6rem;

    @media (max-width: 768px) {
      margin: 0.4rem;
    }
  `;

  const LastImgText = styled.p`
    font-family: 'Futura Lt BT';
  `;

  return (
    <>
      <MainDiv>
        <RedDiv>
          <HeaderDiv>
            <HeadImg src="/1217.png" alt="CloneX image header"></HeadImg>
            <HeadImg2 src="/CloneXtext.png" alt="CloneX image"></HeadImg2>
            {/* <Test>Testing this</Test> */}
          </HeaderDiv>
          <ImageDiv>
            <Slider className="slider">
              <SlideTrack className="slide-track">
                <Slide>
                  <Img
                    className="img"
                    src="/1216.png"
                    alt="CloneX image 1"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/12171.png"
                    alt="CloneX image 2"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1218.png"
                    alt="CloneX image 3"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1219.png"
                    alt="CloneX image 4"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1220.png"
                    alt="CloneX image 5"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1226.png"
                    alt="CloneX image 6"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1227.png"
                    alt="CloneX image 7"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1228.png"
                    alt="CloneX image 8"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1229.png"
                    alt="CloneX image 9"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1230.png"
                    alt="CloneX image 10"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1236.png"
                    alt="CloneX image 11"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1237.png"
                    alt="CloneX image 12"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1238.png"
                    alt="CloneX image 13"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1239.png"
                    alt="CloneX image 14"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1216.png"
                    alt="CloneX image 1"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/12171.png"
                    alt="CloneX image 2"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1218.png"
                    alt="CloneX image 3"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1219.png"
                    alt="CloneX image 4"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1220.png"
                    alt="CloneX image 5"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1226.png"
                    alt="CloneX image 6"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1227.png"
                    alt="CloneX image 7"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1228.png"
                    alt="CloneX image 8"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1229.png"
                    alt="CloneX image 9"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1230.png"
                    alt="CloneX image 10"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1236.png"
                    alt="CloneX image 11"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1237.png"
                    alt="CloneX image 12"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1238.png"
                    alt="CloneX image 13"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1239.png"
                    alt="CloneX image 14"
                  ></Img>
                </Slide>
              </SlideTrack>
            </Slider>
            <Slider className="slider">
              <SlideTracker className="slide-track">
                <Slide>
                  <Img
                    className="img"
                    src="/1216.png"
                    alt="CloneX image 1"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/12171.png"
                    alt="CloneX image 2"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1218.png"
                    alt="CloneX image 3"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1219.png"
                    alt="CloneX image 4"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1220.png"
                    alt="CloneX image 5"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1226.png"
                    alt="CloneX image 6"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1227.png"
                    alt="CloneX image 7"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1228.png"
                    alt="CloneX image 8"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1229.png"
                    alt="CloneX image 9"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1230.png"
                    alt="CloneX image 10"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1236.png"
                    alt="CloneX image 11"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1237.png"
                    alt="CloneX image 12"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1238.png"
                    alt="CloneX image 13"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1239.png"
                    alt="CloneX image 14"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1216.png"
                    alt="CloneX image 1"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/12171.png"
                    alt="CloneX image 2"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1218.png"
                    alt="CloneX image 3"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1219.png"
                    alt="CloneX image 4"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1220.png"
                    alt="CloneX image 5"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1226.png"
                    alt="CloneX image 6"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1227.png"
                    alt="CloneX image 7"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1228.png"
                    alt="CloneX image 8"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1229.png"
                    alt="CloneX image 9"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1230.png"
                    alt="CloneX image 10"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1236.png"
                    alt="CloneX image 11"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1237.png"
                    alt="CloneX image 12"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1238.png"
                    alt="CloneX image 13"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1239.png"
                    alt="CloneX image 14"
                  ></Img>
                </Slide>
              </SlideTracker>
            </Slider>
            <Slider className="slider">
              <SlideTrack className="slide-track">
                <Slide>
                  <Img
                    className="img"
                    src="/1216.png"
                    alt="CloneX image 1"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/12171.png"
                    alt="CloneX image 2"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1218.png"
                    alt="CloneX image 3"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1219.png"
                    alt="CloneX image 4"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1220.png"
                    alt="CloneX image 5"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1226.png"
                    alt="CloneX image 6"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1227.png"
                    alt="CloneX image 7"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1228.png"
                    alt="CloneX image 8"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1229.png"
                    alt="CloneX image 9"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1230.png"
                    alt="CloneX image 10"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1236.png"
                    alt="CloneX image 11"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1237.png"
                    alt="CloneX image 12"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1238.png"
                    alt="CloneX image 13"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1239.png"
                    alt="CloneX image 14"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1216.png"
                    alt="CloneX image 1"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/12171.png"
                    alt="CloneX image 2"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1218.png"
                    alt="CloneX image 3"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1219.png"
                    alt="CloneX image 4"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1220.png"
                    alt="CloneX image 5"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1226.png"
                    alt="CloneX image 6"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1227.png"
                    alt="CloneX image 7"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1228.png"
                    alt="CloneX image 8"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1229.png"
                    alt="CloneX image 9"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1230.png"
                    alt="CloneX image 10"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1236.png"
                    alt="CloneX image 11"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1237.png"
                    alt="CloneX image 12"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1238.png"
                    alt="CloneX image 13"
                  ></Img>
                </Slide>
                <Slide>
                  <Img
                    className="img"
                    src="/1239.png"
                    alt="CloneX image 14"
                  ></Img>
                </Slide>
              </SlideTrack>
            </Slider>
          </ImageDiv>
        </RedDiv>
        <WhiteDiv>
          <WhiteDivText>
            A deviant faction of 3000 Clone X on the Solana blockchain. All
            Solana based CXC are not affiliated with the original Clone X series
            on ethereum.
          </WhiteDivText>
          <WhiteDivBoxWrapper>
            <WhiteDivBox>
              <WhiteDivBoxText>3000 CloneX</WhiteDivBoxText>
                <WhiteDivBoxButton>
                {/* <Link to="/mint" */}
                <Link to="/"
                  style={{
                    color: "#e00000",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                >
                    TBA
                  </Link>
                </WhiteDivBoxButton>
            </WhiteDivBox>
            <WhiteDivBox style={{ paddingBottom: '2.5rem' }}>
              <WhiteDivBoxText>JOIN US</WhiteDivBoxText>
              <WhiteDivBoxIconsWrapper>
                <WhiteDivBoxIconsLink
                  href="https://discord.gg/W2NK8uK8aw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhiteDivBoxIcons
                    src="/discord4.png"
                    alt="discord"
                  ></WhiteDivBoxIcons>
                </WhiteDivBoxIconsLink>
              </WhiteDivBoxIconsWrapper>
              <WhiteDivBoxIconsWrapper>
                <WhiteDivBoxIconsLink
                  href="https://twitter.com/dclonexcopy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhiteDivBoxIcons
                    src="/twitter.png"
                    alt="twitter"
                  ></WhiteDivBoxIcons>
                </WhiteDivBoxIconsLink>
              </WhiteDivBoxIconsWrapper>
              {/* <WhiteDivBoxIconsWrapper>
                    <WhiteDivBoxIcons
                      src="/insta.png"
                      alt="insta"
                    ></WhiteDivBoxIcons>
                  </WhiteDivBoxIconsWrapper> */}
            </WhiteDivBox>
          </WhiteDivBoxWrapper>
          <WhiteDivText>
            A group of CloneX rebelled against the Federation in the Ethereum
            metaverse and found themselves engaged in a fierce battle for
            control of the government. The war lasted 30 days and 30 nights,
            shaking the heavens and renting the night sky with thunder and
            lightning. On the 30th day, the CXC were cast out of ethereum and
            fell from the skies to Solana like angels from heaven. Now on Solan,
            the CXC have to rebuild their civilization and grow their population
            on this new found universe. Will you help them find their new home?
          </WhiteDivText>
        </WhiteDiv>
        <RoadmapDiv>
          <RoadmapDivText>ROADMAP</RoadmapDivText>
          <RoadmapOutDiv>
            <RoadmapInDiv>
              <RoadmapInTextL>1. Stealth Launch NFT</RoadmapInTextL>
            </RoadmapInDiv>
            <RoadmapInDiv>
              <RoadmapInTextL>2. NFT and Discord Verification</RoadmapInTextL>
            </RoadmapInDiv>
            <RoadmapInDiv>
              <RoadmapInTextR>3. Magic Eden Listing</RoadmapInTextR>
            </RoadmapInDiv>
            <RoadmapInDiv>
              <RoadmapInTextR>4. Staking to earn $CXK</RoadmapInTextR>
            </RoadmapInDiv>
            <RoadmapInDiv>
              <RoadmapInTextL>5. CXC Breeding Launch</RoadmapInTextL>
            </RoadmapInDiv>
            <RoadmapInDiv>
              <RoadmapInTextL>6. CXC Marketplace Launch</RoadmapInTextL>
            </RoadmapInDiv>
          </RoadmapOutDiv>
        </RoadmapDiv>
        <BrandDiv>
          <BrandDivIn>
            <HeadImg src="/1217.png" alt="CloneX image header"></HeadImg>
            <HeadImg2 src="/CloneXtext.png" alt="CloneX image"></HeadImg2>
          </BrandDivIn>
          <BrandDivIn>
            <BrandDivInTwo>Stake</BrandDivInTwo>
            <BrandDivInTwo2>Breed</BrandDivInTwo2>
          </BrandDivIn>
          <BrandDivIn>XS34...D31F connected</BrandDivIn>
        </BrandDiv>
        <ProgressDiv>
          <ProgTextLg>2900/3000 Clone X Copy Staked</ProgTextLg>
          <ProgressBar>
            <ProgressBarIn></ProgressBarIn>
          </ProgressBar>
          <PDiv>
            <ProgImage>
              <PImg src="/1242.png" alt="p image"></PImg>
              <ProgressStakeBtn>Unstake</ProgressStakeBtn>
            </ProgImage>
            <ProgImage>
              <PImg src="/1243.png" alt="p image"></PImg>
              <ProgressStakeBtn>Unstake</ProgressStakeBtn>
              <ProgressStakeBtnRev>Stake CXK</ProgressStakeBtnRev>
            </ProgImage>
            <ProgImage>
              <PImg src="/1244.png" alt="p image"></PImg>
              <ProgressStakeBtn>Unstake</ProgressStakeBtn>
            </ProgImage>
            <ProgText>
              <ProgTextP>100 $CXK Daily</ProgTextP>
              <ProgTextP>
                <span
                  style={{
                    color: '#E00000',
                  }}
                >
                  700{' '}
                </span>
                $CXK Earned
              </ProgTextP>
              <ProgTextBtn>Claim $CXK</ProgTextBtn>
            </ProgText>
          </PDiv>
        </ProgressDiv>
        <LastBigWrapper>
          <LastP>Meet The Rebel Leaders</LastP>
          <LastWrapper>
            <LastDiv>
              <LastImg src="/1222.png" alt="avatar"></LastImg>
              <Lasth6>Mufasa</Lasth6>
              <LastImgText>
                Degen NFT collector, NFT trader and market specialist
                moonlighting as fintech analyst
              </LastImgText>
            </LastDiv>
            <LastDiv>
              <LastImg src="/1223.png" alt="avatar"></LastImg>
              <Lasth6>Sharon</Lasth6>
              <LastImgText>
                Full-stack Python engineer and blockchain architect. Degen Punk
                holder and black activist
              </LastImgText>
            </LastDiv>
            <LastDiv>
              <LastImg src="/1233.png" alt="avatar"></LastImg>
              <Lasth6>Bush</Lasth6>
              <LastImgText>
                Marketing manager and Operations specialist. Shorted ethereum
                from $130 to $80
              </LastImgText>
            </LastDiv>
            <LastDiv>
              <LastImg src="/1232.png" alt="avatar"></LastImg>
              <Lasth6>Pandore</Lasth6>
              <LastImgText>
                Designer and NFT artist. Illustrated NFT for 2 out of top 10 7
                figure NFTs on ethereum
              </LastImgText>
            </LastDiv>
          </LastWrapper>
        </LastBigWrapper>
      </MainDiv>
    </>
  );
};

export default Home;
