'use client'

import { useEffect } from 'react'

export default function CursorEffect() {
  useEffect(() => {
    // Ghost Cursor - Hantu mengikuti cursor 👻
    import('cursor-effects').then(({ ghostCursor }) => {
      new ghostCursor()
    })
  }, [])

  return null
}