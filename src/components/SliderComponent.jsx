import { useTranslation } from 'react-i18next';
import '../css/SliderComponent.css';

const SliderComponent = () => {
    const { t} = useTranslation();
  return (
    <div className='card-container'>
        <article className='card-1'>
            <div className='card-image'>
                <img src='/OldPortfolio.png' alt='Old portfolio website' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project1.title')}</h1>
                <p>{t('projects.project1.description')}</p>
            </div>
        </article>
        <article className='card-2'>
            <div className='card-image'>
                <img src='/EvangelionWiki.png' alt='Evangelion Wiki' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project2.title')}</h1>
                <p>{t('projects.project2.description')}</p>
            </div>
        </article>
        <article className='card-3'>
            <div className='card-image'>
                <img src='/ProgCompUDP.png' alt='Programación Competitiva UDP' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project3.title')}</h1>
                <p>{t('projects.project3.description')}</p>
            </div>
        </article>
        <article className='card-4'>
            <div className='card-image'>
                <img src='/RepoUDP.png' alt='Repositorio UDP' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project4.title')}</h1>
                <p>{t('projects.project4.description')}</p>
            </div>
        </article>
        <article className='card-5'>
            <div className='card-image'>
                <img src='/SimplePortfolio.png' alt='project' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project5.title')}</h1>
                <p>{t('projects.project5.description')}</p>
            </div>
        </article>
        <article className='card-6'>
            <div className='card-image'>
                <img src='https://fakeimg.pl/480x270' alt='project' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project6.title')}</h1>
                <p>{t('projects.project6.description')}</p>
            </div>
        </article>
        <article className='card-7'>
            <div className='card-image'>
                <img src='https://fakeimg.pl/480x270' alt='project' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project7.title')}</h1>
                <p>{t('projects.project7.description')}</p>
            </div>
        </article>
        <article className='card-8'>
            <div className='card-image'>
                <img src='https://fakeimg.pl/480x270' alt='project' />
            </div>
            <div className='card-content'>
                <h1>{t('projects.project8.title')}</h1>
                <p>{t('projects.project8.description')}</p>
            </div>
        </article>
        
    </div>
  );
};

export default SliderComponent;
