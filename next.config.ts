import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,
  // Personalizar la información del generador
  poweredByHeader: false,
  generateEtags: false,
  // Configuración SEO
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
};

export default nextConfig;
