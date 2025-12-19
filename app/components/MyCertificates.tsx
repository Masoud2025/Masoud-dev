import React from 'react';

interface Certificate {
  id: number;
  title: string;
  image: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'React Certificate',
    image: '/certificates/react.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'JavaScript Certificate',
    image: '/certificates/javascript.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    image: '/certificates/responsive.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Frontend Development',
    image: '/certificates/frontend.jpg',
    link: '#',
  },
];

const MyCertificates: React.FC = () => {
  return (
    <section
      aria-labelledby="certificates-title"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <header className="mb-12 text-center">
        <h2
          id="certificates-title"
          className="text-3xl font-semibold tracking-tight"
        >
          My Certificates
        </h2>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert) => (
          <article
            key={cert.id}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200"
                >
                  View Certificate
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyCertificates;
