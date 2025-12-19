import React from 'react';

interface WhoAmIProps {
  onResumeClick?: () => void;
  onProjectsClick?: () => void;
}

const WhoAmI: React.FC<WhoAmIProps> = ({
  onResumeClick,
  onProjectsClick,
}) => {
  return (
    <section
      aria-labelledby="who-am-i-title"
      className="max-w-3xl mx-auto px-4 py-16"
      id='who-am-i'
    >
      <header className="mb-6">
        <h1
          id="who-am-i-title"
          className="text-3xl font-semibold tracking-tight"
        >
          Who am I
        </h1>
      </header>

      <article className="space-y-4 text-base leading-relaxed text-gray-700">
        <p>
          My name is <strong> Masoud Jafari</strong>. I am a 22-year-old
          self-taught frontend developer based in Tehran, Iran.
        </p>

        <p>
          I specialize in building responsive and user-friendly web
          applications using <strong>HTML, CSS, JavaScript, Bootstrap</strong>,
          and <strong>React.js</strong>.
        </p>

        <p>
          Frontend development aligns with all of my passions—it combines
          creativity and problem-solving with teamwork and management skills.
          I enjoy the fast-paced evolution of modern web technologies and
          continuously explore new frameworks and tools to improve my craft.
        </p>
      </article>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={onResumeClick}
          className="rounded-lg border border-gray-900 px-6 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
        >
          View Resume
        </button>

        <button
          type="button"
          onClick={onProjectsClick}
          className="rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          View Projects
        </button>
      </div>
    </section>
  );
};

export default WhoAmI;
