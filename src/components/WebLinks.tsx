import React from 'react'
import {
  faInstagram,
  faXing,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import IconLink from './IconLink'
import styled from '@emotion/styled'
import { mediaQueryDesktop } from '../meta/mediaQueries'

const WebLinksStyled = styled('div')`
  padding: 1rem;
  svg {
    min-width: 2rem;
  }
  *:not(:first-of-type) {
    margin-left: 2rem;
  }
  ${mediaQueryDesktop} {
    text-align: end;
  }
`

const WebLinks = () => (
  <WebLinksStyled>
    <IconLink icon={faInstagram} url='https://www.instagram.com/oklon/' />
    <IconLink icon={faXing} url='https://www.xing.com/profile/Oke_Schwien/cv' />
    <IconLink icon={faGithub} url='https://github.com/okeschwien' />
    <IconLink icon={faMeteor} url={'https://basiskollektiv.de'} />
  </WebLinksStyled>
)

export default React.memo(WebLinks)
