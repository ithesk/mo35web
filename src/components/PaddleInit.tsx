'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Paddle?: {
      Initialize: (opts: { token: string }) => void
      Checkout: {
        open: (opts: {
          items: { priceId: string; quantity: number }[]
          customData?: Record<string, string>
        }) => void
      }
    }
  }
}

export function PaddleInit() {
  useEffect(() => {
    if (window.Paddle) {
      window.Paddle.Initialize({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
      })
    }
  }, [])
  return null
}
