import { headquarters, founder, socialLinks } from "@/data/ecosystem";

export const siteConfig = {
  name: headquarters.name,
  productionUrl: null as string | null,
  organization: {
    name: headquarters.name,
    founder: founder.name,
    contactEmail: founder.email,
  },
  social: socialLinks,
};
