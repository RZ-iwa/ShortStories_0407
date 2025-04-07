import React from 'react';
import { Book, Brain, CheckCircle, Clock } from 'lucide-react';

const features = [
  {
    name: '毎日届く、学びにつながる物語',
    description: '中学受験で問われる心情理解や背景知識にも触れられる、書き下ろしの物語を毎日配信。飽きずに読書習慣が身につきます。',
    icon: Book,
  },
  {
    name: '読むだけで読解力アップ',
    description: '物語に夢中になるうちに、自然と文章を読むスピードや内容を深く理解する力が向上します。',
    icon: Brain,
  },
  {
    name: '読後問題で定着',
    description: 'ストーリーの内容に関する簡単な確認問題を解くことで、「読みっぱなし」を防ぎ、理解度を深めます。',
    icon: CheckCircle,
  },
  {
    name: 'ちょうど良いボリューム',
    description: '1話あたり5,000〜30,000字の読み応えのある短編で、勉強の合間のリフレッシュにぴったり。',
    icon: Clock,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">特徴</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            楽しく学べる4つの特徴
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            中学受験に向けた読解力を、効果的に楽しく身につけられる工夫が満載です。
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                </div>
                <p className="mt-3 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
