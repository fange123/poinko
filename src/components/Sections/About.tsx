import Image from 'next/image';
import {FC, memo} from 'react';
import about from '../../images/about.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section sectionId={SectionId.About} className="relative px-5">
      <h1 className="text-center text-3xl font-bold text-[#242427]">ABOUT</h1>
      <div className="mt-20 rounded-xl border-4 border-dashed border-white p-2 shadow-inner lg:flex lg:flex-row-reverse lg:items-center">
        <div className="lg:flex-1">
          <p className="mb-5 break-words text-center font-serif text-xl italic leading-8 text-[#333337] lg:mb-8">
            As a self-organizing memory coin, Poinko represents individual memories and emotional experiences. It serves
            as a vessel for the precious moments of your life, allowing you to treasure and share them by holding
            Poinko.
          </p>
          <p className="break-words text-center font-serif text-xl italic leading-8 text-[#333337]">
            Poinko is our one-of-a-kind currency. It carries the shared memories you have with the Little Yellow Chicken
            emoji pack, enabling you to engage in a vibrant and enjoyable community.
          </p>
        </div>

        <div className="mt-5 lg:flex-1">
          <Image alt="" src={about} className="lg:w-full" />
        </div>
      </div>

      <div>
        <div className="mt-20 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="border-b-2 border-neutral-100 px-6 py-10 text-3xl font-bold italic dark:border-neutral-600 dark:text-neutral-50">
            You can claim $Poinko now!
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-xl font-medium italic leading-tight text-neutral-800 dark:text-neutral-50">
              A total of 8,880,008,880,008.88 Poinko tokens are available for claim
            </h5>
            <p className="mb-4 text-base italic leading-10 text-neutral-600 dark:text-neutral-200">
              Please note that the claiming period starts from
              <strong className="text-[#FFDF2C]"> May 8th, 2023, 09:00 (UTC+0)</strong> and ends on
              <strong className="text-[#FFDF2C]"> May 15th, 2023, 09:00 (UTC+0)</strong>. Make sure to complete the
              claiming process within this timeframe. Any unclaimed Poinko tokens after the claiming period will be
              permanently removed from circulation.
            </p>
            <div className="relative mt-20">
              <div className="absolute -top-8 flex w-full justify-between">
                <span className="text-white">Received</span>
                <span className="text-white">1,000,000,000</span>
              </div>
              <div className="h-6 w-full rounded-full bg-white ">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#FFDF2C] to-[#FF742E]"></div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-neutral-100 px-6 py-10 dark:border-neutral-600 dark:text-neutral-50">
            <button className="group relative mb-2 mr-2 inline-flex w-1/2 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
              <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Claim Airdrop
              </span>
            </button>
          </div>
        </div>
        <p></p>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
