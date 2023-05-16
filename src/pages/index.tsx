import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Buy from '../components/Sections/Buy';
import Token from '../components/Sections/Token';
import RoadMap from '../components/Sections/Roadmap';
import Contact from '../components/Sections/Contact';
import {homePageMeta} from '../data/data';
import bg from '../images/bg.png';
import Image from 'next/image';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});
const FootFixed = dynamic(() => import('../components/Sections/FootFixed'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    //@ts-ignore
    <Page description={description} title={title}>
      {/* @ts-ignore */}
      <Header />
      <div className="fixed h-full w-full overflow-y-auto bg-white">
        <Image alt="bg" className="fixed z-0 h-full w-full bg-cover bg-bottom bg-no-repeat" priority src={bg} />
        <Hero />
        <About />
        <Buy />
        <Token />
        <RoadMap />
        <Contact />
      </div>
      {/* @ts-ignore */}
      <FootFixed />
    </Page>
  );
});

export default Home;
