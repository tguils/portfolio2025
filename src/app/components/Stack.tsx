export default function Stack() {
    const tech = [
      'Next.js', 'React', 'Tailwind CSS', 'WordPress', 'Joomla', 'SQL',
      'Git', 'TypeScript', 'AI Tools', 'SEO', 'UX Design', 'Vercel',
    ];
  
    return (
      <section className="bg-white text-plum py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What I Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {tech.map((item) => (
            <div
              key={item}
              className="bg-mauve text-white p-4 rounded-xl shadow-md hover:shadow-lg transition text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    );
  }
  