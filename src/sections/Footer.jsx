import { useState } from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="footer relative">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <button 
            onClick={() => setShowTerms(true)}
            className="text-white-50 hover:text-white transition-colors text-sm md:text-base text-left"
          >
            Terms & Conditions
          </button>
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
                <img src={socialImg.imgPath} alt={socialImg.name} className="w-5 h-5 object-contain" loading="lazy" />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm md:text-base">
            © 2023 DePk KaTaRia. All rights reserved.
          </p>
        </div>
      </div>

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          <div className="bg-black-200 border border-black-50 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative">
            <button 
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-white-50 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">Terms & Conditions</h3>
            <div className="text-white-50 text-sm md:text-base space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <p>Welcome to my portfolio website.</p>
              <p><strong>1. Introduction</strong><br/>This website serves as a digital portfolio demonstrating my work, projects, and skills as a software developer.</p>
              <p><strong>2. Intellectual Property</strong><br/>All projects, code snippets, and designs showcased on this website are either my original work, open-source contributions, or work done for clients (displayed with permission). You may not use, reproduce, or distribute any content from this site without explicit permission.</p>
              <p><strong>3. External Links</strong><br/>This portfolio contains links to external websites, GitHub repositories, and live project demos. I am not responsible for the content, privacy policies, or practices of any third-party sites.</p>
              <p><strong>4. Disclaimer</strong><br/>The information on this website is provided "as is" without any warranties. While I strive to keep the information up to date and correct, I make no representations or warranties of any kind regarding completeness or accuracy.</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowTerms(false)}
                className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-white-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
