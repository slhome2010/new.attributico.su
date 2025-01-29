import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Обязательный импорт Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Для иконок
import {
  faTree,
  faSortNumericAsc,
  faPieChart,
  faPencil,
  faSearch,
  faEraser,
  faPaste,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import attributicoMain from '@site/static/img/portfolio/attributico-main.svg';
import styles from './styles.module.css';

const Homepage = ({ 
  entry_portfolio,
  entry_features,
  button_more,
  // ... остальные пропсы
}) => {
  // Данные для портфолио
  const portfolioItems = [
    {
      title: "Attribut&co",
      designer: "Comtronics",
      description: "Текст описания...",
      link: "/doc/attributico.html",
    },
    {
      title: "Attribut&co Viwer",
      designer: "Comtronics",
      description: "Текст описания...",
      link: "/doc/attributico_v.html",
    },
    // ... второй элемент
  ];

  // Данные для фич
  const features = [
    { icon: faTree, title: "Tree Structure", description: "..." },
    { icon: faSortNumericAsc, title: "Sorting", description: "..." },
    // ... остальные фичи
  ];

  return (
    <div className="container">
      {/* Секция портфолио */}
      <section id="portfolio" className="mt-3">
        <h1 className="mb-3 text-center">{entry_portfolio}</h1>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <h5 className="card-title mb-0">{item.title}</h5>
                  <div className="mb-1 text-muted">
                    <span>Designed by: {item.designer}</span>
                  </div>
                  <p className="card-text mb-auto font-weight-light" style={{ fontSize: '80%' }}>
                    {item.description}
                  </p>
                  <a href={item.link} className="stretched-link">
                    {button_more}
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img 
                   src={attributicoMain} 
                    alt={item.title} 
                    style={{ height: '256px', width: 'auto' }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция фич */}
      <section id="features">
        <h1 className="mb-3 text-center">{entry_features}</h1>
        <div className="row feature_wrap mb-4">
          {features.map((feature, index) => (
            <div key={index} className="col-sm mx-1 shadow-sm p-3">
              <div className="icon_feature text-center mb-3">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <div className="text-center">
                <h3>{feature.title}</h3>
                <p className="mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;