import {FC, memo} from 'react';
import wallet from '../../images/wallet.png';
import eth from '../../images/eth.png';
import uniswap from '../../images/uniswap.png';
import exchange from '../../images/exchange.png';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Image from 'next/image';

const Buy: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.Buy} className="relative mt-5 px-5 lg:px-20">
      <h3 className="mb-20 text-center text-3xl font-bold text-[#242427]">HOW TO BUY</h3>
      <div className="lg:flex lg:flex-col">
        <div className="mb-5 flex flex-col items-center rounded-lg border border-gray-200 bg-white py-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-64 lg:flex-row lg:p-5">
          <div className="flex items-center justify-center lg:h-44 lg:w-100">
            <Image
              className="h-auto w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg lg:h-auto lg:w-44"
              src={wallet}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal lg:ml-10 lg:flex-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a Wallet</h5>
            <p className=" mb-3 text-xl font-normal italic leading-8 text-[#fffffe] dark:text-gray-400">
              Download Metamask or your wallet of choice from the app store or google play store for free. For desktop
              users, download the google chrome extension by going to metamask.io.
            </p>
          </div>
        </div>
        <div className="mb-5 flex flex-col items-center rounded-lg border border-gray-200 bg-white py-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-64 lg:flex-row lg:p-5">
          <div className="flex items-center justify-center lg:h-44 lg:w-100">
            <Image
              className="lg:w-54 h-auto w-1/2  rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg lg:h-auto"
              src={eth}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal lg:ml-10 lg:flex-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get Some ETH</h5>
            <p className="mb-3 text-xl font-normal italic leading-8 text-[#fffffe] dark:text-gray-400">
              Have ETH in your wallet to switch to $Poinko. If you don’t have any ETH, you can buy directly on metamask,
              transfer from another wallet, or buy on another exchange and send it to your wallet.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center rounded-lg border border-gray-200 bg-white py-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-64 lg:flex-row lg:p-5">
          <div className="flex items-center justify-center lg:h-44 lg:w-100">
            <Image
              className="lg:w-54 h-auto w-24 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg lg:h-auto"
              src={uniswap}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal lg:ml-10 lg:flex-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Go to Uniswap</h5>
            <p className="mb-3 text-xl font-normal italic leading-8 text-[#fffffe] dark:text-gray-400">
              Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app.
              Connect your wallet. Paste the $LADYS token address into Uniswap, select Poinko, and confirm. When
              Metamask prompts you for a wallet signature, sign.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center rounded-lg border border-gray-200 bg-white py-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-64 lg:flex-row lg:p-5">
          <div className="flex items-center justify-center lg:h-44 lg:w-100">
            <Image
              className="lg:w-54 h-auto w-2/3  rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg lg:h-auto"
              src={exchange}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal lg:ml-10 lg:flex-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Switch ETH for $Poinko
            </h5>
            <p className="mb-3 text-xl font-normal italic leading-8 text-[#fffffe] dark:text-gray-400">
              Switch ETH for $Poinko. We have ZERO taxes so you don’t need to worry about buying with a specific
              slippage, although you may need to use slippage during times of market volatility.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
});

Buy.displayName = 'Buy';
export default Buy;
