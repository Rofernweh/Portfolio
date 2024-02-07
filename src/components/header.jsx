import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    setIsLangMenuOpen(false);
  };

  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><a className='about-link' href='#about'>{t('about.nav')}</a></li>
          <li><a className='projects-link' href='#projects'>{t('projects.title')}</a></li>
          <li><a className='contact-link' href='#contact'>{t('contact.title')}</a></li>
          
        </ul>
      </nav>
      <div className="language-selector">
        <button
          className="lang-btn"
          onClick={toggleLangMenu}
          aria-expanded={isLangMenuOpen}
          aria-haspopup="true"
        >
          {i18n.language === 'en'
            ? 'English'
            : i18n.language === 'es'
            ? 'Español'
            : 'French'}
        </button>
        {isLangMenuOpen && (
          <div className="lang-menu">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('fr')}>French</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
