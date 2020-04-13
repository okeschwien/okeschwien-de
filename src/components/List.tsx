import React from 'react'
import styled from '@emotion/styled'

const ListStyled = styled('div')`
  text-align: start;
  padding: 1rem;
`

const ListItemStyled = styled('td')`
  padding: 1rem 0 0 1rem;
  :first-of-type {
    width: 6rem;
  }
`

type ListItem = {
  key: string | JSX.Element
  value: string | JSX.Element
}

interface ListProps {
  items: ListItem[]
  label?: string
}

const appendListItems = (item: ListItem, index: number): JSX.Element => {
  return (
    <tr key={index}>
      <ListItemStyled>{item.key}</ListItemStyled>
      <ListItemStyled>{item.value}</ListItemStyled>
    </tr>
  )
}

const List = ({ items, label }: ListProps) => (
  <ListStyled>
    <label>{label}</label>
    <table>
      <tbody>{items.map((item, index) => appendListItems(item, index))}</tbody>
    </table>
  </ListStyled>
)

export default React.memo(List)
