import styled from '@emotion/styled'
import React from 'react'

const SHOW_EMOJIS = false

interface EmojiProps {
  children: React.ReactText
  label: string
}

const StyledEmoji = styled('span')`
  margin: 0 -0.375rem 0 0;
`

const Emoji = ({ children, label }: EmojiProps) => {
  if (!SHOW_EMOJIS) {
    return null
  }

  return (
    <StyledEmoji role='img' aria-label={label}>
      {children}
    </StyledEmoji>
  )
}

export default React.memo(Emoji)
