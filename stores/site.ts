import { defineStore } from 'pinia'

interface SiteConfig {
  name: string;
  location: string;
  county: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  serviceAreas: string[];
  hours: string[];
}

export const useSite = defineStore('site', () => {
  const site = ref<SiteConfig | null>(null)

  function setSite(config: SiteConfig) {
    site.value = config
  }

  return {
    site,
    setSite,
  }
})
