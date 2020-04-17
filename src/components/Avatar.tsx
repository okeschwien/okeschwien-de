import React from 'react'
import avatar from '../assets/avatar_300x300.jpg'
import styled from '@emotion/styled'
import { mediaQueryDesktop } from '../meta/mediaQueries'
import { transitionAll } from '../meta/animations'

const AvatarStyled = styled('img')`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  display: block;
  margin: 3rem auto 1rem auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  ${mediaQueryDesktop} {
    width: 12rem;
    height: 12rem;
    margin: 4rem 1rem 1rem 1rem;
    transition: ${`${transitionAll()}`};
    cursor: zoom-in;
    :hover {
      transform: scale(1.4);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
`

const Avatar = () => <AvatarStyled src={avatar} alt='Oke Schwien' />

export default React.memo(Avatar)
