
import React from 'react';
import Transition from '../animations/pageTransition/Transition';
import Nav from '../components/header/Nav';
import Menu from '../components/header/Menu';
import { works } from '../context/data';
import { useNavigate } from 'react-router-dom';

const Works = () => {
  const navigate = useNavigate();

  const handleRoutes = (route) => {
    if (route) {
      navigate(`/project/${route}`);
    }
  };

  return (
    <>
      <Nav />

      <div className="fixed top-4 right-4 z-[800]">
        <Menu />
      </div>

      <main className="min-h-screen bg-[#080807] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
              Selected Work · 2025–2026
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Projects<span className="text-emerald-400">.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
              A collection of applications and experiments built with
              programming, problem-solving, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((project) => (
              <article
                key={project.id}
                onClick={() => handleRoutes(project.routes)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleRoutes(project.routes);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#111110] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-[#151715]"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <img
                    src={project.previewImg}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-neutral-200 backdrop-blur-sm">
                    Project
                  </span>

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-lg text-black transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h2 className="text-lg font-medium tracking-tight text-white transition-colors group-hover:text-emerald-300">
                      {project.name}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                      Explore project
                    </p>
                  </div>

                  <span className="text-xs text-neutral-600">
                    {project.id}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {works.length === 0 && (
            <p className="py-16 text-center text-neutral-500">
              Projects will appear here soon.
            </p>
          )}

        </div>
      </main>
    </>
  );
};

export default Transition(Works);
