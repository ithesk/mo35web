'use client'

import React, { useState } from 'react';
import { Smartphone, Info, Lock, ArrowRight, Download, AlertTriangle, Check, X, ChevronRight, Apple } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ScreenshotSlideshow } from './components/ScreenshotSlideshow';

export default function Mo35Landing() {

  // Función para redirigir a App Store
  const openAppStore = () => {
    // Placeholder URL - update if real URL is known or strictly use app-id metadata behavior if supported
    window.open('https://apps.apple.com/app/id6757360494', '_blank');
  };

  return (
    <div className="min-h-screen relative selection:bg-[#7B2BF9] selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B2BF9]/20 blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7B2BF9]/10 blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        {/* Navigation / Header */}
        <nav className="flex justify-between items-center mb-20 animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logomo35.svg"
                alt="Mo35 Logo"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">Mo35</span>
          </div>
          <button onClick={openAppStore} className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all transform hover:scale-105">
            <Apple size={18} className="mb-0.5" />
            <span>Descargar App</span>
          </button>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">

          <div className="text-left animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Nuevo lanzamiento iOS
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Consultas IMEI <br />
              <span className="text-gradient">redefinidas.</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              La era del bot ha terminado. Descubre la potencia de nuestra nueva aplicación nativa. Más rápida, más segura y diseñada para profesionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openAppStore}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#7B2BF9] hover:bg-[#6222c7] text-white rounded-2xl font-bold text-lg transition-all transform hover:translate-y-[-2px] shadow-lg shadow-purple-900/50"
              >
                <Apple size={24} />
                <span>Descargar en App Store</span>
              </button>
              <a
                href="#features"
                className="flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white rounded-2xl font-medium transition-all"
              >
                Ver novedades
                <ChevronDownIcon />
              </a>
            </div>

            {/* Migration Notice */}
            <div className="mt-10 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-3 max-w-md">
              <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-yellow-500 text-sm mb-1">Aviso Importante</h4>
                <p className="text-gray-400 text-sm leading-snug">
                  El bot de WhatsApp dejará de funcionar próximamente. Migra a la app para asegurar acceso ininterrumpido a tus herramientas.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            {/* Abstract Phone Representation or App Screenshot Placeholder */}
            <div className="relative w-[300px] h-[600px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

              {/* Real App Screenshot Slideshow */}
              <div className="w-full h-full bg-black relative">
                <ScreenshotSlideshow />
              </div>
            </div>

            {/* Background Blooms behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-purple-500/20 blur-[80px] -z-10"></div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div id="features" className="py-20 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Por qué cambiar?</h2>
            <p className="text-gray-400">La evolución natural de tu herramienta de trabajo.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Smartphone className="text-purple-400" size={32} />}
              title="Experiencia Nativa"
              description="Olvídate de comandos de texto. Una interfaz visual, táctil y diseñada para iPhone."
            />
            <FeatureCard
              icon={<HistoryIcon className="text-purple-400" size={32} />}
              title="Historial Local"
              description="Guarda tus consultas directamente en tu dispositivo. Acceso offline y búsqueda instantánea."
            />
            <FeatureCard
              icon={<Lock className="text-purple-400" size={32} />}
              title="Mayor Privacidad"
              description="Tus datos y consultas se procesan de forma más segura sin intermediarios de mensajería."
            />
          </div>
        </div>

        {/* Comparison Table (Simplified) */}
        <div className="py-10 max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Comparativa</h3>
            <div className="space-y-4">
              <ComparisonRow feature="Velocidad de Respuesta" bot="Lenta" app="Instantánea" />
              <ComparisonRow feature="Interfaz Gráfica" bot="No (Texto)" app="Si (Nativa)" />
              <ComparisonRow feature="Historial de Consultas" bot="Limitado" app="Ilimitado" />
              <ComparisonRow feature="Notificaciones" bot="No" app="Si" />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Da el siguiente paso.</h2>
          <button
            onClick={openAppStore}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-xl transition-all transform hover:scale-105"
          >
            <Apple size={24} />
            <span>Descargar Mo35 para iOS</span>
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-10 pb-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Soporte</Link>
          </div>
          <p>© {new Date().getFullYear()} Mo35. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

// Helper Components

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors cursor-default border border-transparent hover:border-white/10 group">
      <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#7B2BF9]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

function ComparisonRow({ feature, bot, app }: { feature: string, bot: string, app: string }) {
  return (
    <div className="grid grid-cols-3 items-center py-3 border-b border-gray-800 last:border-0">
      <div className="text-gray-400 font-medium text-sm md:text-base">{feature}</div>
      <div className="text-center text-gray-500 text-sm md:text-base flex items-center justify-center gap-2">
        <span className="hidden md:inline">{bot}</span>
        {bot === 'No' || bot === 'Limitado' || bot === 'Lenta' || bot === 'No (Texto)' ? <X size={14} className="text-red-500/70" /> : null}
      </div>
      <div className="text-center text-[#7B2BF9] font-bold text-sm md:text-base flex items-center justify-center gap-2">
        <span className="hidden md:inline">{app}</span>
        <Check size={16} />
      </div>
    </div>
  )
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
  )
}

function HistoryIcon({ size, className }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" /><path d="M3 3v9h9" /><path d="M12 7v5l4 2" /></svg>
  )
}