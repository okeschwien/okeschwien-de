import React from 'react'
import styled from '@emotion/styled'
import { COLOR_TEXT_FOOTER } from '../meta/colors'
import { FOOTER_CONTENT } from '../meta/copy'

const FooterStyled = styled('div')`
  text-align: center;
  margin-right: -0.125rem;
  padding: 3rem 1rem 1rem 1rem;
  color: ${COLOR_TEXT_FOOTER};
`

const Footer = () => <FooterStyled>{FOOTER_CONTENT}</FooterStyled>

export default React.memo(Footer)
