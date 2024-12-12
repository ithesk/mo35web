'use client'

import React, { useState } from 'react';
import { Smartphone, Info, Lock, ArrowRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { changelog } from '../config/changelog';

// Componente separado para el Changelog
const ChangelogModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute left-0 bottom-full mb-2 w-80 md:w-96 bg-white text-purple-900 rounded-xl shadow-xl border border-purple-100 overflow-hidden"
      onClick={(e) => e.stopPropagation()} // Prevenir que el click se propague
    >
      <div className="p-4 bg-purple-50 border-b border-purple-100">
        <h3 className="text-lg font-bold text-purple-600">Historial de Cambios</h3>
      </div>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {changelog.map((release, index) => (
          <div key={index} className="p-4 border-b border-purple-100 hover:bg-purple-50 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-purple-600">v{release.version}</h4>
              <span className="text-sm text-purple-400">{release.date}</span>
            </div>
            <ul className="space-y-2">
              {release.changes.map((change, changeIndex) => (
                <li key={changeIndex} className="flex items-start gap-2 text-sm">
                  <span className="text-purple-400">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Mo35Landing() {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent('¡Hola!');
    window.open(`https://wa.me/18299316043?text=${message}`, '_blank');
  };

  return (
    // Agregamos onClick al div principal y cursor-pointer
    <div 
      className="min-h-screen bg-[#7B2BF9] p-8 cursor-pointer"
      onClick={openWhatsApp}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Logo con Imagen */}
          <div className="relative w-32 h-32 mx-auto mb-8 animate-float">
            <Image
              src="/logomo35.svg"
              alt="Mo35 Logo"
              width={128}
              height={128}
              className="w-full h-full"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 animate-slideUp"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Consulta IMEI Inteligente
          </h1>
          
          {/* Agregamos una indicación visual */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 opacity-0 animate-slideUp"
             style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            Verifica la información de cualquier dispositivo móvil de forma rápida y sencilla usando mensajería
            <span className="block text-sm mt-2 text-white/70">
              Toca en cualquier lugar para comenzar
            </span>
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['PocketBase', 'Google Vision', 'TypeScript', 'API REST'].map((tech, index) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-white/20 rounded-xl text-white opacity-0 animate-fadeIn hover:bg-white/30 transition-all duration-300"
                style={{ 
                  animationDelay: `${700 + (index * 100)}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Smartphone size={32} />,
              title: "Fácil de Usar",
              description: "Envía un mensaje con una imagen del IMEI o escríbelo directamente usando mensajería"
            },
            {
              icon: <Info size={32} />,
              title: "Información Completa",
              description: "Modelo exacto, color, capacidad, fecha de compra y estado del dispositivo al instante"
            },
            {
              icon: <Lock size={32} />,
              title: "Compra Segura",
              description: "Verifica el estado antes de realizar una compra o venta de dispositivos"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/20 rounded-2xl p-6 opacity-0 animate-slideUp transform hover:translate-y-[-10px] hover:bg-white/30 transition-all duration-300"
              style={{ 
                animationDelay: `${1000 + (index * 200)}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-white mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white/20 rounded-2xl p-8 mb-16 opacity-0 animate-slideUp"
             style={{ animationDelay: '1600ms', animationFillMode: 'forwards' }}>
          <h2 className="text-2xl font-bold text-white mb-8">¿Cómo funciona?</h2>
          
          {[
            {
              step: "1",
              title: "Envía el IMEI",
              description: "Toma una foto, envía una captura de pantalla o escribe /imei seguido del número"
            },
            {
              step: "2",
              title: "Procesamiento Inteligente",
              description: "Nuestro sistema analiza la información usando Google Vision y nuestra API especializada"
            },
            {
              step: "3",
              title: "Resultados Instantáneos",
              description: "Recibe todos los detalles relevantes del dispositivo en segundos"
            }
          ].map((step, index) => (
            <div 
              key={index} 
              className="flex items-start mb-8 last:mb-0 opacity-0 animate-fadeIn hover:bg-white/10 rounded-xl transition-all duration-300 p-4"
              style={{ 
                animationDelay: `${1800 + (index * 200)}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-10 h-10 bg-white text-[#7B2BF9] rounded-xl flex items-center justify-center font-bold text-xl mr-4">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center opacity-0 animate-slideUp"
             style={{ animationDelay: '2200ms', animationFillMode: 'forwards' }}>
          <p className="text-xl text-white mb-6">¡Versión beta disponible!</p>
          <button className="bg-white text-[#7B2BF9] px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:scale-105 hover:bg-white/90 transition-all duration-300">
            Escribe "¡hola!" para comenzar
            <ArrowRight className="inline animate-float" />
          </button>
        </div>

        {/* Changelog Button - Fixed Position */}
        <div 
          className="fixed bottom-4 left-4 z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsChangelogOpen(!isChangelogOpen);
          }}
        >
          <button
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#7B2BF9] rounded-xl font-medium hover:-translate-y-1 transition-all shadow-lg opacity-0 animate-fadeIn"
            style={{ animationDelay: '2400ms', animationFillMode: 'forwards' }}
          >
            <Clock size={20} />
            Changelog
            {isChangelogOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>

          <ChangelogModal 
            isOpen={isChangelogOpen} 
            onClose={() => setIsChangelogOpen(false)} 
          />
        </div>

        {/* Indicador flotante */}
        <div className="fixed bottom-4 right-4 bg-white rounded-full p-4 animate-bounce shadow-lg">
          <Smartphone className="w-6 h-6 text-[#7B2BF9]" />
        </div>
      </div>
    </div>
  );
}