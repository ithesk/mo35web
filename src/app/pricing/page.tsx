'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Check, X, Zap, Crown, Star } from 'lucide-react';

const t = {
  en: {
    back: 'Back to Home',
    title: 'Plans & Pricing',
    subtitle: 'Choose the plan that fits your needs',
    free: 'Free',
    premium: 'Premium',
    month: '/mo',
    popular: 'Most Popular',
    features: {
      queries: (n: number) => `${n} queries/month`,
      fullInfo: 'Complete device info',
      historyUnlimited: 'Unlimited history',
      noHistory: 'No history',
      favorites: 'Favorites',
      noFavorites: 'No favorites',
      extra: 'Extra queries: $0.35/each',
      support: 'Priority support',
    },
    cta: {
      free: 'Get Started Free',
      premium: 'Upgrade to Premium',
    },
    faq: 'Frequently Asked Questions',
    faqs: [
      { q: 'Can I switch plans anytime?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
      { q: 'What happens when I run out of queries?', a: 'On the Free plan, you\'ll need to wait until the next month. Premium users can purchase additional queries at $0.35 each.' },
      { q: 'How does billing work?', a: 'Premium is billed monthly at $5/month. You can cancel anytime and your plan remains active until the end of the billing period.' },
    ],
    footer: '© {year} Mo35. All rights reserved.',
    nav: { privacy: 'Privacy', terms: 'Terms', refund: 'Refund' },
  },
  es: {
    back: 'Volver al inicio',
    title: 'Planes y Precios',
    subtitle: 'Elige el plan que se adapte a tus necesidades',
    free: 'Gratis',
    premium: 'Premium',
    month: '/mes',
    popular: 'Más Popular',
    features: {
      queries: (n: number) => `${n} consultas/mes`,
      fullInfo: 'Información completa del dispositivo',
      historyUnlimited: 'Historial ilimitado',
      noHistory: 'Sin historial',
      favorites: 'Favoritos',
      noFavorites: 'Sin favoritos',
      extra: 'Consultas extra: $0.35/cada una',
      support: 'Soporte prioritario',
    },
    cta: {
      free: 'Comenzar Gratis',
      premium: 'Obtener Premium',
    },
    faq: 'Preguntas Frecuentes',
    faqs: [
      { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplican en tu próximo ciclo de facturación.' },
      { q: '¿Qué pasa cuando se agotan mis consultas?', a: 'En el plan Gratis, deberás esperar hasta el próximo mes. Los usuarios Premium pueden comprar consultas adicionales a $0.35 cada una.' },
      { q: '¿Cómo funciona la facturación?', a: 'Premium se factura mensualmente a $5/mes. Puedes cancelar en cualquier momento y tu plan permanece activo hasta el final del período de facturación.' },
    ],
    footer: '© {year} Mo35. Todos los derechos reservados.',
    nav: { privacy: 'Privacidad', terms: 'Términos', refund: 'Reembolso' },
  },
};

export default function Pricing() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const l = t[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 relative selection:bg-[#7B2BF9] selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B2BF9]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B2BF9]/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fadeIn">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {l.back}
          </Link>
          <div className="flex glass rounded-xl overflow-hidden">
            <button
              onClick={() => setLang('es')}
              className={`px-4 py-2 text-sm font-semibold transition-colors ${lang === 'es' ? 'bg-[#7B2BF9] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 text-sm font-semibold transition-colors ${lang === 'en' ? 'bg-[#7B2BF9] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{l.title}</h1>
          <p className="text-gray-400 text-lg">{l.subtitle}</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
          {/* Free Plan */}
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Zap size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">{l.free}</h2>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$0</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-400">{l.features.queries(10)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-400">{l.features.fullInfo}</span>
              </li>
              <li className="flex items-center gap-3">
                <X size={18} className="text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">{l.features.noHistory}</span>
              </li>
              <li className="flex items-center gap-3">
                <X size={18} className="text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">{l.features.noFavorites}</span>
              </li>
            </ul>
            <button className="w-full px-6 py-4 glass hover:bg-white/10 text-white rounded-2xl font-bold transition-all border border-white/10">
              {l.cta.free}
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative glass p-8 rounded-3xl border-2 border-[#7B2BF9]/50 hover:border-[#7B2BF9] transition-all shadow-lg shadow-[#7B2BF9]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 bg-[#7B2BF9] text-white rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg shadow-[#7B2BF9]/30">
                <Star size={14} />
                {l.popular}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B2BF9]/20 rounded-xl text-[#7B2BF9]">
                <Crown size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">{l.premium}</h2>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$5</span>
              <span className="text-gray-400 text-lg">{l.month}</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{l.features.queries(30)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{l.features.fullInfo}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{l.features.historyUnlimited}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{l.features.favorites}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{l.features.extra}</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{l.features.support}</span>
              </li>
            </ul>
            <button
              onClick={() => {
                window.Paddle?.Checkout.open({
                  items: [{ priceId: 'pri_01kkej4gav4cd2jtvbvqkvc21q', quantity: 1 }],
                  customData: { user_id: '', phone: '' },
                })
              }}
              className="w-full px-6 py-4 bg-[#7B2BF9] hover:bg-[#6222c7] text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#7B2BF9]/30"
            >
              {l.cta.premium}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mb-12">
          <a
            href="https://wa.me/18299316043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#25D366]/30"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {lang === 'es' ? 'Activar Premium por WhatsApp' : 'Activate Premium via WhatsApp'}
          </a>
          <p className="text-gray-500 text-sm mt-3">
            {lang === 'es' ? 'Habla con nuestro bot directamente' : 'Chat with our bot directly'}
          </p>
        </div>

        {/* FAQ */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">{l.faq}</h2>
          <div className="space-y-2">
            {l.faqs.map((faq, index) => (
              <div key={index} className="p-5 rounded-2xl hover:bg-white/5 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-10 pb-6 text-center text-gray-500 text-sm relative z-10">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/privacy" className="hover:text-white transition-colors">{l.nav.privacy}</Link>
          <Link href="/terms" className="hover:text-white transition-colors">{l.nav.terms}</Link>
          <Link href="/refund" className="hover:text-white transition-colors">{l.nav.refund}</Link>
        </div>
        <p>{l.footer.replace('{year}', new Date().getFullYear().toString())}</p>
      </footer>
    </div>
  );
}
