const highlights = [
    {
      title: "Full-Stack Experience",
      description: "Managing WordPress & Joomla websites, databases, servers, and frontend UX.",
    },
    {
      title: "Agency Partner",
      description: "Providing ongoing dev support, troubleshooting, and client collaboration for local agencies.",
    },
    {
      title: "AI-Driven Strategy",
      description: "Integrating smart content pipelines and automation with AI tools.",
    },
    {
      title: "Consulting & Design",
      description: "Advising clients on digital strategy and designing simple, elegant solutions.",
    },
  ]
  
  export default function Highlights() {
    return (
      <section className="bg-cream text-plum py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-10">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-md text-left hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-mauve">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  