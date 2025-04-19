import { useState } from '#app'
import type { SiteConfig } from '../types/site-config'

export const useSiteConfig = () => {
  const siteConfig = useState<SiteConfig>('siteConfig')

  const loadConfig = async (slug: string) => {
    try {
      const config = await import(`../config/sites/${slug}.ts`)
      siteConfig.value = config.default
      return true
    } catch (error) {
      console.error('Failed to load site configuration:', error)
      return false
    }
  }

  return {
    siteConfig,
    loadConfig
  }
}

export default useSiteConfig 
