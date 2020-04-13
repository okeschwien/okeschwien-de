import React from 'react'
import { TITLE } from '../meta/copy'
import styled from '@emotion/styled'
import WebLinks from './WebLinks'
import Avatar from './Avatar'
import { mediaQueryDesktop } from '../meta/mediaQueries'

const H1Styled = styled('h1')`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1.2rem;
  line-height: 3.5rem;
  padding: 2rem 1rem;
  margin: 0 -1.2rem 0 0;
  ${mediaQueryDesktop} {
    padding: 6rem 1rem 0 1rem;
    text-align: end;
  }
`

const HeaderStyled = styled('div')`
  ${mediaQueryDesktop} {
    display: flex;
  }
`

const HeaderTextWrapperStyled = styled('div')`
  overflow: hidden;
  ${mediaQueryDesktop} {
    width: 34rem;
  }
`

const Header = () => (
  <HeaderStyled>
    <Avatar />
    <HeaderTextWrapperStyled>
      <H1Styled>{TITLE}</H1Styled>
      <WebLinks />
    </HeaderTextWrapperStyled>
  </HeaderStyled>
)

export default React.memo(Header)
