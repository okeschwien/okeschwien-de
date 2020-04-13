import React from 'react'
import styled from '@emotion/styled'
import { COLOR_TEXT_LINK_HOVER, COLOR_TEXT_LINK_DEFAULT } from '../meta/colors'
import { mediaQueryDesktop } from '../meta/mediaQueries'
import { transitionColor } from '../meta/animations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, IconDefinition } from '@fortawesome/free-solid-svg-icons'

const LinkStyled = styled('a')`
  text-decoration: none;
  color: ${COLOR_TEXT_LINK_DEFAULT};
  ${mediaQueryDesktop} {
    transition: ${transitionColor()};
    .link-icon {
      display: none;
    }
    :hover {
      color: ${COLOR_TEXT_LINK_HOVER};
      .link-icon {
        display: inherit;
      }
    }
  }
`

interface ChildrenProps {
  children?: React.ReactNode
}

export interface LinkProps {
  url: string
  icon?: IconDefinition
}

const Link = ({ url, children, icon = faLink }: LinkProps & ChildrenProps) => {
  return (
    <LinkStyled href={url} rel='noopener noreferrer' target='_blank'>
      {children}
      <span className='link-icon'>
        {' '}
        <FontAwesomeIcon icon={icon} />
      </span>
    </LinkStyled>
  )
}

export default React.memo(Link)
