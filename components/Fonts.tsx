const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Merriweather:400';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const merriweather = new FontFaceObserver('Merriweather');

  merriweather.load().then(() => {
    document.documentElement.classList.add('Merriweather');
  });
};

export default Fonts;
