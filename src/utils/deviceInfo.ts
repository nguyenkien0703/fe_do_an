import FingerprintJS from '@fingerprintjs/fingerprintjs'

let fpPromise: Promise<any> | null = null

const getFingerprintAgent = () => {
  if (!fpPromise) {
    fpPromise = FingerprintJS.load()
  }
  return fpPromise
}

const getBrowser = (): string => {
  const userAgent = navigator.userAgent
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    return 'Chrome'
  } else if (userAgent.includes('Firefox')) {
    return 'Firefox'
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    return 'Safari'
  } else if (userAgent.includes('Edg')) {
    return 'Edge'
  }
  return 'Unknown'
}

const getOS = (): string => {
  const userAgent = navigator.userAgent
  if (userAgent.includes('Windows')) {
    return 'Windows'
  } else if (userAgent.includes('Mac')) {
    return 'macOS'
  } else if (userAgent.includes('Linux')) {
    return 'Linux'
  } else if (userAgent.includes('Android')) {
    return 'Android'
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    return 'iOS'
  }
  return 'Unknown'
}

const getIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.error('Error getting IP:', error)
    return 'Unknown'
  }
}

export const getDeviceInfo = async (): Promise<string> => {
  try {
    const [fp, ip] = await Promise.all([
      getFingerprintAgent().then((agent) => agent.get()),
      getIP(),
    ])

    const deviceInfo = {
      visitorId: fp.visitorId,
      browser: getBrowser(),
      os: getOS(),
      ip,
      timestamp: new Date().toISOString(),
    }

    return JSON.stringify(deviceInfo)
  } catch (error) {
    console.error('Error getting device fingerprint:', error)
    return JSON.stringify({
      visitorId: `fallback-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      browser: getBrowser(),
      os: getOS(),
      ip: 'Unknown',
      timestamp: new Date().toISOString(),
      error: 'Failed to get fingerprint',
    })
  }
}
