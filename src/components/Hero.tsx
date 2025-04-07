import React from 'react';
import { Book } from 'lucide-react';

const Hero = () => {
  return (
    <div id="hero" className="relative bg-transparent overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-20 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="relative mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-shadow relative z-30">
                <span className="block mb-6 text-gradient">楽しみながら</span>
                <span className="block text-gradient">読解力を育てよう</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up relative z-30">
                毎日更新される短編小説で、<br />
                中学受験に向けた国語力を楽しく身につけましょう。
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up relative z-30">
                <button className="button-gradient px-8 py-4 rounded-full text-white font-medium text-lg shadow-soft hover-lift">
                  本日のストーリーを読む
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10"></div>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transition-transform duration-700 hover:scale-105"
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="読書をする生徒"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
