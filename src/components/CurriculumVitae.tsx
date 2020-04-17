import React from 'react'
import List from './List'
import { CV_CAREER, CV_UNIVERSITY, CV_HEADLINE } from '../meta/copy'
import styled from '@emotion/styled'

export const H2Styled = styled('h2')`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1rem;
  line-height: 2rem;
  padding: 3rem 1rem 1rem 1rem;
  margin: 0;
  text-align: start;
`

const CurriculumVitae = () => (
  <>
    <H2Styled>{CV_HEADLINE}</H2Styled>
    <List {...CV_CAREER} />
    <List {...CV_UNIVERSITY} />
  </>
)

export default React.memo(CurriculumVitae)
