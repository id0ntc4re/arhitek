import Image from "next/image";
import './hero.scss';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <video className="hero-video" preload="auto" autoPlay muted playsInline loop>
          <source src="/Home/video.MP4" type="video/mp4" />
          Ваш браузер не поддерживает данное видео
        </video>
        <div className="hero-content">
          <div className="slogan">
            <div className="slogan-bottom">
              <h1 className="text-white">Строительство домов под ключ</h1>
            </div>
            <div className="slogan-bottom">
              <h2 className="experience">ОПЫТ БОЛЕЕ 25 ЛЕТ</h2>
            </div>
          </div>
          
          <div className="bottom-row">
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Узнать стоимость</button>
          </div>
        </div>
      </div>
    </>
  );
}