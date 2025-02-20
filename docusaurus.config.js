// @ts-check
<<<<<<< HEAD
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'New Attributico',
  tagline: 'Dinosaurs are cool',
=======
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Attribut&co',
  tagline: 'Attributes - it is easy!',
>>>>>>> su_v0.1.10
  favicon: 'img/favicon.ico',
  url: 'https://slhome2010.github.io',
  baseUrl: '/new.attributico.su/',
<<<<<<< HEAD
  organizationName: 'slhome2010',
  projectName: 'new.attributico.su',
  trailingSlash: false,
  onBrokenLinks: 'warn', // Временно смените на warn для локализации ошибок
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'fr'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en-US' },
      ru: { label: 'Русский', direction: 'ltr', htmlLang: 'ru-RU' },
      fr: { label: 'Français', direction: 'ltr', htmlLang: 'fr-FR' },
    },
  },

  // Плагины объявляем здесь
  /* plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ], */

=======

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'slhome2010', // Usually your GitHub org/user name.
  projectName: 'new.attributico.su', // Usually your repo name.

  onBrokenLinks: 'warn',
  //onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      // comments: false,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  plugins: [[require.resolve('docusaurus-lunr-search'), {
    languages: ['en', 'ru'], // language codes
    highlightResult: true,
    indexBaseUrl: true,
    maxHits: 10,          // Пример других опций
    excludeRoutes: ['/blog']
    //includeRoutes: ['/docs/**'],
    //excludeTags: ['nav', 'footer'],
    /* fields: {
      title: { boost: 5 },
      content: { boost: 1 },
      keywords: { boost: 3 }
    } */
  }]],
>>>>>>> su_v0.1.10
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
<<<<<<< HEAD
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: 'docs',
          path: 'docs',
          lastVersion: undefined, // Убираем "current"
          versions: {
            "1.1.0": {
              label: "v1.1.0",
              path: "1.1.0",
            },
            "1.0.0": {
              label: "v1.0.0",
              path: "1.0.0",
            },
          },
          includeCurrentVersion: false, // Чтобы не создавалось "current"
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
=======
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/slhome2010/new.attributico.su/',
          // lastVersion: 'current',
          versions: {
            /*  current: {
               label: 'v1.0.0',
               path: '1.0.0',
             }, */
            /* "1.0.0": {
              label: "v1.0.0",
              //path: "1.0.0",
            }, */
            "3.2.8": {
              label: "v3.2.8",
              //path: "1.0.0",
            },
          },
          // includeCurrentVersion: false,
        },        
        blog: false,
>>>>>>> su_v0.1.10
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
<<<<<<< HEAD
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', // если нужны иконки
  ],
=======
>>>>>>> su_v0.1.10
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, // Убедитесь, что false
        respectPrefersColorScheme: true, // Автоматически учитывать системную тему
      },
      navbar: {
        title: 'Attribut&co',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-round.svg',
        },
        //style: 'dark', // Принудительно темный стиль навбара
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            //dropdownActiveClassDisabled: true,
          },
<<<<<<< HEAD
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            docsPluginId: 'default', // если используете несколько плагинов docs
          },
=======
>>>>>>> su_v0.1.10
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/slhome2010/new.attributico.su',
            //label: 'GitHub',
            className: 'header-github-link',
            'aria-label': 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Get',
            items: [
              {
                label: 'Full version',
                href: 'https://liveopencart.ru/opencart-moduli-shablony/moduli/filtryi/attribut-co-opencart-atributyi-eto-legko',
              },
              {
                label: 'Free version',
                href: 'https://liveopencart.ru/opencart-moduli-shablony/moduli/filtryi/attribut-coviewer-opencart-atributyi-eto-legko',
              },
            ],
          },
          /* {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          }, */
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
<<<<<<< HEAD
=======
              }, */
              {
                label: 'GitHub',
                href: 'https://github.com/slhome2010/new.attributico.su',
>>>>>>> su_v0.1.10
              },
            ],
          },
        ],
<<<<<<< HEAD
        copyright: `Copyright © ${new Date().getFullYear()}`,
=======
        copyright: `Copyright © ${new Date().getFullYear()} Comtronics, Built with Docusaurus.`,
>>>>>>> su_v0.1.10
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;