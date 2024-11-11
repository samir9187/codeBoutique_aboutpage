import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-lightGalaxy dark:bg-galaxy text-galaxy dark:text-lightText">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-xl dark:text-darkText">
          Feel free to reach out to us for inquiries or partnerships!
        </p>
        <a
          href="mailto:galaxycorp@mail.com"
          className="mt-8 inline-block bg-lightText text-galaxy py-2 px-6 rounded-md hover:bg-darkText  transition duration-300"
          aria-label="Send an email to contact@galaxycorp.com"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
