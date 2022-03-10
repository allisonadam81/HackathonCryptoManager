const colors = [
  'Black',
  'Navy',
  'DarkBlue',
  'MediumBlue',
  'Blue',
  'DarkGreen',
  'Green',
  'Teal',
  'DarkCyan',
  'DeepSkyBlue',
  'DarkTurquoise',
  'MediumSpringGreen',
  'Lime',
  'SpringGreen',
  'Aqua',
  'Cyan',
  'MidnightBlue',
  'DodgerBlue',
  'LightSeaGreen',
  'ForestGreen',
  'SeaGreen',
  'DarkSlateGray',
  'LimeGreen',
  'MediumSeaGreen',
  'Turquoise',
  'RoyalBlue',
  'SteelBlue',
  'DarkSlateBlue',
  'MediumTurquoise',
  'Indigo',
  'DarkOliveGreen',
  'CadetBlue',
  'CornflowerBlue',
  'RebeccaPurple',
  'MediumAquaMarine',
  'DimGray',
  'SlateBlue',
  'OliveDrab',
  'SlateGray',
  'LightSlateGray',
  'MediumSlateBlue',
  'LawnGreen',
  'Chartreuse',
  'Aquamarine',
  'Maroon',
  'Purple',
  'Olive',
  'Gray',
  'SkyBlue',
  'LightSkyBlue',
  'BlueViolet',
  'DarkRed',
  'DarkMagenta',
  'SaddleBrown',
  'DarkSeaGreen',
  'LightGreen',
  'MediumPurple',
  'DarkViolet',
  'PaleGreen',
  'DarkOrchid',
  'YellowGreen',
  'Sienna',
  'Brown',
  'DarkGray',
  'LightBlue',
  'GreenYellow',
  'PaleTurquoise',
  'LightSteelBlue',
  'PowderBlue',
  'FireBrick',
  'DarkGoldenRod',
  'MediumOrchid',
  'RosyBrown',
  'DarkKhaki',
  'Silver',
  'MediumVioletRed',
  'IndianRed',
  'Peru',
  'Chocolate',
  'Tan',
  'LightGray',
  'Thistle',
  'Orchid',
  'GoldenRod',
  'PaleVioletRed',
  'Crimson',
  'Gainsboro',
  'Plum',
  'BurlyWood',
  'LightCyan',
  'Lavender',
  'DarkSalmon',
  'Violet',
  'PaleGoldenRod',
  'LightCoral',
  'Khaki',
  'AliceBlue',
  'HoneyDew',
  'Azure',
  'SandyBrown',
  'Wheat',
  'Beige',
  'WhiteSmoke',
  'MintCream',
  'GhostWhite',
  'Salmon',
  'AntiqueWhite',
  'Linen',
  'LightGoldenRodYellow',
  'OldLace',
  'Red',
  'Fuchsia',
  'Magenta',
  'DeepPink',
  'OrangeRed',
  'Tomato',
  'HotPink',
  'Coral',
  'DarkOrange',
  'LightSalmon',
  'Orange',
  'LightPink',
  'Pink',
  'Gold',
  'PeachPuff',
  'NavajoWhite',
  'Moccasin',
  'Bisque',
  'MistyRose',
  'BlanchedAlmond',
  'PapayaWhip',
  'LavenderBlush',
  'SeaShell',
  'Cornsilk',
  'LemonChiffon',
  'FloralWhite',
  'Snow',
  'Yellow',
  'LightYellow',
  'Ivory',
  'White',
];


const body = document.querySelector('body');
const button = document.createElement('button');
button.setAttribute('id', 'btn');
button.innerText = 'Click here to upgrade your life';

// let random = Math.round(Math.random()*130)

button.addEventListener('click', () => {
window.alert('Are you sure you can handle it??!!');
window.alert('You better dance bitch!');
  setInterval(() => {
    const secondary = document.querySelector('#secondary');
    const primary = document.querySelector('#primary');
    random = Math.round(Math.random()*140);
    primary.style.backgroundColor = `${colors[random]}`;
    secondary.style.backgroundColor = `${colors[Math.round(random / 2)]}`;
  }, 100);
});

body.appendChild(button);


/*
an intuitive crypto finance tracker that tells you exactly
how much your favorite 3 crypto currencies have changed over the last day.

MVP -
  - Allow users to choose and display their 3 favorite currencies in an active sidebar.
  - Has to connect with the Binance API to recieve daily monetary values on your chosen crypto currencies and display.
  - It has to update those values every 15 minutes.

Stretch features -
  - Provide a line graph that shows the change of each crypto over the last hour, day, or week.
  - Allow users to input how much they currently own to calculate P/L throughout the day.
  - Dark mode.
*/