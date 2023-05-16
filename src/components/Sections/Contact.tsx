import {FC, memo} from 'react';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import logo from '../../images/pionko.png';
import Image from 'next/image';
import icon1 from '../../images/foot1.png';
import icon2 from '../../images/foot2.png';
import icon3 from '../../images/foot3.png';
import icon4 from '../../images/foot4.png';
import Link from 'next/link';

const Contact: FC = memo(() => {
  return (
    <Section noPadding className="relative bg-neutral-800" sectionId={SectionId.Contact}>
      <footer className="rounded-lg bg-white shadow dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <a href="https://flowbite.com/" className="mb-4 flex items-center sm:mb-0">
                <Image src={logo} className="mr-3 w-36" alt="Poinko Logo" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Poinko</span>
              </a>
              <p className="mb-15 mt-5 text-lg italic leading-8  text-gray-500 dark:text-gray-400 lg:w-1/2">
                If you have any questions, suggestions, or collaboration opportunities regarding Poinko, we would be
                delighted to hear from you and engage in a conversation.
              </p>
              <p className="mb-15 mt-5 text-lg italic leading-8  text-gray-500 dark:text-gray-400 lg:w-1/2">
                We welcome you to join our social networks.
              </p>
              <div className="my-5 flex justify-center lg:justify-start">
                <Image src={icon1} className="mr-3 w-14" alt="" />
                <Image src={icon2} className="mr-3 w-14" alt="" />
                <Image src={icon3} className="mr-3 w-14" alt="" />
                <Image src={icon4} className="mr-3 w-14" alt="" />
              </div>
            </div>
            <ul className="mb-6 mt-5 flex  flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
              <li>
                <a href="#home" className="mr-4 text-lg hover:underline md:mr-6">
                  Home
                </a>
              </li>
              <li>
                <Link href="#about" className="mr-4 text-lg hover:underline md:mr-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="#buy" className="mr-4 text-lg hover:underline md:mr-6">
                  Buy
                </Link>
              </li>
              <li>
                <Link href="#token" className="mr-4 text-lg hover:underline md:mr-6">
                  Token
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="mr-4 text-lg hover:underline md:mr-6">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-lg hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-center text-xl italic leading-8  text-gray-500 dark:text-gray-400">
            Thank you for your interest and support in Poinko!
          </p>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="block text-center text-sm text-gray-500 dark:text-gray-400">
            © 2023
            <a href="https://Poinko.com/" className="hover:underline">
              Poinko™
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </footer>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
