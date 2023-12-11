// gitprofile.config.js

const config = {
  github: {
    username: 'bjorkgard', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['.github'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'nathanael-björkgård-15a83799',
    twitter: 'bjorkgard',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'hbszpkp',
    dev: 'natanael_bjorkgard_3f516c',
    stackoverflow: '17180397/nathanael-björkgård', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nathanael.bjorkgard@billes.se',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'PHP',
    'Laravel',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Vue.js',
    'Node.js',
    'Electron.js',
    'MySQL',
    'MongoDB',
    'NeDB',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Billes Tryckeri ab',
      position: 'Systemutvecklare',
      from: 'November 2013',
      to: 'Present',
      companyLink: 'https://billes.se',
    },
    {
      company: 'Contact Tryck & Reklam',
      position: 'Systemutvecklare',
      from: 'December 2012',
      to: 'November 2013',
      companyLink: 'https://contacttryck.se',
    },
    {
      company: 'Fototext AB',
      position: 'Programmerare',
      from: 'June 1988',
      to: 'December 2012',
      companyLink: 'https://fototext.se',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  /* education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],*/

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'natanael_bjorkgard_3f516c', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3763658',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
