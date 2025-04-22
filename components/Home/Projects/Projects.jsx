import Image from "next/image";
import './Projects.scss'
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="home-block projects">
        <h2><span>Реализованные</span> проекты</h2>
        <div className="projects-block">
              <Link className="article-card" href='/portfolio/izumrud'>
                <Image src={`/Portfolio/izumrud/1.webp`} alt="Резиденция Изумруд" width={1000} height={1000}/>
                <h4>Резиденция Изумруд</h4>
                  <span>Сочетание элегантности и стойкости</span>
              </Link>

              <Link className="article-card" href='/portfolio/z-700'>
                <Image src={`/Portfolio/z-700/1.webp`} alt="Резиденция Изумруд" width={1000} height={1000}/>
                <h4>Z-700</h4>
                  <span>Современные формы и чистота линий</span>
              </Link>

              <Link className="article-card" href='/portfolio/garmonia'>
                <Image src={`/Portfolio/garmonia/1.webp`} alt="Резиденция Изумруд" width={1000} height={1000}/>
                <h4>Гармония времен</h4>
                  <span>Современная классика</span>
              </Link>

              <Link className="article-card" href='/portfolio/zilart'>
                <Image src={`/Portfolio/zilart/1.webp`} alt="Резиденция Изумруд" width={1000} height={1000}/>
                <h4>Зиларт</h4>
                  <span>Комфорт и стиль</span>
              </Link>
        </div>
        <Link className="link-more" href='/portfolio'><span>Все проекты</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/></svg>
        </Link>
      </div>
    </>
  );
}
