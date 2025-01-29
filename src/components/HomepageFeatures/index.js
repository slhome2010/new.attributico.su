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
import attributicoSvg from '/static/img/portfolio/attributico-main.svg'; // Путь к SVG
import styles from './styles.module.css';

// Данные для портфолио
const PortfolioItems = [
  {
    title: "Attribut&co",
    designer: "Comtronics",
    description: "Attribut&amp;co lets you to create, rename, delete attributes for your OpenCart-store. Attributes are represented as trees. Easy to edit using the Copy-Paste technology, or Drag-and-Drop...", // Заменить на актуальные данные
    link: `/doc/attributico.html`,
    Svg: attributicoSvg,
  },
  {
    title: "Attribut&co-view",
    designer: "Comtronics",
    description: 'Free version. This is only possible to view attributes. It does to make sure the module can run on your OpenCart store.', // Заменить на актуальные данные
    link: `/doc/attributico.html#free`,
    Svg: attributicoSvg,
  },
];

// Данные для фич
const FeatureList = [
  [
    {
      icon: <i className="fa fa-tree" />,
      title: 'Show as tree',
      description: 'It is a visual representation of attributes and attribute values in the form of a tree.',
    },
    {
      icon: <i className="fa fa-sort-numeric-asc" />,
      title: 'Drag-and-drop sorting',
      description: 'Now, the attributes and groups can be sorted by dragging the mouse.',
    },
    {
      icon: <i className="fa fa-pie-chart" />,
      title: 'Defragmentation',
      description: 'Defragment attributes and groups. Preparing the group for parsing.',
    },
  ],
  // Добавить остальные ряды фич аналогичным образом
];

function PortfolioItem({title, designer, description, link, Svg}) {
  return (
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h5 className="card-title mb-0">{title}</h5>
          <div className="mb-1 text-muted"><span>Designed by: {designer}</span></div>
          <p className="card-text mb-auto font-weight-light" style={{fontSize: '80%'}}>
            {description}
          </p>
          <a className="stretched-link" href={link} role="button">
          Learn more
          </a>
        </div>
        <Svg className={styles.portfolioSvg} height="256px" />
      </div>
    </div>
  );
}

function Feature({icon, title, description}) {
  return (
    <div className="col-sm shadow-sm mx-1">
      <div className="icon_feature">{icon}</div>
      <div className="wrap">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="container">
      {/* Секция портфолио */}
      <section id="portfolio" className="section mt-3">
        <h1 className="mb-3 text-center">Products</h1>
        <div className="row">
          {PortfolioItems.map((props, idx) => (
            <PortfolioItem key={idx} {...props} />
          ))}
        </div>
      </section>

      {/* Секция фич */}
      <section id="features" className="section">
        <h1 className="mb-3 text-center">Features</h1>
        {FeatureList.map((row, rowIdx) => (
          <div key={rowIdx} className="row feature_wrap">
            {row.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}