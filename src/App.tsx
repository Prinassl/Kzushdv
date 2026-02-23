import { motion } from 'motion/react';
import { Shield, Zap, Globe, Smartphone, ChevronDown, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const BOT_LINK = "https://t.me/persik_vpnbot?start=utm_SEO";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-peach-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-peach-400 to-peach-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">PersikVPN</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-peach-600 transition-colors">Преимущества</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-peach-600 transition-colors">Как начать</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-peach-600 transition-colors">Вопросы</a>
          </div>
          <div>
            <a 
              href={BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-peach-500 hover:bg-peach-600 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              Подключить
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-peach-100/50 via-white to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach-50 text-peach-700 text-sm font-medium mb-6 border border-peach-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-peach-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-peach-500"></span>
            </span>
            Стабильная работа без перебоев
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
            Безопасный интернет <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-500 to-peach-700">на высоких скоростях с PersikVPN</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Быстрый, безопасный и надежный VPN прямо в Telegram. Наслаждайтесь высокой скоростью, смотрите видео в 4K и защищайте свои данные в один клик.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-peach-500 hover:bg-peach-600 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 gap-2"
            >
              <Send className="w-5 h-5" />
              Открыть в Telegram
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-full transition-all"
            >
              Как это работает?
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Без логов</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Высокая скорость</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Удобный бот</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-peach-500" />,
      title: "Высокая скорость",
      description: "Смотрите видео в 4K, играйте в онлайн-игры и скачивайте файлы без задержек и ограничений скорости."
    },
    {
      icon: <Shield className="w-6 h-6 text-peach-500" />,
      title: "Полная анонимность",
      description: "Мы не ведем логи вашей активности и надежно шифруем весь трафик современными протоколами."
    },
    {
      icon: <Globe className="w-6 h-6 text-peach-500" />,
      title: "Доступ к любимым сервисам",
      description: "Стабильное подключение к популярным платформам (Instagram, YouTube, Twitter) с высокой скоростью загрузки."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-peach-500" />,
      title: "Максимально удобно",
      description: "Никаких сложных регистраций. Настройка в 2 клика через удобного Telegram-бота для любого устройства."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают PersikVPN?</h2>
          <p className="text-lg text-gray-600">Мы создали сервис, который решает главные проблемы современных VPN: низкую скорость и нестабильное соединение.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-peach-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Запустите бота",
      description: "Перейдите в нашего Telegram-бота по кнопке на сайте. Это безопасно и не требует скачивания подозрительных приложений."
    },
    {
      number: "02",
      title: "Получите настройки",
      description: "Бот моментально выдаст вам индивидуальный ключ доступа и подробную инструкцию для вашего устройства (iOS, Android, PC)."
    },
    {
      number: "03",
      title: "Наслаждайтесь",
      description: "Подключитесь в один клик и пользуйтесь свободным интернетом на высокой скорости без ограничений."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Начать пользоваться проще простого</h2>
            <p className="text-lg text-gray-600 mb-10">Забудьте о долгих регистрациях, подтверждении email и привязке карт. Весь процесс занимает меньше минуты прямо в вашем любимом мессенджере.</p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-peach-100 text-peach-600 font-bold flex items-center justify-center text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a
                href={BOT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors gap-2"
              >
                Перейти к шагу 1 <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-peach-100 to-peach-300 aspect-[4/3] flex items-center justify-center p-8">
              <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full max-h-[500px]">
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-peach-400 to-peach-600 rounded-full flex items-center justify-center text-white font-bold">P</div>
                  <div>
                    <div className="font-semibold text-sm">PersikVPN Bot</div>
                    <div className="text-xs text-gray-500">bot</div>
                  </div>
                </div>
                <div className="flex-1 p-4 bg-[#e4ddd6] flex flex-col gap-3 overflow-y-auto">
                  <div className="self-end bg-[#eeffde] px-3 py-2 rounded-2xl rounded-tr-sm shadow-sm text-sm max-w-[80%]">
                    /start
                  </div>
                  <div className="self-start bg-white px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-sm max-w-[85%]">
                    👋 Привет! Я бот PersikVPN.<br/><br/>
                    Готов предоставить тебе быстрый и безопасный доступ к свободному интернету.<br/><br/>
                    Нажми кнопку ниже, чтобы получить свой ключ.
                  </div>
                  <div className="self-start bg-white px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-sm max-w-[85%] w-full">
                    <div className="text-center text-blue-500 font-medium py-1 border-b border-gray-100">Получить ключ 🔑</div>
                    <div className="text-center text-blue-500 font-medium py-1">Помощь ❓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Что такое PersikVPN?",
      answer: "PersikVPN — это современный сервис для защиты личных данных в сети. Мы используем передовые протоколы шифрования, которые обеспечивают высокую скорость и стабильность соединения, маскируя ваш трафик."
    },
    {
      question: "На каких устройствах работает ваш VPN?",
      answer: "Наш VPN работает практически на всех современных устройствах: смартфонах (iOS, Android), компьютерах (Windows, macOS, Linux) и даже на некоторых роутерах. Бот выдаст подробную инструкцию по настройке для вашего устройства."
    },
    {
      question: "Это бесплатно?",
      answer: "У нас есть тестовый период, чтобы вы могли оценить скорость и качество сервиса. Далее вы можете выбрать один из доступных премиум-тарифов, которые стоят дешевле чашки кофе в месяц."
    },
    {
      question: "Безопасно ли использовать Telegram-бота?",
      answer: "Абсолютно. Бот используется только как удобный интерфейс для выдачи ключей доступа и управления подпиской. Сам VPN-трафик идет через наши защищенные серверы напрямую с вашего устройства, минуя Telegram."
    },
    {
      question: "Смогу ли я смотреть YouTube и Instagram?",
      answer: "Да! PersikVPN обеспечивает стабильный доступ к популярным сервисам. Вы сможете смотреть YouTube в высоком качестве, листать ленту Instagram и пользоваться другими ресурсами без ограничений скорости."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-gray-600">Отвечаем на самые популярные вопросы о нашем сервисе.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Остались вопросы?</p>
          <a 
            href={BOT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-peach-600 bg-peach-50 hover:bg-peach-100 rounded-full transition-colors"
          >
            Написать в поддержку
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-peach-400 to-peach-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">PersikVPN</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-peach-600 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-peach-600 transition-colors">Условия использования</a>
            <a href={BOT_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-peach-600 transition-colors">Поддержка</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} PersikVPN. Все права защищены.</p>
          <p className="mt-2">Сервис не предназначен для осуществления противоправной деятельности.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-peach-200 selection:text-peach-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

