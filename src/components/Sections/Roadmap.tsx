import {FC, memo} from 'react';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const RoadMap: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.RoadMap} className="relative mb-20 mt-20 px-5 lg:px-20 lg:pb-20">
      <h3 className="mb-10 text-center text-3xl font-bold text-[#242427]">ROADMAP</h3>
      <h4 className="text-center text-2xl italic text-[#242427] lg:mb-20">
        Our story has just begun, and you are welcome to join us.
      </h4>
      <div className="flex justify-center">
        <ol className="items-center sm:flex ">
          <li className="relative mb-6 mr-3 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFDF2C] ring-0 ring-white dark:ring-gray-900 sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
            </div>
            <div className="mt-5 rounded-md bg-white p-3 shadow-lg sm:pr-8">
              <h3 className="text-center text-xl font-semibold leading-10 text-gray-900">Phase 1</h3>
              <h4 className="text-center text-lg leading-7 text-gray-900"> Foundation and Launch </h4>
              <time className="my-2 block text-center text-base font-normal leading-none text-gray-900">(Q3 2023)</time>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Token Launch</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Platform Development</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Community Building</p>
            </div>
          </li>
          <li className="relative mb-6 mr-3 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFDF2C] ring-0 ring-white dark:ring-gray-900 sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
            </div>
            <div className="mt-5 rounded-md bg-white p-3 shadow-lg sm:pr-8">
              <h3 className="text-center text-xl font-semibold  leading-10 text-gray-900">Phase 2</h3>
              <h4 className="text-center text-lg leading-7 text-gray-900"> Platform Expansion</h4>
              <time className="my-2 block text-center text-base font-normal leading-none text-gray-900">
                (Q4 2023 - Q1 2024)
              </time>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Marketplace Enhancement</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Partnerships and Integrations</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - User Acquisition</p>
            </div>
          </li>
          <li className="relative mb-6 mr-3 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full  bg-[#FFDF2C] ring-0 ring-white dark:ring-gray-900 sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
            </div>
            <div className="mt-5 rounded-md bg-white p-3 shadow-lg sm:pr-8">
              <h3 className="text-center text-xl font-semibold leading-10 text-gray-900">Phase 3</h3>
              <h4 className="text-center text-lg leading-7 text-gray-900">Ecosystem Growth</h4>
              <time className="my-2 block text-center text-base font-normal leading-none text-gray-900">
                (Q2 2024 - Q3 2024)
              </time>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Decentralized Governance</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Staking and Rewards Program</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Developer Community</p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full  bg-[#FFDF2C] ring-0 ring-white dark:ring-gray-900 sm:ring-8"></div>
              <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
            </div>
            <div className="mt-5 rounded-md bg-white p-3 shadow-lg sm:pr-8">
              <h3 className="text-center text-xl font-semibold leading-10 text-gray-900">Phase 4</h3>
              <h4 className="text-center text-lg leading-7 text-gray-900"> Expansion and Adoption</h4>
              <time className="text-basefont-normal my-2 block text-center leading-none text-gray-900">
                (Q4 2024 onwards)
              </time>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Global Expansion</p>
              <p className="text-base font-normal italic leading-9 text-gray-900"> - Cross-chain Compatibility</p>
              <p className="text-base font-normal italic leading-9 text-gray-900">
                {' '}
                - Integration with External Platforms
              </p>
            </div>
          </li>
        </ol>
      </div>
    </Section>
  );
});

RoadMap.displayName = 'RoadMap';
export default RoadMap;
