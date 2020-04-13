import React from 'react'
import avatar from '../assets/avatar_300x300.jpg'
import styled from '@emotion/styled'
import { mediaQueryDesktop } from '../meta/mediaQueries'

const AvatarStyled = styled('img')`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  display: block;
  margin: 3rem auto 1rem auto;
  box-shadow: 0 0.8px 0.7px -2px rgba(0, 0, 0, 0.21),
    0 2px 1.9px -2px rgba(0, 0, 0, 0.141), 0 3.8px 4px -2px rgba(0, 0, 0, 0.109),
    0 6.7px 7.7px -2px rgba(0, 0, 0, 0.083),
    0 12.5px 15.1px -2px rgba(0, 0, 0, 0.06),
    0 30px 37px -2px rgba(0, 0, 0, 0.034);
  ${mediaQueryDesktop} {
    width: 12rem;
    height: 12rem;
    margin: 4rem 1rem 1rem 1rem;
  }
`

const Avatar = () => <AvatarStyled src={avatar} alt='Oke Schwien' />

export default React.memo(Avatar)
