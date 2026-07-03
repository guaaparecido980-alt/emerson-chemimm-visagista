export const siteConfig = {
  name: "Emerson Chemimm",
  role: "Barbeiro Visagista",
  instagram: "https://www.instagram.com/emersonchemimm/",
  whatsapp: "5541995977587",
  whatsappUrl: "https://wa.me/5541995977587",
  googleBusinessProfile: "",
  googleMaps: "",

  // Localização (deixe em branco até confirmar os dados reais)
  location: {
    city: "",
    neighborhood: "",
    address: "",
    zipCode: "",
    latitude: 0,
    longitude: 0
  },

  // Horários
  openingHours: [
    { days: "Segunda a Sexta", hours: "09:00 às 20:00" },
    { days: "Sábado", hours: "09:00 às 17:00" }
  ]
};

export const hasCity = siteConfig.location.city.trim().length > 0;
export const hasNeighborhood = siteConfig.location.neighborhood.trim().length > 0;
export const hasAddress = siteConfig.location.address.trim().length > 0;
export const hasZipCode = siteConfig.location.zipCode.trim().length > 0;
export const hasCoordinates = siteConfig.location.latitude !== 0 && siteConfig.location.longitude !== 0;
export const hasGoogleBusinessProfile = siteConfig.googleBusinessProfile.trim().length > 0;
export const hasGoogleMaps = siteConfig.googleMaps.trim().length > 0;
export const hasWhatsapp = siteConfig.whatsapp.trim().length > 0;

export function getWhatsappUrl(message?: string): string {
  if (!hasWhatsapp) return "https://wa.me/";
  const base = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
