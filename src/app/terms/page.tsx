'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, BookOpen, UserCheck, CreditCard, Shield, AlertTriangle, XCircle, Scale, Mail } from 'lucide-react';

const t = {
  en: {
    back: 'Back to Home',
    title: 'Terms of Service',
    subtitle: 'Mo35',
    updated: 'Last updated: March 4, 2026',
    sections: [
      {
        icon: 'book',
        title: '1. Acceptance of Terms',
        content: 'By accessing or using Mo35 ("the Service", "we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.',
      },
      {
        icon: 'file',
        title: '2. Service Description',
        content: 'Mo35 provides an IMEI checking service that allows users to verify mobile device information. The service offers Free and Premium subscription plans with varying levels of access and features.',
        list: [
          'Free Plan: 10 queries per month with basic features.',
          'Premium Plan: 30 queries per month with unlimited history, favorites, priority support, and the option to purchase additional queries at $0.35 each.',
        ],
      },
      {
        icon: 'user',
        title: '3. User Obligations',
        content: 'When using our service, you agree to:',
        list: [
          'Provide accurate information when creating your account.',
          'Use the service only for lawful purposes.',
          'Not attempt to circumvent query limits or abuse the service.',
          'Not reverse-engineer, copy, or redistribute any part of the service.',
          'Not use automated tools or bots to access the service without authorization.',
          'Comply with all applicable local, national, and international laws.',
        ],
      },
      {
        icon: 'credit',
        title: '4. Payment Terms',
        content: null,
        list: [
          'Premium subscriptions are billed monthly at $5/month.',
          'Payment is processed at the time of subscription and renews automatically.',
          'You may cancel at any time; your plan remains active until the end of the current billing period.',
          'Extra queries for Premium users are charged at $0.35 per query.',
          'Prices are in USD and may be subject to applicable taxes.',
          'We reserve the right to change pricing with 30 days prior notice.',
        ],
      },
      {
        icon: 'shield',
        title: '5. Intellectual Property',
        content: 'All content, features, and functionality of Mo35 — including but not limited to text, graphics, logos, and software — are owned by Mo35 and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written consent.',
      },
      {
        icon: 'alert',
        title: '6. Disclaimer of Warranties',
        content: null,
        list: [
          'The service is provided "as is" and "as available" without warranties of any kind.',
          'We do not guarantee the accuracy, completeness, or reliability of IMEI check results.',
          'We are not responsible for any decisions made based on the information provided by our service.',
          'We do not warrant that the service will be uninterrupted, error-free, or secure.',
        ],
      },
      {
        icon: 'x',
        title: '7. Limitation of Liability',
        content: 'To the maximum extent permitted by law, Mo35 and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.',
      },
      {
        icon: 'scale',
        title: '8. Termination',
        content: null,
        list: [
          'We reserve the right to suspend or terminate your account at any time for violation of these terms.',
          'You may terminate your account at any time by contacting us.',
          'Upon termination, your right to use the service ceases immediately.',
          'Sections regarding intellectual property, disclaimers, and limitation of liability survive termination.',
        ],
      },
      {
        icon: 'scale',
        title: '9. Governing Law',
        content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the Dominican Republic, without regard to its conflict of law principles.',
      },
      {
        icon: 'mail',
        title: '10. Contact Information',
        content: 'If you have questions about these Terms of Service, please contact us:',
        contact: true,
      },
    ],
    footer: '© {year} Mo35. All rights reserved.',
    nav: { privacy: 'Privacy', refund: 'Refund', pricing: 'Pricing' },
  },
  es: {
    back: 'Volver al inicio',
    title: 'Términos de Servicio',
    subtitle: 'Mo35',
    updated: 'Última actualización: 4 de marzo de 2026',
    sections: [
      {
        icon: 'book',
        title: '1. Aceptación de los Términos',
        content: 'Al acceder o usar Mo35 ("el Servicio", "nosotros", "nuestro"), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, por favor no uses nuestro servicio.',
      },
      {
        icon: 'file',
        title: '2. Descripción del Servicio',
        content: 'Mo35 proporciona un servicio de verificación de IMEI que permite a los usuarios verificar la información de dispositivos móviles. El servicio ofrece planes de suscripción Gratis y Premium con diferentes niveles de acceso y funciones.',
        list: [
          'Plan Gratis: 10 consultas por mes con funciones básicas.',
          'Plan Premium: 30 consultas por mes con historial ilimitado, favoritos, soporte prioritario y la opción de comprar consultas adicionales a $0.35 cada una.',
        ],
      },
      {
        icon: 'user',
        title: '3. Obligaciones del Usuario',
        content: 'Al usar nuestro servicio, aceptas:',
        list: [
          'Proporcionar información precisa al crear tu cuenta.',
          'Usar el servicio solo para fines legales.',
          'No intentar eludir los límites de consultas o abusar del servicio.',
          'No realizar ingeniería inversa, copiar o redistribuir cualquier parte del servicio.',
          'No usar herramientas automatizadas o bots para acceder al servicio sin autorización.',
          'Cumplir con todas las leyes locales, nacionales e internacionales aplicables.',
        ],
      },
      {
        icon: 'credit',
        title: '4. Términos de Pago',
        content: null,
        list: [
          'Las suscripciones Premium se facturan mensualmente a $5/mes.',
          'El pago se procesa al momento de la suscripción y se renueva automáticamente.',
          'Puedes cancelar en cualquier momento; tu plan permanece activo hasta el final del período de facturación actual.',
          'Las consultas extra para usuarios Premium se cobran a $0.35 por consulta.',
          'Los precios están en USD y pueden estar sujetos a impuestos aplicables.',
          'Nos reservamos el derecho de cambiar los precios con 30 días de aviso previo.',
        ],
      },
      {
        icon: 'shield',
        title: '5. Propiedad Intelectual',
        content: 'Todo el contenido, funciones y funcionalidad de Mo35 — incluyendo pero no limitado a texto, gráficos, logotipos y software — son propiedad de Mo35 y están protegidos por leyes de propiedad intelectual. No puedes reproducir, distribuir o crear obras derivadas sin nuestro consentimiento escrito explícito.',
      },
      {
        icon: 'alert',
        title: '6. Descargo de Responsabilidad',
        content: null,
        list: [
          'El servicio se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo.',
          'No garantizamos la precisión, integridad o confiabilidad de los resultados de verificación IMEI.',
          'No somos responsables de las decisiones tomadas basándose en la información proporcionada por nuestro servicio.',
          'No garantizamos que el servicio será ininterrumpido, libre de errores o seguro.',
        ],
      },
      {
        icon: 'x',
        title: '7. Limitación de Responsabilidad',
        content: 'En la máxima medida permitida por la ley, Mo35 y sus operadores no serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo derivado de tu uso del servicio. Nuestra responsabilidad total no excederá el monto pagado por ti en los 12 meses anteriores a la reclamación.',
      },
      {
        icon: 'scale',
        title: '8. Terminación',
        content: null,
        list: [
          'Nos reservamos el derecho de suspender o terminar tu cuenta en cualquier momento por violación de estos términos.',
          'Puedes terminar tu cuenta en cualquier momento contactándonos.',
          'Al terminar, tu derecho a usar el servicio cesa inmediatamente.',
          'Las secciones sobre propiedad intelectual, descargos y limitación de responsabilidad sobreviven a la terminación.',
        ],
      },
      {
        icon: 'scale',
        title: '9. Ley Aplicable',
        content: 'Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de la República Dominicana, sin tener en cuenta sus principios de conflicto de leyes.',
      },
      {
        icon: 'mail',
        title: '10. Información de Contacto',
        content: 'Si tienes preguntas sobre estos Términos de Servicio, contáctanos:',
        contact: true,
      },
    ],
    footer: '© {year} Mo35. Todos los derechos reservados.',
    nav: { privacy: 'Privacidad', refund: 'Reembolso', pricing: 'Precios' },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  book: <BookOpen size={24} />,
  file: <FileText size={24} />,
  user: <UserCheck size={24} />,
  credit: <CreditCard size={24} />,
  shield: <Shield size={24} />,
  alert: <AlertTriangle size={24} />,
  x: <XCircle size={24} />,
  scale: <Scale size={24} />,
  mail: <Mail size={24} />,
};

export default function TermsOfService() {
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
              <FileText size={40} className="text-[#7B2BF9]" />
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
                  {iconMap[section.icon]}
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
          <Link href="/refund" className="hover:text-white transition-colors">{l.nav.refund}</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">{l.nav.pricing}</Link>
        </div>
        <p>{l.footer.replace('{year}', new Date().getFullYear().toString())}</p>
      </footer>
    </div>
  );
}
