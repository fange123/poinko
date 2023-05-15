import {FC, memo} from 'react';
import logo from '../../images/pionko.png';
import icon1 from '../../images/1.webp';
import icon2 from '../../images/2.webp';
import icon3 from '../../images/3.webp';
import icon4 from '../../images/4.webp';
import icon5 from '../../images/5.webp';
import link1 from '../../images/c_1.webp';
import link2 from '../../images/c_2.webp';
import link3 from '../../images/c_3.webp';
import link4 from '../../images/c_4.webp';
import link5 from '../../images/c_5.webp';
import link6 from '../../images/c_6.webp';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Image from 'next/image';

const Hero: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative h-full w-full px-2 pt-20 lg:px-20">
        <div className="flex justify-center px-5">
          <div>
            <div className="flex flex-col items-center text-center">
              <Image alt="" src={logo} className="w-20" />
              <h2 className="text-xl font-bold">Poinko</h2>
              <p className="text-lg leading-10 text-[#242427]">Poinko knew this coin would come.</p>
              <p className=" break-all text-lg leading-10 text-[#242427] lg:w-1/2">
                Poinko is a new virtual currency whose name originates from the popular yellow chicken emoji. The
                creation of Poinko aims to provide a secure, fast, and convenient payment method to meet the growing
                digital payment needs of modern society.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap lg:justify-center">
              <Image alt="" src={icon1} className="mr-3 h-12 w-12" />
              <Image alt="" src={icon2} className="mr-3 h-12 w-12" />
              <Image alt="" src={icon3} className="mr-3 h-12 w-12" />
              <Image alt="" src={icon4} className="mr-3 h-12 w-12" />
              <Image alt="" src={icon5} className="h-12 w-12" />
            </div>

            <div className="mt-8 flex flex-wrap justify-between">
              <button
                type="button"
                className="mb-5 inline-flex w-9/20 items-center justify-between rounded-lg bg-gray-100 px-5 py-2 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500">
                <Image alt="" src={link1} className="h-8 w-8" />
                HUOBI
              </button>
              <button
                type="button"
                className="mb-5 inline-flex w-9/20 items-center  justify-between rounded-lg bg-gray-100 px-5 py-3 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500">
                <Image alt="" src={link2} className="h-8 w-8" />
                kukoin
              </button>
              <button
                type="button"
                className="mb-5 inline-flex w-9/20 items-center justify-between rounded-lg bg-gray-100 px-5 py-2 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500">
                <Image alt="" src={link3} className="h-8 w-8" />
                binance
              </button>
              <button
                type="button"
                className="mb-5 inline-flex w-9/20 items-center justify-between rounded-lg bg-gray-100 px-5 py-2 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500">
                <Image alt="" src={link4} className="h-8 w-8" />
                crypto
              </button>
              <button
                type="button"
                className="mb-5 inline-flex w-9/20 items-center justify-between rounded-lg bg-gray-100 px-5 py-2 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500">
                <Image alt="" src={link5} className="h-8 w-8" />
                bitget
              </button>
              <button
                type="button"
                className="mb-5 inline-flex w-9/20 items-center justify-between rounded-lg bg-gray-100 px-5 py-2 text-center text-lg font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-500">
                <Image alt="" src={link6} className="h-8 w-8" />
                mexc
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
