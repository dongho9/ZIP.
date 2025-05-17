import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonContents = styled.div`
  display: flex;
  height: 80px;
  
  @media screen and (max-width: 1024px) {
    height: 70px;
  }
  @media screen and (max-width: 402px) {
    height: 60px;
  }
`

const PromotionButton = styled.button`
  width: 100%;
  border: 1px solid var(--dark-color);
  background: var(--light-color);
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  
  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 402px) {
    font-size: 1.5rem;
  }
  
  &:hover{
    background: var(--dark-color);
    color: var(--light-color);
    transition: 0.3s;
  }
  &:first-child{
    background: ${({selected}) => selected ? "var(--dark-color)" : "var(--light-color)"};
    color: ${({selected}) => selected ? "var(--light-color)" : "var(--dark-color)"};
  }

`

const ScrollButton = () => {
  const [active, setActive] = useState(true);
  return (
<>
      <ButtonContents>
            <PromotionButton
              selected={active}
              >INTROUDUCE TATTOO</PromotionButton>
            <PromotionButton ><Link href="/about">
  INFLUENCER
</Link></PromotionButton>
      </ButtonContents>
</>
  )
}

export default ScrollButton