import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 sm:py-6 bg-black border-t">
      <section className="mx-auto">
        <div className="md:flex md:justify-between md:container px-4 sm:px-6 md:pt-16 p-0 flex-row md:flex-col md:gap-[15px] gap-[10px]">
          <div className="mb-6 md:mb-0">
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
              GalaxyCorp
            </span>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blogs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/about/#our-story" className="hover:underline">
                    Success Stories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Case Studies
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Whitepapers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/faqs" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Space Guides
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/support" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Get Started
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/pricing" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/use-cases/hiring-solutions"
                    className="hover:underline"
                  >
                    Hiring Solutions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/use-cases/funded-startups"
                    className="hover:underline"
                  >
                    Funded Startups
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/login" className="hover:underline">
                    Free Trial
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/support" className="hover:underline">
                    Contact Support
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Request Demo
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Trust
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/terms" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/terms" className="hover:underline">
                    CCPA Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="mx-auto md:container px-4 sm:px-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2024{" "}
            <a href="https://usenextbase.com" className="hover:underline">
              GalaxyCorp Labs, LLP
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://twitter.com/GalaxyCorp"
              className="text-gray-500 hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/GalaxyCorp/"
              className="text-gray-500 hover:text-white"
            >
              <svg
                className="w-7 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02298C9.92258 7.46774 10.5869 7.9131 10.5869 8.97813V12H12V8.35713ZM16 12V8.21C16 7.43253 16.4672 6.9577 17.1165 6.9577C17.6489 6.9577 18.04 7.3199 18.04 7.69851C18.04 8.03721 17.8161 8.27425 17.5477 8.35599C17.6359 8.44263 17.7374 8.57925 17.8089 8.74656C17.8839 8.91851 17.966 9.13914 18.0468 9.28113C18.1304 9.45964 18.2195 9.69023 18.2876 9.89364C18.3535 10.0867 18.4225 10.2483 18.4618 10.4228C18.5074 10.6017 18.5467 10.8047 18.5736 11.0161L18.5837 11.1586V12H16ZM17.16 13V12.0215L17.1093 12C17.0119 12 16.9239 12.0081 16.8349 12.0242L16.7229 12.0489L16.6461 12.1158C16.5283 12.2161 16.5242 12.3475 16.6426 12.4552C16.7819 12.5849 16.9226 12.56 17.048 12.4351C17.1743 12.3107 17.3028 12.2125 17.4662 12.1632L17.16 13ZM20 13H18V12H20V13Z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/GalaxyCorp"
              className="text-gray-500 hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3.047 4.578C3.312 4.315 3.672 4.179 4.035 4.205L16.991 4.205C17.355 4.179 17.715 4.314 17.98 4.578C18.243 4.842 18.373 5.203 18.348 5.567L18.348 5.922L18.348 18.079L18.348 18.434C18.373 18.798 18.243 19.16 17.98 19.424C17.715 19.687 17.355 19.823 16.991 19.798L4.035 19.798C3.672 19.823 3.312 19.687 3.047 19.424C2.784 19.16 2.654 18.798 2.679 18.434L2.679 18.079L2.679 5.922L2.679 5.567C2.654 5.203 2.784 4.842 3.047 4.578Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
