import Link from 'next/link';
import { ArrowLeft, Shield, Database, Eye, Lock, Users, Clock, Mail, Bell, UserX } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-6 mb-8 animate-fadeIn">
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center border border-white/10 shadow-lg shadow-purple-900/20">
              <Shield size={40} className="text-[#7B2BF9]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-gray-400 text-lg">Mo35</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            Last updated: January 4, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20 relative z-10">
        <div className="space-y-6">
          {/* 1. Introduction */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              This Privacy Policy explains how Mo35 (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) collects, uses, and protects
              your information when you use our mobile application.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              We are committed to protecting your privacy and being transparent about how data is handled.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Database size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">a. Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#7B2BF9]">
                  <li>Email address (only if you choose to sign in using a Magic Link).</li>
                  <li>Used solely for authentication and account access.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">b. Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#7B2BF9]">
                  <li>We do not collect tracking data.</li>
                  <li>We do not collect location data.</li>
                  <li>We do not collect device identifiers for advertising.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Use of Information */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Use of Information</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">We use your information only to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#7B2BF9]">
                <li>Authenticate your account</li>
                <li>Provide access to the app&apos;s features</li>
                <li>Maintain basic account functionality</li>
              </ul>
              <p className="leading-relaxed mt-4 font-medium text-white/90 p-4 rounded-xl bg-white/5 border border-white/10">
                We do not use your information for marketing or advertising purposes.
              </p>
            </div>
          </section>

          {/* 4. IMEI Data */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">4. IMEI Data</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 marker:text-[#7B2BF9]">
              <li>IMEI numbers entered or scanned in the app are used only to perform verification requests.</li>
              <li>IMEI data is not shared publicly.</li>
              <li>IMEI data is not sold or used for tracking purposes.</li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Data Sharing</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                We do not sell, rent, or trade your personal information.
              </p>
              <p className="leading-relaxed">
                We may use trusted third-party services (such as backend infrastructure or authentication providers)
                only to operate the app, and they are required to handle data securely and in accordance with
                applicable privacy laws.
              </p>
            </div>
          </section>

          {/* 6. Data Retention */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Clock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Data Retention</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 marker:text-[#7B2BF9]">
              <li>Account-related information (such as email) is retained only as long as necessary to provide the service.</li>
              <li>You may request deletion of your account and associated data at any time.</li>
            </ul>
          </section>

          {/* 7. Security */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Security</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 marker:text-[#7B2BF9]">
              <li>We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse.</li>
              <li>All communications are transmitted using secure connections.</li>
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <UserX size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">8. Children&apos;s Privacy</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 marker:text-[#7B2BF9]">
              <li>IMEI Check is not intended for children.</li>
              <li>We do not knowingly collect personal information from children under the age of 13.</li>
            </ul>
          </section>

          {/* 9. Your Rights */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">9. Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#7B2BF9]">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can contact us at any time to exercise these rights.
              </p>
            </div>
          </section>

          {/* 10. Changes to This Policy */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Bell size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 marker:text-[#7B2BF9]">
              <li>We may update this Privacy Policy from time to time.</li>
              <li>Any changes will be posted within the app or on this page.</li>
            </ul>
          </section>

          {/* 11. Contact Information */}
          <section className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-[#7B2BF9]">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">11. Contact Information</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, you can contact us at:
              </p>
              <div className="glass bg-white/5 rounded-2xl p-6 space-y-3 border border-white/5">
                <p><span className="font-semibold text-white">Email:</span> info@mo35.dev</p>
                <p><span className="font-semibold text-white">Company:</span> pablo h</p>
                <p><span className="font-semibold text-white">Country:</span> Dominican Republic</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
