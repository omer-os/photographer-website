import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__column">
          <a href="#" className="footer-logo">
            Follow me
          </a>
          <div className="footer__social">
            <a href="http://youtube.com/sadiqghazi" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <defs>
                  <lineargradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#D3205A"></stop>
                    <stop offset="100%" stopColor="#FF5A5A"></stop>
                  </lineargradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M43.33 0c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.653.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zm-5.367-6.029l4.098 1.949-4.098 1.955V8.048z"
                  transform="translate(-33)"
                ></path>
              </svg>
            </a>

            <a href="http://twiter.com/sadiqghazi" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
                <defs>
                  <lineargradient
                    id="a"
                    x1="100%"
                    x2="0%"
                    y1="16.979%"
                    y2="83.021%"
                  >
                    <stop offset="0%" stopColor="#65FFEB"></stop>
                    <stop offset="100%" stopColor="#27718A"></stop>
                  </lineargradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M86.66 3.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-2.995-1.296c-2.65 0-4.596 2.472-3.998 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.901 1.318 3.68 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
                  transform="translate(-66 -1)"
                ></path>
              </svg>
            </a>

            <a href="https://www.pinterest.com/sadiqghazi" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <defs>
                  <lineargradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#F6C683"></stop>
                    <stop offset="100%" stopColor="#DE3838"></stop>
                  </lineargradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M109.99 0c-5.522 0-10 4.477-10 10 0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10s-4.477-10-10-10z"
                  transform="translate(-100)"
                ></path>
              </svg>
            </a>

            <a href="http://instagram.com/sadiqghazi" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <defs>
                  <lineargradient id="a" x1="0%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFC593"></stop>
                    <stop offset="51.945%" stopColor="#BC7198"></stop>
                    <stop offset="100%" stopColor="#5A77FF"></stop>
                  </lineargradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M143.32 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802c-2.716 0-3.056.012-4.123.06-3.631.167-5.65 2.182-5.816 5.817-.05 1.067-.061 1.407-.061 4.123s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C146.377.01 146.036 0 143.32 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                  transform="translate(-133)"
                ></path>
              </svg>
            </a>
          </div>
          <nav className="footer__nav">
            <a href="index.html">Home</a>
            <a href="index.html#bottum">about me</a>
            <a href="gallery.html">gallery</a>
          </nav>
        </div>
        <div className="footer__column">
          <p className="copyright">
            © copyright Sadiq Ghazi | Powerd by{" "}
            <a
              href="https://github.com/omer-os"
            >
              Morris
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
