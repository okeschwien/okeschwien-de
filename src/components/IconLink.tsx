import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import { COLOR_TEXT_LINK_DEFAULT, COLOR_TEXT_LINK_HOVER } from '../meta/colors'
import { mediaQueryDesktop } from '../meta/mediaQueries'
import { transitionAll } from '../meta/animations'

const IconLinkStyled = styled('a')`
  font-size: 2rem;
  line-height: 2.5rem;
  svg {
    color: ${COLOR_TEXT_LINK_DEFAULT};
  }
  ${mediaQueryDesktop} {
    svg {
      transition: ${`${transitionAll()}}`};
      transform: initial;
    }
    :hover {
      svg {
        transform: scale(1.3);
        color: ${COLOR_TEXT_LINK_HOVER};
      }
    }
  }
`

interface IconLinkProps {
  icon: IconDefinition
  url: string
}

const IconLink = ({ icon, url }: IconLinkProps) => (
  <IconLinkStyled href={url} rel='noopener noreferrer' target='_blank'>
    <FontAwesomeIcon icon={icon} />
  </IconLinkStyled>
)

export default React.memo(IconLink)
