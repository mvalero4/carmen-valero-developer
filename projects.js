const projects = [
  {
    id: 0,
    url: 'https://carmentraining.netlify.app/',
    title: 'Carmentraining',
    description: 'A single website for a personal trainer Carmentraining',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/carmentraining-white.jpg',
    imageModal: './assets/carmentraining.jpg',
    client: 'Carmentraining',
    date: 'July 2022',
    projectType: 'Website',
  },
  
  {
    id: 1,
    url: 'https://text-to-speech-carmen.netlify.app/',
    title: 'Text to Speech',
    description: 'A website to convert text to speech',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/text-synth-white.jpg',
    imageModal: './assets/text-synth.jpg',
    client: 'Public',
    date: 'August 2022',
    projectType: 'Website',
  },
  
  {
    id: 2,
    url: 'https://calculator-carmen.netlify.app/',
    title: 'Calculator',
    description: 'Calculator website',
    list: ['Html', 'Css', 'Javascript', 'React'].join(' '),
    image: './assets/calculator-white.jpg',
    imageModal: './assets/calculator.jpg',
    client: 'Public',
    date: 'July 2022',
    projectType: 'Classic tool',
  },
  
  {
    id: 3,
    url: 'https://3-en-raya-carmen.netlify.app/',
    title: 'Play "3 en raya" ',
    description: 'A simple game to pass the time',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/3-en-raya-white.jpg',
    imageModal: './assets/3-en-raya.jpg',
    client: 'Public',
    date: 'June 2022',
    projectType: 'A simple game to pass the time',
  },
  
  {
    id: 4,
    url: 'https://weather-current-app-react.netlify.app/',
    title: 'Weather Current App',
    description: 'Weather Current App with React',
    list: ['Html', 'Css', 'Javascript', 'React'].join(' '),
    image: './assets/weather-white.jpg',
    imageModal: './assets/weather.jpg',
    client: 'Public',
    date: 'August 2022',
    projectType: 'Weather Current App',
  },

  {
    id: 5,
    url: 'https://convert-audio-to-text.netlify.app/',
    title: 'Convert Audio To Text',
    description: 'Convert audio to text and Download file',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/convert-audio-to-text-white.jpg',
    imageModal: './assets/convert-audio-to-text.jpg',
    client: 'Public',
    date: 'July 2022',
    projectType: 'A simple website',
  },

  {
    id: 6,
    url: 'https://piedra-papel-tijera-app.netlify.app/',
    title: 'Play rock, paper or scissors',
    description: 'Traditional game: Rock, paper, scissors',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/piedra-papel-tijera-white.jpg',
    imageModal: './assets/piedra-papel-tijera.jpg',
    client: 'Public',
    date: 'May 2022',
    projectType: 'Game',
  },

  {
    id: 7,
    url: 'https://movies-app-carmenfrontdev.netlify.app/',
    title: 'Movies App',
    description: 'Application to watch popular movies and descriptions of these movies, view by category and save your favorites.',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/movies-white.jpg',
    imageModal: './assets/movies.jpg',
    client: 'Public',
    date: 'September 2022',
    projectType: 'App',
  },

  {
    id: 8,
    url: 'https://calculator-without-react.netlify.app/',
    title: 'Calculator',
    description: 'Calculator website',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/calculator-sin-react-white.jpg',
    imageModal: './assets/calculator-sin-react.jpg',
    client: 'Public',
    date: 'May 2022',
    projectType: 'App',
  },

  {
    id: 9,
    url: 'https://juego-del-ahorcado-carmenfrontdev.netlify.app/',
    title: 'Hanged',
    description: 'Classic game The hanged',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/hanged-white.jpg',
    imageModal: './assets/hanged.jpg',
    client: 'Public',
    date: 'Oct 2022',
    projectType: 'Game',
  },

  {
    id: 10,
    url: 'https://maquetacion-con-tailwind.netlify.app/',
    title: 'Traveling...',
    description: 'Website with Tailwind 3.0',
    list: ['Html', 'Tailwind', 'Javascript'].join(' '),
    image: './assets/viajando-white.jpg',
    imageModal: './assets/viajando.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Page',
  },

  {
    id: 11,
    url: 'https://lista-de-tareas-carmenfrontdev.netlify.app/',
    title: "To do's",
    description: 'Add your pending tasks, mark the finished and eliminate the one you want',
    list: ['Html', 'Css', 'Javascript', 'React'].join(' '),
    image: './assets/tareas-white.jpg',
    imageModal: './assets/tareas.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Website',
  },

  {
    id: 12,
    url: 'https://decodifica-la-palabra.netlify.app/',
    title: 'Decode words',
    description: 'Messy words',
    list: ['Html', 'Sass', 'Javascript'].join(' '),
    image: './assets/decodificar-white.jpg',
    imageModal: './assets/decodificar.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Game',
  },

  {
    id: 13,
    url: 'https://juego-de-memoria-imagenes.netlify.app/',
    title: 'Memory game',
    description: 'Find the pair of images',
    list: ['Html', 'Sass', 'Javascript'].join(' '),
    image: './assets/memoria-imagenes-white.jpg',
    imageModal: './assets/memoria-imagenes.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Game',
  },

  {
    id: 14,
    url: 'https://adivina-la-bandera.netlify.app/',
    title: 'Guess the flag',
    description: 'Guess which country the flag belongs to',
    list: ['Html', 'Sass', 'Javascript'].join(' '),
    image: './assets/adivina-bandera-white.jpg',
    imageModal: './assets/adivina-bandera.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Game',
  },

  {
    id: 15,
    url: 'https://platzifood-carmenfrontdev.netlify.app/',
    title: 'PlatziFood',
    description: 'Food Website',
    list: ['Html', 'Tailwind', 'AlpineJs'].join(' '),
    image: './assets/platzifood-white.jpg',
    imageModal: './assets/platzifood.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Website',
  },

  {
    id: 16,
    url: 'https://homesmart-carmenfrontdev.netlify.app/',
    title: 'HomeSmart',
    description: 'Furniture Shop Website with Tailwind',
    list: ['Html', 'Tailwind'].join(' '),
    image: './assets/homesmart-white.jpg',
    imageModal: './assets/homesmart.jpg',
    client: 'Public',
    date: 'Nov 2022',
    projectType: 'Website',
  },

  {
    id: 17,
    url: 'https://platzi-conf-carmenfrontdev.netlify.app/',
    title: 'PlatziConf',
    description: 'Website with Bootstrap',
    list: ['Html', 'Css', 'Javascript', 'Bootstrap'].join(' '),
    image: './assets/platziconf-white.jpg',
    imageModal: './assets/platziconf.jpg',
    client: 'Public',
    date: 'Dic 2022',
    projectType: 'Website',
  },

  {
    id: 18,
    url: 'https://design-and-development.netlify.app/',
    title: 'Desgin | Web Dvelopment',
    description: 'Company Design and web development website',
    list: ['Html', 'Css', 'Javascript', 'Bootstrap'].join(' '),
    image: './assets/diseño-desarrollo-white.jpg',
    imageModal: './assets/diseño-desarrollo.jpg',
    client: 'Public',
    date: 'Dec 2022',
    projectType: 'Website',
  },

  {
    id: 19,
    url: 'https://automotive-carmenfrontdev.netlify.app/',
    title: 'Automotive',
    description: 'Autos website',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/automotive-white.jpg',
    imageModal: './assets/automotive.jpg',
    client: 'Public',
    date: 'Jan 2023',
    projectType: 'Website',
  },

  {
    id: 20,
    url: 'https://rickandmorty-carmenfrontdev.netlify.app/',
    title: 'Rick and Morty',
    description: 'Web with API REST',
    list: ['Html', 'Css', 'Javascript'].join(' '),
    image: './assets/rickandmorty-white.jpg',
    imageModal: './assets/rickandmorty.jpg',
    client: 'Public',
    date: 'Jan 2023',
    projectType: 'Web',
  },
];