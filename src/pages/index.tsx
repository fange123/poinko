import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';
import bg from '../images/bg.png';
import Image from 'next/image';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

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
        <Hero />
        <Hero />
        <Hero />
      </div>
    </Page>
  );
});

export default Home;
