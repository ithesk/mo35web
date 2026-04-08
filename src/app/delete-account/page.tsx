import Link from 'next/link';
import { ArrowLeft, Trash2, Settings, UserX, CheckCircle, Clock } from 'lucide-react';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Cómo eliminar tu cuenta en mo35</h1>
          <p className="text-gray-400">How to delete your mo35 account</p>
        </div>

        <ol className="space-y-6 mb-12">
          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7B2BF9]/20 text-[#7B2BF9] font-bold shrink-0">
              1
            </span>
            <div>
              <p className="font-semibold text-lg">Abre la app mo35</p>
              <p className="text-gray-400 text-sm">Open the mo35 app</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7B2BF9]/20 text-[#7B2BF9] font-bold shrink-0">
              2
            </span>
            <div className="flex items-center gap-2">
              <div>
                <p className="font-semibold text-lg">Ve a Configuración → Cuenta</p>
                <p className="text-gray-400 text-sm">Go to Settings → Account</p>
              </div>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7B2BF9]/20 text-[#7B2BF9] font-bold shrink-0">
              3
            </span>
            <div>
              <p className="font-semibold text-lg">Toca &ldquo;Eliminar cuenta&rdquo;</p>
              <p className="text-gray-400 text-sm">Tap &ldquo;Delete account&rdquo;</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7B2BF9]/20 text-[#7B2BF9] font-bold shrink-0">
              4
            </span>
            <div>
              <p className="font-semibold text-lg">Confirma la acción</p>
              <p className="text-gray-400 text-sm">Confirm the action</p>
            </div>
          </li>
        </ol>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 flex items-start gap-4">
          <Clock className="w-6 h-6 text-[#7B2BF9] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Tus datos se eliminan permanentemente en un plazo de 30 días.</p>
            <p className="text-gray-400 text-sm">Your data will be permanently deleted within 30 days.</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>¿Necesitas ayuda? / Need help?</p>
          <a href="mailto:info@mo35.dev" className="text-[#7B2BF9] hover:underline">
            info@mo35.dev
          </a>
        </div>
      </div>
    </div>
  );
}
