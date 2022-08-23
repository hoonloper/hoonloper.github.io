module.exports = {
  title: `hoonloper.com`,
  description: `Hoonloper의 발자취 기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://hoonloper.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정용훈`,
    bio: {
      role: `Back-End 개발자`,
      description: ['소통을 중시하는', '새로운 도전을 즐기는', '성장에 목말라있는'],
      thumbnail: 'me.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hoonloper`,
      linkedIn: ``,
      email: `yonghoonj98@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          // demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.07 ~',
        activity: '(주)ACG Back-End 개발자',
        links: {
          github: 'https://github.com/hoonloper',
          post: '',
          // demo: 'https://hoonloper.github.io',
        },
      },
      {
        date: '2021.12 ~ 2022.09',
        activity: 'SW 개발 동아리 Modern-Agile Team 3기 회장',
        links: {
          post: '/modern-agile-team',
          github: 'https://github.com/modern-agile-team',
          // demo: '',
        },
      },
      {
        date: '2020.12 ~ 2022.02',
        activity: '인덕대학교 36대 대의원회 의장',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: '',
          // demo: '',
        },
      },
      {
        date: '2017.03 ~ 2022.02',
        activity: '인덕대학교 정보통신공학과 학생회',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2019.09 ~ 2020.03',
        activity: '육군 제 53사단 전문하사 임관 및 전역',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: '',
        },
      },
      {
        date: '2018.01 ~ 2019.09',
        activity: '육군 제 53사단 병장 만기 전역',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Mohae(모두의 해결사) - 재능 나눔 플랫폼',
        description:
          "SW 개발에 '개'자도 모르는 학생들이 열정으로 모여 피워낸 재능 나눔 플랫폼입니다. 개발에 입문해 많은 도약을 이룰 수 있게 밑바탕이 되어준 소중한 프로젝트입니다 :)",
        techStack: ['Node', 'Nest', 'TypeORM', 'MariaDB'],
        thumbnailUrl: 'mohae.png',
        links: {
          post: '',
          github: 'https://github.com/modern-agile-team/mohae-back',
          demo: '',
        },
      },
    ],
  },
};
