import localFont from "next/font/local";
import "./globals.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Bootstrap from "../../components/Bootstrap/Bootstrap";
// import './catalog/CatalogPage.scss'
// import './portfolio/MainPort.scss'
import ModalForm from "../../components/ModalForm/ModalForm";
import Confidentiality from "../../components/Confidentiality/confidentiality";
import '../../components/ModalForm/ModalForm.scss'
import YandexMetrika from "../../components/YandexMetrika/YandexMEtrika";

export const metadata = {
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon/favicon-96x96.png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});
const montserratAlternates = localFont({
  src: [
    {
      path: './fonts/MontserratAlternates-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/MontserratAlternates-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

const Cormorant = localFont({
  src: [
    {
      path: './fonts/CormorantSC-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CormorantSC-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CormorantSC-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CormorantSC-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/CormorantSC-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${montserratAlternates.className} ${Cormorant.className}`}>
        <Bootstrap />
        <Header />
        {children}
        <Footer />
        <ModalForm />
        <Confidentiality />
        <YandexMetrika />
      </body>
    </html>
  );
}
