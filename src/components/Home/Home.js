import React from 'react'
import {
  Home,
  HomeMars,
  HomeSection,
  HomeSectionMini,
  HomeBlock,
  HomeTextBlock,
  HomeText,
  HomeTextWeight,
  HomeColorBlock,
  HomeColorBlockParagraph,
  HomeColorBlockText
} from './HomeStyles'
import Button from '../Button/Button'
import { Background1 } from '../../globalStyles'
import { HomeData } from '../../data'

export default function HomePage() {
  return (
    <Background1>
      <Home>
        <HomeSection>
          <HomeSectionMini>
            <HomeColorBlock>
              <HomeColorBlockParagraph>ПУТЕШЕСТВИЕ</HomeColorBlockParagraph>
              <HomeColorBlockText>на красную планету</HomeColorBlockText>
              <HomeMars></HomeMars>
            </HomeColorBlock>
          </HomeSectionMini>

          <HomeSectionMini>
            <Button text={'Начать путешествие'} to={'/Flight_Schedule'} />
          </HomeSectionMini>
        </HomeSection>

        <HomeSection>
          {HomeData.map((item) => {
            return (
              <HomeBlock key={item.corner} deg={item.corner}>
                <HomeTextBlock>
                  <HomeText>{item.top}</HomeText>
                  <HomeTextWeight>{item.center}</HomeTextWeight>
                  <HomeText>{item.bottom}</HomeText>
                </HomeTextBlock>
              </HomeBlock>
            )
          })}
        </HomeSection>
      </Home>
    </Background1>
  )
}
