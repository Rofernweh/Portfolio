// src/App.js
import React from "react";
import Header from "./components/header.jsx";
import { useTranslation } from "react-i18next";
import "./App.css";
import Timeline from "./components/Timeline";
import SliderComponent from "./components/SliderComponent";
function App() {
  const { t } = useTranslation(); // Destructure t from useTranslation

  return (
    <div className="App">
      <Header />
      <section id="home" className="home-section">
        <h1 className="home-title">
          {t("greeting")} <span className="name">Rodrigo Rocuant</span>
        </h1>
      </section>
      <section id="about" className="about-section">
        <h1 className="about-title">{t("about.title")}</h1>
        <div className="about-me">
          <p>
            {t("about.me.text")}{" "}
            <span className="chilean_ch">{t("about.me.ch")}</span>
            <span className="chilean_ile">{t("about.me.ile")}</span>
            <span className="chilean_an">{t("about.me.an")}</span>{" "}
            {t("about.me.text2")}{" "}
            <span className="university">{t("about.me.institution")}</span>
          </p>
          <p>{t("about.me.programmingJourney")}</p>
          <p>
            {t("about.me.passionForElectronics")}
            <span className="arduino">{t("about.me.electronics1")}</span>
            <span className="raspberrypi">{t("about.me.electronics2")}</span>
            <span>{t("about.me.electronics3")}</span>
          </p>
          <p>{t("about.me.mindset")}</p>
        </div>
      </section>
      <section id="timeline" className="timeline-section">
        <Timeline />
      </section>
      <section id="projects" className="projects-section">
        <h1 className="projects-title">{t("projects.title")}</h1>
        <SliderComponent />
      </section>
      <section id="contact" className="contact-section">
        <h1 className="contact-title">{t("contact.title")}</h1>
        <form action="mailto:rodrigo.rocuant@ieee.org" method="post" encType="text/plain">
          <input type="text" name="name" placeholder={t("contact.name")} />
          <input type="email" name="email" placeholder={t("contact.email")} />
          <textarea name="message" placeholder={t("contact.message")}></textarea>
          <button type="submit">{t("contact.send")}</button>
        </form>
      </section>
    </div>
  );
}

export default App;
