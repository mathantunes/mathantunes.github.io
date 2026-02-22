
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text dark:text-dark-text mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I'm glad you'd like to connect! Let's discuss how I can help you bring your ideas to life.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <a 
              href="mailto:matheus@jamtech.ch"
              className="inline-flex items-center gap-2 text-lg font-medium text-primary-600 dark:text-dark-primary hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              matheus@jamtech.ch
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}