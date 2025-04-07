import React from 'react';
import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">中学受験ショートストーリーズ</span>
            </div>
            <p className="mt-4 text-gray-500">
              毎日更新される短編小説と読解問題で、楽しみながら国語力を向上させましょう。
              中学受験に向けた読解力を、効果的に身につけられます。
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">サービス</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">ストーリー一覧</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">特徴・メリット</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">よくある質問</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">ご利用ガイド</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">サポート</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">お問い合わせ</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">プライバシーポリシー</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">利用規約</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">運営会社</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2025 中学受験ショートストーリーズ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
