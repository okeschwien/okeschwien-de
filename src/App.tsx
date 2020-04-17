import React from 'react'
import Header from './components/Header'
import CurriculumVitae from './components/CurriculumVitae'
import About from './components/About'
import styled from '@emotion/styled'
import { mediaQueryDesktop, BREAKPOINTS } from './meta/mediaQueries'
import Work from './components/Work'
import Footer from './components/Footer'

const AppStyled = styled('div')`
  width: 100%;
  padding: 0 0 2rem 0;
  ${mediaQueryDesktop} {
    width: ${`${BREAKPOINTS.desktop}rem`};
    margin: 0 auto;
  }
`

const App = () => {
  return (
    <AppStyled>
      <Header />
      <About />
      <CurriculumVitae />
      <Work />
      <Footer />
    </AppStyled>
  )
}

export default React.memo(App)
