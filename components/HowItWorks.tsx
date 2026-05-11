export default function HowItWorks(): React.ReactElement {
  const steps: Array<{
    number: string;
    title: string;
    description: string;
    icon: string;
  }> = [
    {
      number: "01",
      title: "Inscrivez-vous",
      description:
        "Créez votre compte en 30 secondes. Entrez simplement votre email et profitez de 14 jours d'essai gratuit.",
      icon: "✍️",
    },
    {
      number: "02",
      title: "Recevez vos blagues",
      description:
        "Chaque lundi à 8h, recevez votre dose hebdomadaire de 5 blagues de dev soigneusement sélectionnées.",
      icon: "📩",
    },
    {
      number: "03",
      title: "Faites rire votre équipe",
      description:
        "Partagez les blagues en standup, sur Slack, ou autour de la machine à café. Devenez la légende de votre équipe !",
      icon: "🎉",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section-padding bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent-light text-accent-dark rounded-full text-sm font-semibold mb-4">
            🎯 Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Simple comme{" "}
            <span className="gradient-text">console.log()</span>
          </h2>
          <p className="text-lg text-slate-600">
            En 3 étapes, transformez vos réunions ennuyeuses en moments de rire
            et de complicité.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent to-primary-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="card p-8 text-center h-full bg-white">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent text-white text-2xl font-bold mb-6 shadow-lg">
                    {step.icon}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-8 h-8 text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card p-1 bg-slate-900 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-slate-400 text-sm font-mono">
                your_morning.js
              </span>
            </div>
            <pre className="p-4 text-left overflow-x-auto">
              <code className="text-sm font-mono">
                <span className="text-purple-400">async function</span>{" "}
                <span className="text-yellow-300">morningStandup</span>
                <span className="text-white">()</span>{" "}
                <span className="text-white">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">joke</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-yellow-300">DevJokeBox</span>
                <span className="text-white">.</span>
                <span className="text-yellow-300">getWeeklyJoke</span>
                <span className="text-white">();</span>
                {"\n"}
                {"  "}
                <span className="text-blue-300">team</span>
                <span className="text-white">.</span>
                <span className="text-yellow-300">shareJoke</span>
                <span className="text-white">(</span>
                <span className="text-blue-300">joke</span>
                <span className="text-white">);</span>
                {"\n"}
                {"  "}
                <span className="text-purple-400">return</span>{" "}
                <span className="text-green-400">&quot;🎉 Happy team!&quot;</span>
                <span className="text-white">;</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
