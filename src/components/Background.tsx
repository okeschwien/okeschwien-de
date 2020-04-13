import React from 'react'
import styled from '@emotion/styled'
import Particles, { MoveDirection, OutMode } from 'react-particles-js'
import { COLOR_PARTICLES } from '../meta/colors'

const BackgroundStyled = styled('div')`
  z-index: -1;
  position: fixed;
  height: 100%;
  width: 100%;
  #tsparticles {
    position: fixed !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const Background = () => {
  return (
    <BackgroundStyled>
      <Particles
        width='100%'
        height='100%'
        params={{
          particles: {
            number: {
              value: 250,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: true,
              color: COLOR_PARTICLES[0],
            },
            move: {
              random: true,
              speed: 1,
              direction: MoveDirection.top,
              out_mode: OutMode.out,
            },
            color: {
              value: COLOR_PARTICLES,
            },
          },
        }}
      />
    </BackgroundStyled>
  )
}

export default React.memo(Background)
