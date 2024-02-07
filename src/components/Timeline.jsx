
import { useTranslation } from 'react-i18next';
import '../css/Timeline.css'; // Assuming you have a separate CSS file

const Timeline = () => {
    
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <div className="timeline">
        <ul>
          <li>
            <div className="timeline-content">
              <h3 className="date">{t('timeline.graduation.date')}</h3>
              <h1>{t("timeline.graduation.event")}</h1>
              <p>{t("timeline.graduation.description")} <span className='awards'>{t("timeline.graduation.award1")}</span> <span>{t("timeline.graduation.connector")}</span> <span className='awards'>{t("timeline.graduation.award2")}</span></p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">{t("timeline.university.date")}</h3>
              <h1>{t("timeline.university.event")}</h1>
              <p>{t("timeline.university.description")} <span className='paes'>{t("timeline.university.paes")}</span><span>{t("timeline.university.description2")}</span></p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3 className="date">{t("timeline.freelance.date")}</h3>
              <h1>{t("timeline.freelance.event")}</h1>
              <p>{t("timeline.freelance.description")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
