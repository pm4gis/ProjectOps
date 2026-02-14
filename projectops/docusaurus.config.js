// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProjectOps',
  tagline: 'From ideas to outcomes, without the gaps',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://projectops.pages.dev',
  baseUrl: '/',

  organizationName: 'pm4gis',
  projectName: 'ProjectOps',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/pm4gis/ProjectOps/tree/main/projectops/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/pm4gis/ProjectOps/tree/main/projectops/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ProjectOps',
        logo: {
          alt: 'ProjectOps',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/intro', label: 'Docs', position: 'left'},
          {to: '/docs/core-model/overview', label: 'Core model', position: 'left'},
          {to: '/docs/guides/getting-started', label: 'Guides', position: 'left'},
          {to: '/docs/templates/project-brief-template', label: 'Templates', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/pm4gis/ProjectOps',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ProjectOps',
            items: [
              {label: 'Docs', to: '/docs/intro'},
              {label: 'Core model', to: '/docs/core-model/overview'},
              {label: 'Guides', to: '/docs/guides/getting-started'},
              {label: 'Templates', to: '/docs/templates/project-brief-template'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/pm4gis/ProjectOps'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProjectOps.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
