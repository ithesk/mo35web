import Link from 'next/link';
import { ArrowLeft, Shield, Database, Eye, Lock, Users, Clock, Mail, Bell, UserX } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#7B2BF9] text-white">
      {/* Header */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <Shield size={32} className="text-[#7B2BF9]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-white/80">mo35</p>
            </div>
          </div>

          <p className="text-white/80">
            Last updated: January 4, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-8">
          {/* 1. Introduction */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-white/90 leading-relaxed">
              This Privacy Policy explains how Mo35 (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) collects, uses, and protects
              your information when you use our mobile application.
            </p>
            <p className="text-white/90 leading-relaxed mt-4">
              We are committed to protecting your privacy and being transparent about how data is handled.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Database size={28} className="text-white" />
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            </div>
            <div className="space-y-6 text-white/90">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">a. Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email address (only if you choose to sign in using a Magic Link).</li>
                  <li>Used solely for authentication and account access.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">b. Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do not collect tracking data.</li>
                  <li>We do not collect location data.</li>
                  <li>We do not collect device identifiers for advertising.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Use of Information */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Eye size={28} className="text-white" />
              <h2 className="text-2xl font-bold">3. Use of Information</h2>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="leading-relaxed">We use your information only to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Authenticate your account</li>
                <li>Provide access to the app&apos;s features</li>
                <li>Maintain basic account functionality</li>
              </ul>
              <p className="leading-relaxed mt-4 font-medium">
                We do not use your information for marketing or advertising purposes.
              </p>
            </div>
          </section>

          {/* 4. IMEI Data */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Lock size={28} className="text-white" />
              <h2 className="text-2xl font-bold">4. IMEI Data</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>IMEI numbers entered or scanned in the app are used only to perform verification requests.</li>
              <li>IMEI data is not shared publicly.</li>
              <li>IMEI data is not sold or used for tracking purposes.</li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Users size={28} className="text-white" />
              <h2 className="text-2xl font-bold">5. Data Sharing</h2>
            </div>
            <div className="space-y-4 text-white/90">
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
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={28} className="text-white" />
              <h2 className="text-2xl font-bold">6. Data Retention</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>Account-related information (such as email) is retained only as long as necessary to provide the service.</li>
              <li>You may request deletion of your account and associated data at any time.</li>
            </ul>
          </section>

          {/* 7. Security */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} className="text-white" />
              <h2 className="text-2xl font-bold">7. Security</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse.</li>
              <li>All communications are transmitted using secure connections.</li>
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <UserX size={28} className="text-white" />
              <h2 className="text-2xl font-bold">8. Children&apos;s Privacy</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>IMEI Check is not intended for children.</li>
              <li>We do not knowingly collect personal information from children under the age of 13.</li>
            </ul>
          </section>

          {/* 9. Your Rights */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={28} className="text-white" />
              <h2 className="text-2xl font-bold">9. Your Rights</h2>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="leading-relaxed">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
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
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Bell size={28} className="text-white" />
              <h2 className="text-2xl font-bold">10. Changes to This Policy</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>We may update this Privacy Policy from time to time.</li>
              <li>Any changes will be posted within the app or on this page.</li>
            </ul>
          </section>

          {/* 11. Contact Information */}
          <section className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={28} className="text-white" />
              <h2 className="text-2xl font-bold">11. Contact Information</h2>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, you can contact us at:
              </p>
              <div className="bg-white/10 rounded-2xl p-4 space-y-2">
                <p><span className="font-semibold text-white">Email:</span> info@mo35.dev</p>
                <p><span className="font-semibold text-white">Company:</span> pablo h</p>
                <p><span className="font-semibold text-white">Country:</span> Dominican Republic</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7B2BF9] rounded-xl font-bold hover:scale-105 transition-all">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
