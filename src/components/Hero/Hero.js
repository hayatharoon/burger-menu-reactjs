import React from "react"
import { BsArrowUpRight } from "react-icons/bs"
import {
  HeroArrowIcon,
  HeroBLockElement,
  HeroBox,
  HeroContainer,
  HeroLargeText,
  HeroPageLink,
  HeroSmalltext,
} from "./HeroElement"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBox>Centrix</HeroBox>
      <HeroLargeText>
        <HeroBLockElement>UNIQUE</HeroBLockElement>
        DESIGN IN STEP
      </HeroLargeText>
      <HeroSmalltext>
        Taking growth channels to, consequently, create a better customer
        experience. Create custom solutions with a goal to innovate. Grow user
        engagement but increase viewability. Utilising custom solutions with the
        aim to surprise and delight.
      </HeroSmalltext>
      <HeroArrowIcon>
        <BsArrowUpRight />
      </HeroArrowIcon>
      <HeroPageLink>About Us</HeroPageLink>
    </HeroContainer>
  )
}

export default Hero
