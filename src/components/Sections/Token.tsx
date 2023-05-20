import {FC, memo} from 'react';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Image from 'next/image';

const Token: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Token} className="relative mt-20 px-5 lg:px-20">
      <h3 className="mb-20 text-center text-3xl font-bold text-[#242427] ">TOKENOMICS</h3>
      <div>
        <div className="flex flex-col items-center justify-center lg:mb-5">
          <h3 className="text-xl font-bold lg:inline-block lg:p-2">Total Supply:</h3>
          <p className="my-3 text-center text-xl italic ">1,000,000,000 POINKO</p>
        </div>
        <div className="flex flex-col items-center  justify-center lg:mb-5">
          <h3 className="mb-5 text-xl font-bold lg:inline-block  lg:p-2">Token Allocation:</h3>
          <div className=" flex flex-col items-center justify-between lg:flex-row">
            <Image alt="" src={img1} className="mx-5 mt-10" />
            <Image alt="" src={img2} className="mx-5 mt-10" />
            <Image alt="" src={img3} className="mx-5 mt-10" />
            <Image alt="" src={img4} className="mx-5 mt-10" />
            <Image alt="" src={img5} className="mx-5 mt-10" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mt-5 text-center text-xl  font-bold lg:w-100">Token Burning:</h3>
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
