export default function Features(): React.ReactElement {
  const features: Array<{
    icon: string;
    title: string;
    description: string;
    gradient: string;
  }> = [
    {
      icon: "📬",
      title: "Livraison Hebdomadaire",
      description:
        "Chaque lundi matin, recevez une sélection de blagues fraîches dans votre boîte mail. Parfait timing pour vos standups du lundi !",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎯",
      title: "Blagues Curées à la Main",
      description:
        "Fini les blagues nulles ! Notre équipe sélectionne uniquement les meilleures blagues de dev, testées et approuvées par des vrais développeurs.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "💻",
      title: "100% Dev Culture",
      description:
        "JavaScript, Python, CSS, Git, bugs, deadlines... Toutes les références que seuls les devs comprennent vraiment. if(joke) { laugh(); }",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "🚀",
      title: "Boost de Moral Garanti",
      description:
        "Transformez l'ambiance de vos réunions. Des études montrent que le rire améliore la productivité et la cohésion d'équipe de 23%.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "📱",
      title: "Format Optimal",
      description:
        "Des blagues courtes et percutantes, parfaites pour être lues en 10 secondes ou partagées sur Slack. Copier-coller friendly !",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "🎁",
      title: "Bonus Exclusifs",
      description:
        "Accédez à notre archive de +500 blagues, des stickers numériques et des memes exclusifs réservés aux abonnés.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
            ✨ Fonctionnalités
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tout ce qu&apos;il faut pour des{" "}
            <span className="gradient-text">standups mémorables</span>
          </h2>
          <p className="text-lg text-slate-600">
            DevJokeBox n&apos;est pas juste une newsletter. C&apos;est votre arme secrète
            pour devenir le dev le plus cool de l&apos;équipe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Prêt à transformer vos standups ?
          </p>
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center"
          >
            Voir les tarifs
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
