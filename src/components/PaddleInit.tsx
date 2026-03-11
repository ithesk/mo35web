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
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
    if (!token) return

    const init = () => {
      if (window.Paddle) {
        window.Paddle.Initialize({ token })
      }
    }

    if (window.Paddle) {
      init()
    } else {
      // Esperar a que paddle.js cargue
      const interval = setInterval(() => {
        if (window.Paddle) {
          init()
          clearInterval(interval)
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [])
  return null
}
