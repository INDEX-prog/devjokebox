"use client";

import { useState } from "react";

interface PricingFeature {
  text: string;
  included: boolean;
}

export default function Pricing(): React.ReactElement {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const features: PricingFeature[] = [
    { text: "5 blagues de dev par semaine", included: true },
    { text: "Livraison chaque lundi à 8h", included: true },
    { text: "Accès aux archives (+500 blagues)", included: true },
    { text: "Stickers numériques exclusifs", included: true },
    { text: "Memes réservés aux abonnés", included: true },
    { text: "Annulation à tout moment", included: true },
    { text: "Support prioritaire", included: true },
    { text: "Suggestions de blagues personnalisées", included: true },
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate Stripe redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // In production, this would redirect to Stripe Checkout
      // window.location.href = 'https://checkout.stripe.com/...';
    }, 1500);
  };

  return (
    <section
      id="pricing"
      className="section-padding bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
            💰 Tarif simple
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Un seul prix,{" "}
            <span className="gradient-text">tout inclus</span>
          </h2>
          <p className="text-lg text-slate-600">
            Pas de plans compliqués, pas de frais cachés. Juste des blagues de
            qualité pour un prix café par mois.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="card p-8 md:p-10 relative overflow-hidden border-2 border-primary-200">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-primary-500 to-accent text-white text-sm font-semibold px-6 py-2 rounded-bl-2xl">
                🎉 14 jours gratuits
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-accent-light mb-4">
                <span className="text-4xl">😂</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                DevJokeBox Pro
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-extrabold text-slate-900">5€</span>
                <div className="text-left">
                  <span className="block text-slate-500 text-sm">/mois</span>
                  <span className="block text-green-600 text-sm font-medium">
                    après l&apos;essai
                  </span>
                </div>
              </div>
              <p className="text-slate-500 mt-2">
                Moins cher qu&apos;un café chez Starbucks ☕
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Subscription Form */}
            {showSuccess ? (
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-3">🎉</div>
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Redirection vers Stripe...
                </h4>
                <p className="text-green-700 text-sm">
                  Vous allez être redirigé vers notre page de paiement sécurisée.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="pricing-email" className="sr-only">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="pricing-email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="votre@email.dev"
                    required
                    className="w-full px-5 py-4 text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-200 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Chargement...
                    </span>
                  ) : (
                    "Commencer l'essai gratuit →"
                  )}
                </button>
              </form>
            )}

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Paiement sécurisé
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Stripe
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Annulation facile
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-yellow-50 rounded-2xl">
              <span className="text-3xl">🛡️</span>
              <div className="text-left">
                <p className="font-semibold text-slate-900">
                  Garantie satisfait ou remboursé
                </p>
                <p className="text-sm text-slate-600">
                  Pas convaincu ? Remboursement intégral sous 30 jours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
