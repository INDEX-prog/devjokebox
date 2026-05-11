"use client";

import { useState } from "react";

export default function CTA(): React.ReactElement {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Code Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-white text-6xl font-mono">
          {"{"}
        </div>
        <div className="absolute top-20 right-20 text-white text-4xl font-mono">
          {"</>"}
        </div>
        <div className="absolute bottom-20 left-1/4 text-white text-5xl font-mono">
          {"()"}
        </div>
        <div className="absolute bottom-10 right-1/4 text-white text-6xl font-mono">
          {"}"}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Emoji Animation */}
        <div className="flex justify-center gap-4 mb-8">
          {["😂", "🤣", "😆", "😄", "🎉"].map((emoji, index) => (
            <span
              key={index}
              className="text-4xl animate-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Prêt à devenir le{" "}
          <span className="text-yellow-300">dev le plus drôle</span> de votre
          équipe ?
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Rejoignez plus de 500 développeurs qui ont transformé leurs standups
          ennuyeux en moments de rire et de complicité. 14 jours gratuits, sans
          engagement.
        </p>

        {/* CTA Form */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="cta-email" className="sr-only">
                Adresse email
              </label>
              <input
                type="email"
                id="cta-email"
                value={email}
                onChange={handleEmailChange}
                placeholder="votre@email.dev"
                className="w-full px-5 py-4 text-slate-900 bg-white border-2 border-transparent rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 placeholder:text-slate-400"
              />
            </div>
            <a
              href="#pricing"
              className="px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              C&apos;est parti ! 🚀
            </a>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-primary-100">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            14 jours gratuits
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Annulation facile
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Satisfait ou remboursé
          </span>
        </div>

        {/* Joke Teaser */}
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-lg mx-auto">
          <p className="text-white/80 text-sm mb-2">Blague bonus 🎁</p>
          <p className="text-white font-medium">
            &ldquo;There are only 10 types of people in the world:
          </p>
          <p className="text-yellow-300 font-bold">
            Those who understand binary and those who don&apos;t.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
