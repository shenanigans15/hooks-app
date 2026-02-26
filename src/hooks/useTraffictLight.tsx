import { useEffect, useState } from 'react'

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors

export const useTraffictLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red')
  const [countdown, setCountdown] = useState(5)

  // Countdown effect
  useEffect(() => {
    if (countdown === 0) return

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [countdown])

  // Change light color effect
  useEffect(() => {
    if (countdown === 0) {
      setCountdown(5)
      if (light === 'red') {
        setLight('green')
        return
      }
      if (light === 'green') {
        setLight('yellow')
        return
      }
      if (light === 'yellow') {
        setLight('red')
        return
      }
    }
  }, [countdown, light])

  return {
    countdown,
    light,
    colors,
  }
}
