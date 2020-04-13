import React from 'react'
import { H2Styled } from './CurriculumVitae'
import { WORK_HEADLINE, WORK_ITEMS } from '../meta/copy'
import List from './List'

const Work = () => (
  <>
    <H2Styled>{WORK_HEADLINE}</H2Styled>
    <List {...WORK_ITEMS} />
  </>
)

export default React.memo(Work)
