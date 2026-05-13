"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero(): React.ReactElement {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6 animate-bounce-slow">
            <span className="mr-2">🎉</span>
            14 jours d&apos;essai gratuit - Aucune carte requise
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            TEST-VAGUE2
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto text-balance">
            Recevez chaque semaine les meilleures blagues pour développeurs, 
            directement dans votre boîte mail. Parfait pour commencer vos 
            réunions avec le sourire ! 😄
          </p>

          {/* Email Subscription Form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="hero-email" className="sr-only">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="hero-email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="votre@email.dev"
                  className="w-full px-5 py-4 text-slate-900 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 placeholder:text-slate-400"
                />
              </div>
              <Link
                href="#pricing"
                className="btn-primary whitespace-nowrap"
              >
                Commencer l&apos;essai
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              ✓ 14 jours gratuits • ✓ Annulation facile • ✓ Zéro spam
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-600">
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent border-2 border-white flex items-center justify-center text-white text-sm font-medium"
                  >
                    {["👨‍💻", "👩‍💻", "🧑‍💻", "👨‍💼", "👩‍💼"][i - 1]}
                  </div>
                ))}
              </div>
              <span className="ml-3 font-medium">500+ devs abonnés</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 font-medium">4.9/5 de satisfaction</span>
            </div>
          </div>

          {/* Code Block Preview */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="card p-1 bg-slate-900 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-slate-400 text-sm font-mono">
                  joke_of_the_week.js
                </span>
              </div>
              <pre className="p-4 text-left overflow-x-auto">
                <code className="text-sm font-mono">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">joke</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-400">&quot;Why do programmers prefer dark mode?&quot;</span>
                  <span className="text-white">;</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">punchline</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-400">&quot;Because light attracts bugs! 🐛&quot;</span>
                  <span className="text-white">;</span>
                  {"\n\n"}
                  <span className="text-slate-500">// Delivered to your inbox every Monday 📬</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
