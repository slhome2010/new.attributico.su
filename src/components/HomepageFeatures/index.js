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
import clsx from 'clsx';

const features = [
  { title: 'Tree Structure', icon: {faTree}, description: 'Description for tree structure.' },
  { title: 'Sorting', icon: 'fa-sort-numeric-asc', description: 'Description for sorting.' },
  { title: 'Defragmentation', icon: 'fa-pie-chart', description: 'Description for defragmentation.' },
  { title: 'Editing', icon: 'fa-pencil', description: 'Description for editing.' },
  { title: 'Search', icon: 'fa-search', description: 'Description for search.' },
  { title: 'Clear', icon: 'fa-eraser', description: 'Description for clearing data.' },
  { title: 'Drag & Drop', icon: 'fa fa-hand-pointer', description: 'Description for drag and drop.' },
  { title: 'Copy-Paste', icon: 'fa-paste', description: 'Description for copy-paste.' },
  { title: 'Duplicate', icon: 'fa-copy', description: 'Description for duplicating.' },
];

function Feature({ title, icon, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <i className={clsx('fa', icon, styles.featureIcon)}></i>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="container">
      <section className="section mt-3">
        <h1 className="mb-3 text-center">Portfolio</h1>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.card}>
              <h5>Attribut&co</h5>
              <p>Designed by: Comtronics</p>
              <p>Short description about Attribut&co.</p>
              <a href="/doc/attributico.html">More</a>
            </div>
              <object type="image/svg+xml" data="img/portfolio/attributico-main.svg" height="256px"></object>
          </div>
          <div className="col-md-6">
            <div className={styles.card}>
              <h5>Attribut&co-view</h5>
              <p>Designed by: Comtronics</p>
              <p>Short description about Attribut&co-view.</p>
              <a href="/doc/attributico.html">More</a>
            </div>
              <object type="image/svg+xml" data="img/portfolio/attributico-main.svg" height="256px"></object>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="mb-3 text-center">Features</h1>
        <div className="row">
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}