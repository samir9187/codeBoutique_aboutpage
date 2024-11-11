import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-galaxy dark:bg-galaxy text-galaxy dark:text-lightText border-t border-lightText dark:border-galaxy">
      <div className=" text-lightText max-w-screen-xl mx-auto text-center dark:text-darkText ">
        <p>© 2024 GalaxyCorp. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="/privacy"
            className="text-lightText dark:text-darkText  transition duration-300 mx-3"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-lightText dark:text-darkText  transition duration-300 mx-3"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
