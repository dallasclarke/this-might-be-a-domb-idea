

const pTag = document.querySelector('p');
pTag.style.color = '#add8e6';
pTag.textContent = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const heading = document.querySelector('h1');
heading.style.fontSize = '5em';

const item13 = document.querySelector('#item-13');
item13.style.opacity = '0.5'

const item3 = document.querySelector('#item-3');
item3.textContent = 'I say, Hi!';

const image = document.querySelector('img');
image.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
image.style.height = '300px';

const item16 = document.createElement('li');
item16.class = 'item';
item16.id = 'item-16';
item16.innerText = "Won't get fooled again";


const ul = document.querySelector('ul');
ul.appendChild(item16);
