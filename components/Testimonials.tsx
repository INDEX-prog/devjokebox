export default function Testimonials(): React.ReactElement {
  const testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
  }> = [
    {
      name: "Sophie Martin",
      role: "Lead Developer",
      company: "TechStartup.io",
      content:
        "Depuis que j'utilise DevJokeBox, nos standups sont passés de 'encore un lundi...' à 'qui a la blague du jour ?'. L'équipe attend mes lundis avec impatience maintenant !",
      avatar: "👩‍💻",
      rating: 5,
    },
    {
      name: "Thomas Dupont",
      role: "Scrum Master",
      company: "AgileTeam",
      content:
        "En tant que Scrum Master, trouver des ice-breakers était un calvaire. DevJokeBox m'a sauvé la vie. Les blagues sont toujours pertinentes et font mouche à 100%.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Marie Chen",
      role: "CTO",
      company: "DevOps Labs",
      content:
        "J'ai offert un abonnement à toute mon équipe. ROI imbattable : 5€/mois pour une équipe plus soudée et motivée. Les blagues CSS sont mes préférées !",
      avatar: "👩‍🔬",
      rating: 5,
    },
    {
      name: "Lucas Bernard",
      role: "Full Stack Developer",
      company: "RemoteFirst",
      content:
        "Travaillant en full remote, ces blagues sont parfaites pour nos channels Slack. Ça crée du lien même à distance. La qualité est vraiment au rendez-vous.",
      avatar: "🧑‍💻",
      rating: 5,
    },
    {
      name: "Emma Petit",
      role: "Engineering Manager",
      company: "ScaleUp Corp",
      content:
        "J'étais sceptique au début, mais après 3 mois, je ne peux plus m'en passer. Les blagues sur Git et les merge conflicts sont hilarantes et tellement vraies !",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Alex Moreau",
      role: "Junior Developer",
      company: "FirstJob Tech",
      content:
        "Grâce à DevJokeBox, je suis passé du junior timide à celui qui fait rire toute l'équipe. Meilleur investissement de ma carrière (après mon bootcamp) !",
      avatar: "👨‍💻",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-4">
            💬 Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ils ont adopté{" "}
            <span className="gradient-text">DevJokeBox</span>
          </h2>
          <p className="text-lg text-slate-600">
            Plus de 500 développeurs utilisent DevJokeBox pour égayer leurs
            journées. Voici ce qu&apos;ils en pensent.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed flex-grow mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-accent-light flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Abonnés actifs" },
            { number: "4.9/5", label: "Note moyenne" },
            { number: "2000+", label: "Blagues livrées" },
            { number: "98%", label: "Taux de satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
