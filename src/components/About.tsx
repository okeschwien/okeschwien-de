import React from 'react'
import { H2Styled } from './CurriculumVitae'
import styled from '@emotion/styled'
import { ABOUT_TEXT, ABOUT_HEADLINE } from '../meta/copy'

const AboutStyled = styled('div')`
  text-align: start;
  padding: 0 1rem 1rem 1rem;
  p {
    margin: 1rem 0 0 0;
  }
`

const About = () => (
  <>
    <H2Styled>{ABOUT_HEADLINE}</H2Styled>
    <AboutStyled>{ABOUT_TEXT}</AboutStyled>
  </>
)

export default React.memo(About)
