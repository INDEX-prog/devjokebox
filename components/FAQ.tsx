"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Comment fonctionne l'essai gratuit de 14 jours ?",
      answer:
        "Vous avez accès à toutes les fonctionnalités premium pendant 14 jours sans aucun frais. Aucune carte bancaire n'est requise pour commencer. Si vous êtes satisfait, vous pouvez vous abonner à la fin de la période d'essai. Sinon, votre compte sera simplement désactivé automatiquement.",
    },
    {
      question: "À quelle fréquence vais-je recevoir des blagues ?",
      answer:
        "Vous recevrez un email contenant 5 nouvelles blagues de développeur chaque lundi matin à 8h (heure de Paris). Parfait timing pour votre standup du lundi ! Vous aurez également accès à nos archives contenant plus de 500 blagues à tout moment.",
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer:
        "Absolument ! Vous pouvez annuler votre abonnement en un clic depuis votre espace membre. Pas de questions, pas de frais cachés. Si vous annulez, vous gardez accès jusqu'à la fin de votre période de facturation en cours.",
    },
    {
      question: "Les blagues sont-elles adaptées à un environnement professionnel ?",
      answer:
        "Oui ! Toutes nos blagues sont sélectionnées pour être partagées en milieu professionnel. Elles sont humoristiques et liées au monde du développement, mais toujours respectueuses et adaptées à tous les publics.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer:
        "Nous utilisons Stripe pour le traitement des paiements, ce qui vous permet de payer par carte bancaire (Visa, Mastercard, American Express) en toute sécurité. Vos données de paiement ne transitent jamais par nos serveurs.",
    },
    {
      question: "Puis-je offrir un abonnement à mon équipe ?",
      answer:
        "Bien sûr ! C'est même une excellente idée pour renforcer la cohésion d'équipe. Contactez-nous pour les tarifs groupes ou entreprises. Nous proposons des réductions à partir de 5 abonnements.",
    },
    {
      question: "D'où viennent les blagues ?",
      answer:
        "Nos blagues sont soit créées par notre équipe de devs humoristes, soit soumises par notre communauté et rigoureusement sélectionnées. Chaque blague passe par un processus de validation pour garantir qualité et originalité.",
    },
    {
      question: "Y a-t-il une garantie de remboursement ?",
      answer:
        "Oui ! Si vous n'êtes pas satisfait dans les 30 premiers jours suivant votre abonnement, nous vous remboursons intégralement, sans condition. Nous sommes convaincus que vous allez adorer DevJokeBox !",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-semibold mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Questions{" "}
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-slate-600">
            Vous avez des questions ? Nous avons les réponses. Si vous ne trouvez
            pas ce que vous cherchez, contactez-nous !
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="mailto:contact@devjokebox.com"
            className="btn-secondary inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
