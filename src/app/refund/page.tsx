'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw, Clock, CheckCircle, Mail, HelpCircle } from 'lucide-react';

const t = {
  en: {
    back: 'Back to Home',
    title: 'Refund Policy',
    subtitle: 'Mo35',
    updated: 'Last updated: March 4, 2026',
    sections: [
      {
        icon: 'info',
        title: '1. Overview',
        content: 'This Refund Policy outlines the terms under which Mo35 ("we", "us", "our") processes refund requests for the Premium subscription plan. Your satisfaction is our priority.',
      },
      {
        icon: 'check',
        title: '2. Refund Guarantee',
        content: 'We offer a full refund within 14 days of any purchase — no questions asked. If you are not satisfied with our service for any reason, simply request a refund and it will be granted.',
      },
      {
        icon: 'clock',
        title: '3. How to Request a Refund',
        content: null,
        list: [
          'Contact us at info@mo35.dev with your account email.',
          'Refund requests are processed within 5-7 business days.',
          'Refunds will be credited to your original payment method.',
        ],
      },
      {
        icon: 'help',
        title: '4. Cancellation',
        content: 'You can cancel your Premium subscription at any time. Upon cancellation, your Premium features will remain active until the end of your current billing period.',
      },
      {
        icon: 'mail',
        title: '5. Contact Us',
        content: 'If you have questions about this Refund Policy or need to request a refund, please contact us:',
        contact: true,
      },
    ],
    footer: '© {year} Mo35. All rights reserved.',
    nav: { privacy: 'Privacy', terms: 'Terms', pricing: 'Pricing' },
  },
  es: {
    back: 'Volver al inicio',
    title: 'Política de Reembolso',
    subtitle: 'Mo35',
    updated: 'Última actualización: 4 de marzo de 2026',
    sections: [
      {
        icon: 'info',
        title: '1. Descripción General',
        content: 'Esta Política de Reembolso describe los términos bajo los cuales Mo35 ("nosotros", "nuestro") procesa las solicitudes de reembolso para el plan de suscripción Premium. Tu satisfacción es nuestra prioridad.',
      },
      {
        icon: 'check',
        title: '2. Garantía de Reembolso',
        content: 'Ofrecemos un reembolso completo dentro de los 14 días posteriores a cualquier compra — sin preguntas. Si no estás satisfecho con nuestro servicio por cualquier motivo, simplemente solicita un reembolso y será otorgado.',
      },
      {
        icon: 'clock',
        title: '3. Cómo Solicitar un Reembolso',
        content: null,
        list: [
          'Contáctanos a info@mo35.dev con tu correo de cuenta.',
          'Las solicitudes de reembolso se procesan dentro de 5 a 7 días hábiles.',
          'Los reembolsos se acreditarán a tu método de pago original.',
        ],
      },
      {
        icon: 'help',
        title: '4. Cancelación',
        content: 'Puedes cancelar tu suscripción Premium en cualquier momento. Al cancelar, tus funciones Premium permanecerán activas hasta el final de tu período de facturación actual.',
      },
      {
        icon: 'mail',
        title: '5. Contáctanos',
        content: 'Si tienes preguntas sobre esta Política de Reembolso o necesitas solicitar un reembolso, contáctanos:',
        contact: true,
      },
    ],
    footer: '© {year} Mo35. Todos los derechos reservados.',
    nav: { privacy: 'Privacidad', terms: 'Términos', pricing: 'Precios' },
  },
};

const icons: Record<string, React.ReactNode> = {
  info: <RotateCcw size={24} />,
  check: <CheckCircle size={24} />,
  clock: <Clock size={24} />,

  help: <HelpCircle size={24} />,
  mail: <Mail size={24} />,
};

export default function RefundPolicy() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const l = t[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 relative selection:bg-[#7B2BF9] selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B2BF9]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B2BF9]/5 blur-[120px]" />
      </div>

      {/* Header */}
      <div className="py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 animate-fadeIn">
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

          <div className="flex items-center gap-6 mb-8 animate-fadeIn">
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center border border-white/10 shadow-lg shadow-purple-900/20">
              <RotateCcw size={40} className="text-[#7B2BF9]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{l.title}</h1>
              <p className="text-gray-400 text-lg">{l.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm">{l.updated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20 relative z-10">
        <div className="space-y-6">
          {l.sections.map((section, index) => (
            <section key={index} className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                  {icons[section.icon]}
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              {section.content && (
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mt-2 marker:text-[#7B2BF9]">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <div className="glass bg-white/5 rounded-2xl p-6 space-y-3 border border-white/5 mt-4">
                  <p><span className="font-semibold text-white">Email:</span> <span className="text-gray-400">info@mo35.dev</span></p>
                  <p><span className="font-semibold text-white">Company:</span> <span className="text-gray-400">Pablo H</span></p>
                  <p><span className="font-semibold text-white">Country:</span> <span className="text-gray-400">Dominican Republic</span></p>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
            <ArrowLeft size={20} />
            {l.back}
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-10 pb-6 text-center text-gray-500 text-sm relative z-10">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/privacy" className="hover:text-white transition-colors">{l.nav.privacy}</Link>
          <Link href="/terms" className="hover:text-white transition-colors">{l.nav.terms}</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">{l.nav.pricing}</Link>
        </div>
        <p>{l.footer.replace('{year}', new Date().getFullYear().toString())}</p>
      </footer>
    </div>
  );
}
