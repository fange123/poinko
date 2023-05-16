import {FC, memo} from 'react';
import pie from '../../images/pie.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Image from 'next/image';
import publicImg from '../../images/public.png';
import privateImg from '../../images/private.png';

const Token: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Token} className="relative mt-20 px-5 lg:px-20">
      <h3 className="mb-20 text-center text-3xl font-bold text-[#242427] ">TOKENOMICS</h3>
      <div>
        <div className="lg:mb-5 lg:flex lg:items-center">
          <h3 className="text-xl font-bold lg:inline-block lg:w-100 lg:p-2">Total Supply:</h3>
          <p className="my-3 text-xl italic lg:flex-1">1,000,000,000 POINKO</p>
        </div>
        <div className="lg:mb-5 lg:flex lg:items-center">
          <h3 className="mb-5 text-xl font-bold lg:inline-block lg:w-100 lg:p-2">Token Allocation:</h3>
          <div className="lg:flex-1">
            <Image alt="" src={pie} className="w-full lg:w-2/3" />
          </div>
        </div>
        <div className="lg:mb-5 lg:flex lg:items-center">
          <h3 className=" mb-5 text-xl font-bold lg:w-100">Token Distribution:</h3>
          <ul className="divide flex flex-col divide-y rounded-lg bg-white shadow dark:bg-gray-800 lg:w-120">
            <li className="flex flex-row">
              <div className="flex flex-1 cursor-pointer select-none items-center p-4">
                <div className="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                  <Image alt="" src={publicImg} className="mx-auto h-10 w-10  object-cover " />
                </div>
                <div className="mr-16 flex-1 pl-1">
                  <div className="font-medium dark:text-white">Public Sale</div>
                  <div className="text-sm text-gray-600 dark:text-gray-200">250,000,000 POINKO</div>
                </div>
              </div>
            </li>
            <li className="flex flex-row">
              <div className="flex flex-1 cursor-pointer select-none items-center p-4">
                <div className="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                  <Image alt="" src={privateImg} className="mx-auto h-10 w-10  object-cover " />
                </div>
                <div className="mr-16 flex-1 pl-1">
                  <div className="font-medium dark:text-white">Private Sale</div>
                  <div className="text-sm text-gray-600 dark:text-gray-200">250,000,000 POINKO</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center">
          <h3 className="mt-5 text-xl  font-bold lg:w-100">Token Burning:</h3>
          <article className="prose mt-5 text-xl italic lg:prose-xl lg:flex-1">
            A portion of transaction fees generated within the Poinko ecosystem will be used to buy back and burn POINKO
            tokens, reducing the overall supply and potentially increasing the token's value
          </article>
        </div>
      </div>
    </Section>
  );
});

Token.displayName = 'Token';
export default Token;
