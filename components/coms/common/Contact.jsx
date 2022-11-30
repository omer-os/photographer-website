import React from "react";

export default function Contact() {
  return (
    <div className="container mt-20 mx-auto sm:px-20">
      <div>
        <div className="relative max-w-xl p-8 mx-auto mb-8 text-purple-800 rounded-md shadow-2xl">
          <div className="items-center text-center xs:flex xs:text-left xs:space-x-10 !text-white">
            <img
              className="w-24 mx-auto mb-4 -mt-12 transform -translate-y-2 object-cover xs:mb-0 xs:mt-0 xs:mx-none h-24 rounded md:w-32"
              src="https://mosa-khudur.github.io/olla/img/sadiq123.jpg"
              alt="John Doe"
              height="122"
              width="116"
            />
            <div className="flex-1 leading-chillaxed">
              <div className="mb-4 text-sm">
                <strong className="block text-xl">sadiq ghazi</strong>
                Photographer
              </div>
              <ul>
                <li>
                  <svg
                    className="inline-block w-4 h-3 mr-3 -mt-1 opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                  <a
                    className="inline-block my-3 sm:my-1  xs:h-auto underline hover:no-underline"
                    href="http://instagram.com/sadiqghazi"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9647700080820"
                    className="inline-block my-3 sm:my-1  xs:h-auto underline hover:no-underline"
                  >
                    <svg
                      className="inline-block w-4 h-4 mr-3 opacity-40"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    +9647700080820
                  </a>
                </li>
                <li>
                  <svg
                    className="inline-block w-4 h-4 mr-3 opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    className="inline-block my-3 sm:my-1  xs:h-auto underline hover:no-underline"
                    href="mailto:sadiq_g@yahoo.com"
                  >
                    sadiq_g@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-green-600 "></div>
        </div>
      </div>
    </div>
  );
}
