import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{status: 'success' | 'error' | null, message: string}>({status: null, message: ''});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({status: null, message: ''});

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbytsVS96hQSAsnRNzxcnCki_L-mes2Z9fyWpspA-wtQu1sDplR3O4tWfNjtteobn3V6/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          privacy: formData.privacy
        })
      });

      setSubmitStatus({status: 'success', message: 'お問い合わせを受け付けました'});
      setFormData({
        email: '',
        name: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      setSubmitStatus({status: 'error', message: '送信に失敗しました。後でもう一度お試しください。'});
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            お問い合わせ
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            ご質問やご要望がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                お名前
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                メールアドレス
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                お問い合わせ内容
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                  required
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <label htmlFor="privacy" className="text-sm leading-6 text-gray-600">
                プライバシーポリシーに同意する
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </div>
          {submitStatus.status && (
            <div className={`mt-3 text-sm text-center ${submitStatus.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
