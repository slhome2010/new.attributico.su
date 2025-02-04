// @ts-check
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
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://slhome2010.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/new.attributico.su/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'slhome2010', // Usually your GitHub org/user name.
  projectName: 'new.attributico.su', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/slhome2010/new.attributico.su/',
          //lastVersion: 'current',
          versions: {
            /*  current: {
               label: 'v1.0.0',
               path: '1.0.0',
             }, */
            "1.0.0": {
              label: "v1.0.0",
              //path: "1.0.0",
            },
          },
          // includeCurrentVersion: false,
        },
        /* blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/slhome2010/new.attributico.su/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        }, */
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Attribut&co',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            //dropdownActiveClassDisabled: true,
          },
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
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          }, */
          {
            title: 'More',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'GitHub',
                href: 'https://github.com/slhome2010/new.attributico.su',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Comtronics, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
