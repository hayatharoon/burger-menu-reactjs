import styled from "styled-components"

export const MainSectionContainer = styled.div`
  background: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  width: 100%;
  position: relative;
`

export const MainLargeText = styled.p`
  color: #fff;
  position: absolute;
  top: 0%;
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
export const MainBLocKElement = styled.span`
  display: block;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 2rem 3rem;
`
export const SectionText = styled.p`
  color: #fff;
  font-size: 1.1rem;
  width: 450px;
  margin-left: 10rem;
`
export const SectionImage = styled.div`
  width: 400px;
  height: 200px;
  background: yellow;
`
