import React, { useState, useEffect } from 'react';
import { getStories, type Story } from '../lib/gcs';

const StoryList = () => {
  const [allStories, setAllStories] = useState<Story[]>([]);
  const [displayedStories, setDisplayedStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [wordCountFilter, setWordCountFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStories();
        setAllStories(data);
        setLoading(false);
      } catch (err) {
        setError('ストーリーの取得に失敗しました。');
        console.error('ストーリー取得エラー:', err);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    let filtered = [...allStories];
    
    if (wordCountFilter !== 'all') {
      filtered = filtered.filter(story => {
        const wordCount = story.wordCount;
        switch(wordCountFilter) {
          case '5000-8000': return wordCount >= 5000 && wordCount < 8000;
          case '8000-12000': return wordCount >= 8000 && wordCount < 12000;
          case '12000-15000': return wordCount >= 12000 && wordCount < 15000;
          case '15000-': return wordCount >= 15000;
          default: return true;
        }
      });
    }
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(story => story.category === categoryFilter);
    }
    
    filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    setDisplayedStories(showAll ? filtered : filtered.slice(0, 3));
  }, [allStories, showAll, wordCountFilter, categoryFilter]);

  if (loading) {
    return <div className="py-16 bg-blue-50">読み込み中...</div>;
  }

  if (error) {
    return <div className="py-16 bg-blue-50 text-red-600">{error}</div>;
  }

  if (allStories.length === 0) {
    return <div className="py-16 bg-blue-50">表示できるストーリーがありません</div>;
  }

  return (
    <div id="stories" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">おすすめストーリー</h2>
          <p className="mt-4 text-lg text-gray-500">
            受験によくでる心情理解、比喩表現を使った様々なジャンルの物語をご用意しております。
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center bg-white p-6 rounded-xl shadow-sm">
          <div className="w-full md:flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">文字数</label>
            <div className="flex flex-wrap gap-2">
              {['all', '5000-8000', '8000-12000', '12000-15000', '15000-'].map((option) => (
                <button
                  key={option}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${wordCountFilter === option 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setWordCountFilter(option)}
                >
                  {option === 'all' ? 'すべて' : option}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">カテゴリー</label>
            <div className="flex flex-wrap gap-2">
              {['all', '多様性', '人間関係', '家族', '自己理解・成長', '社会'].map((option) => (
                <button
                  key={option}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${categoryFilter === option 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setCategoryFilter(option)}
                >
                  {option === 'all' ? 'すべて' : option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{story.summary}</p>
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>文字数: {story.wordCount.toLocaleString('ja-JP')}</span>
                  <span>カテゴリー: {story.category}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  公開日: {new Date(story.publishDate).toLocaleDateString('ja-JP')}
                </p>
                <div className="mt-4 flex justify-end">
                  <a 
                    href={story.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-300"
                  >
                    読む
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allStories.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-base hover:bg-blue-700 transition-colors duration-300"
            >
              {showAll ? `閉じる (${allStories.length}件)` : `すべて表示する (${allStories.length}件)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryList;
