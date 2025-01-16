// src/config/changelog.ts

export interface ChangelogEntry {
    version: string;
    date: string;
    changes: string[];
  }
  
  export const changelog: ChangelogEntry[] = [
    {
      version: "0.0.6",
      date: "15 enero 2025",
      changes: [
        "Fix bug que tomaba el imei incorrecto de las imagenes",
        "fix bug que detectaba los modelos reciente 16Series",
        "Se acctualizo la forma de buscar por reitentos",
    ]
  },
    {
      version: "0.0.5",
      date: "14 Dic 2024",
      changes: [
        "Fix bug que tomaba el imei incorrecto de las imagenes",
        "Se agrego un reitento de candidatos encontrados en la imagenes",
    ]
  },
    {
      version: "0.0.4",
      date: "13 Dic 2024",
      changes: [
        "Nuevo sistema detectar imei desde nota voz",
        "Las consultas ofrecen mas informacion como icloud on y otras mas ",
        "Se agrego una funcion que busca el precio local del equipo",
        "Las consultas el tiempo estimado >=10 Segundos",
    ]
  },
    {
        version: "0.0.3",
        date: "1 Dic 2024",
        changes: [
          "Nuevo sistema de procesamiento de imágenes",
          "Mejora en la precisión de detección de IMEI",
          "Soporte para más modelos de dispositivos"
      ]
    },
    {
      version: "0.0.2",
      date: "15 Nov 2024",
      changes: [
        "Integracion reconocimiento vision",
        "Tipos de Busqueda de IMEI :Standar y Advance",
        
      ]
    },
    {
      version: "0.0.1",
      date: "15 Nov 2024",
      changes: [
        "Lanzamiento inicial de Mo35",
        "Funcionalidad básica de consulta IMEI",
        "Soporte en whatsapp"
      ]
    }
  ];
  
  // Función helper para agregar nuevas entradas
  export const addChangelogEntry = (
    version: string,
    date: string,
    changes: string[]
  ) => {
    changelog.unshift({
      version,
      date,
      changes
    });
  };