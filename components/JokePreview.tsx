"use client";

import { useState } from "react";

interface Joke {
  id: number;
  setup: string;
  punchline: string;
  category: string;
  emoji: string;
}

export default function JokePreview(): React.ReactElement {
  const jokes: Joke[] = [
    {
      id: 1,
      setup: "Why do Java developers wear glasses?",
      punchline: "Because they can't C#!",
      category: "Languages",
      emoji: "👓",
    },
    {
      id: 2,
      setup: "A SQL query walks into a bar, walks up to two tables and asks...",
      punchline: '"Can I join you?"',
      category: "Database",
      emoji: "🍺",
    },
    {
      id: 3,
      setup: "Why do programmers always mix up Halloween and Christmas?",
      punchline: "Because Oct 31 == Dec 25!",
      category: "Math",
      emoji: "🎃",
    },
    {
      id: 4,
      setup: "What's a programmer's favorite hangout place?",
      punchline: "Foo Bar!",
      category: "Culture",
      emoji: "🍸",
    },
    {
      id: 5,
      setup: "Why did the developer go broke?",
      punchline: "Because he used up all his cache!",
      category: "Web Dev",
      emoji: "💸",
    },
  ];

  const [currentJokeIndex, setCurrentJokeIndex] = useState<number>(0);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  const currentJoke: Joke = jokes[currentJokeIndex];

  const handleNextJoke = (): void => {
    setShowPunchline(false);
    setCurrentJokeIndex((prev) => (prev + 1) % jokes.length);
  };

  const handlePrevJoke = (): void => {
    setShowPunchline(false);
    setCurrentJokeIndex((prev) => (prev - 1 + jokes.length) % jokes.length);
  };

  const handleRevealPunchline = (): void => {
    setShowPunchline(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            😂 Aperçu des blagues
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Goûtez avant de{" "}
            <span className="gradient-text">vous abonner</span>
          </h2>
          <p className="text-lg text-slate-600">
            Voici un échantillon de ce qui vous attend chaque semaine. Attention,
            effets secondaires possibles : sourire involontaire et envie de
            partager !
          </p>
        </div>

        {/* Joke Card */}
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-accent-light rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

            {/* Category Badge */}
            <div className="relative z-10 flex items-center justify-between mb-8">
              <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                {currentJoke.emoji} {currentJoke.category}
              </span>
              <span className="text-slate-400 text-sm">
                {currentJokeIndex + 1} / {jokes.length}
              </span>
            </div>

            {/* Joke Content */}
            <div className="relative z-10 text-center mb-8">
              <p className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 leading-relaxed">
                {currentJoke.setup}
              </p>

              {showPunchline ? (
                <div className="animate-fadeIn">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    {currentJoke.punchline}
                  </p>
                  <div className="mt-4 text-4xl animate-bounce">😂</div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleRevealPunchline}
                  className="btn-primary"
                >
                  Révéler la chute 👀
                </button>
              )}
            </div>

            {/* Navigation */}
            <div className="relative z-10 flex items-center justify-center gap-4 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrevJoke}
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Blague précédente"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {jokes.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setShowPunchline(false);
                      setCurrentJokeIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentJokeIndex
                        ? "w-8 bg-primary-500"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Aller à la blague ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextJoke}
                className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Blague suivante"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Vous en voulez plus ? Recevez 5 nouvelles blagues chaque semaine !
            </p>
            <a href="#pricing" className="btn-secondary">
              Voir l&apos;offre complète →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
