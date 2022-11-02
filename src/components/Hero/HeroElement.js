import styled from "styled-components"
import { BsArrowUpRight } from "react-icons/bs"

export const HeroContainer = styled.div`
  background: #f9f9f9;
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  position: relative;
`
export const HeroBox = styled.div`
  width: 240px;
  height: 120px;
  background: #111111;
  position: absolute;
  top: 25%;
  left: 10%;
  rotate: -90deg;
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 230px;
    height: 100px;
    top: 20%;
    left: 3%;
    font-size: 3rem;
  }
  @media screen and (max-width: 415px) {
  }
`

export const HeroLargeText = styled.p`
  color: #111111;
  position: absolute;
  bottom: 0;
  left: 13%;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 3px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 2rem;
  }
`
export const HeroBLockElement = styled.span`
  display: block;
`
export const HeroSmalltext = styled.p`
  color: #111111;
  position: absolute;
  bottom: 25%;
  right: 20%;
  font-size: 0.7rem;
  width: 350px;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    justify-content: flex-start;
  }
  @media screen and (max-width: 415px) {
    position: static;
    margin-top: 5rem;
    margin-left: 3rem;
  }
`

export const HeroArrowIcon = styled(BsArrowUpRight)`
  position: absolute;
  bottom: 2%;
  right: 4%;
  font-size: 3.5rem;
  margin: 0 1rem;
  @media screen and (max-width: 960px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 664px) {
    display: none;
  }
`
export const HeroPageLink = styled.small`
  position: absolute;
  bottom: 3%;
  right: 8%;
  font-size: 0.8rem;
  margin: 0 2rem;
  @media screen and (max-width: 664px) {
    display: none;
  }
`
