import Image from "next/image";
import Hero from "../../components/Home/Hero/Hero";
// import Projects from "../../components/Home/Projects/Projects";

import Services from "../../components/Home/Services/Services";
import Blog from "../../components/Catalog/Catalog";
import Advantages from "../../components/Home/Advantages/Advantages";
// import Form from "../../components/Home/Form/Form";
import Quiz from '../../components/QuizEVG/Quiz'
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import videos from "../../components/VideoGallery/videos.json";
import QuizComponent from '../../components/QuizComponent/QuizComponent'; 
import Consultation from '../../components/Consultation/Consultation';
import BanksPartners from '../../components/Bank/BanksPartners'; 

export const metadata = {
  title: "Строительство домов под ключ Кемерово | Архитек",
  description: "Спроектируем и построим дом под ключ в Кемерово. Опыт более 25 лет. Узнайте больше!",
  alternates: {
    canonical: 'https://arhitek42.ru'
  },
  keywords: [
    'архитектура',
    'архитектурные решения',
    'дизайн интерьеров',
    'интерьер дома',
    'интерьер квартиры',
    'уникальный дизайн интерьера',
    'архитектурные проекты под ключ',
    'дизайн дома',
    'дизайн офиса',
    'дизайн помещений',
    'авторский надзор',
    'архитектурное проектирование',
    'современные интерьеры',
    'эксклюзивные интерьеры',
    'услуги дизайнера интерьеров',
    'услуги архитектора',
    'проектирование домов',
    'авторский надзор',
    'загородные дома',
    'дизайн студия'
  ],
    openGraph: {
      title: "Строительство домов под ключ Кемерово | Архитек",
      description: "Спроектируем и построим дом под ключ в Кемерово. Опыт более 25 лет. Узнайте больше!",
      url: `https://arhitek42.ru`,
      images: [
          {
              url: `/favicon/favicon-96x96.png`,
              alt: 'Архитек',
          },
      ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <QuizComponent />
      <BanksPartners/>
      {/* <Quiz /> */}
      <Blog/>
      <VideoGallery videos={videos} title="Видеоблог Архитек"/>
      <Consultation/>
      {/* <Services /> */}
      {/* <Form /> */}
    </>
  );
}
