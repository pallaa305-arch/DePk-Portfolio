import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon w-10 h-10 flex items-center justify-center rounded-full bg-black-100 hover:bg-black-200 transition-colors"
            >
              {socialImg.name === "email" ? (
                <svg className="w-5 h-5 text-white-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ) : (
                <img src={socialImg.imgPath} alt={socialImg.name} className="w-5 h-5 object-contain" />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © 2023 DePk KaTaRia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
