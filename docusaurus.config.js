// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nevermined Documentation',
  tagline: 'The digital ecosystems builder',
  url: 'https://docs.nevermined.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nevermined-io', // Usually your GitHub org/user name.
  projectName: 'nvm-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/nevermined-io/nvm-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/nevermined-io/nvm-docs/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nevermined Docs',
        logo: {
          alt: 'Nevermined Logo',
          src: 'img/nvm-logo.png',
        },
        items: [        
          {
            type: 'doc',
            docId: 'overview/what-is-nvm',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'architecture/overview',
            position: 'left',
            label: 'Architecture',
          },
          {
            type: 'doc',
            docId: 'integration',
            position: 'left',
            label: 'Integration',
          },          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nevermined-io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/GZju2qScKq',
            label: 'Discord',
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
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture',
              },
              {
                label: 'Integration',
                to: '/docs/integration',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GZju2qScKq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/nevermined-io',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/company/nevermined',
              },                           
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nevermined-io/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCaDKPgnEk4ekvQo2vO6FIBQ',
              },               
              {
                label: 'Email',
                href: 'mailto:info@nevermined.io',
              },              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nevermined AG.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
