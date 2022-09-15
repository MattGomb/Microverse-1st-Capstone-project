const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))

/* dynamic HTML */

const artistcard = document.getElementById('artistsholder');
const featuredArtistsData = [
  {
    id: '1',
    formobile: 'shown',
    name: 'Tame Impala',
    img: './images/tame-impala.jpg',
    desc: 'Tame Impala is the psychedelic music project of Australian multi-instrumentalist Kevin Parker. In the recording studio, Parker writes, records, performs, and produces all of the projects music.',
  },
  {
    id: '2',
    formobile: 'shown',
    name: 'Dua Lipa',
    img: './images/dua-lipa.jpeg',
    desc: 'Our other British star Dua Lipa has recently shown who she is and there is no one who doesn’t know her. Number 1 hits, more and more fans and an ever-growing stage, there seems to be no stop on this pop princess.',
  },
  {
    id: '3',
    formobile: 'hidden',
    name: 'Arctic Monkeys',
    img: './images/arctic-monkeys.jpg',
    desc: 'The British indie rock band Arctic Monkeys has finally returned to the festival stages. In the United Kingdom, the band became the first independent-label band to debut at number one in the UK with their first five albums. They will make a great act of it so make sure you don’t miss them! ',
  },
  {
    id: '4',
    formobile: 'hidden',
    name: 'Calvin Harris',
    img: './images/calvin-harris.jpg',
    desc: 'Calvin Harris has made many hits with big names. Dua Lipa, Rag’n’Bone Man, Katy Perry, Ariana Grande and we could go on and on. His last hit was By Your Side with Tom Grannan in 2021.',
  },
  {
    id: '5',
    formobile: 'hidden',
    name: 'Kings of Leon',
    img: './images/kings-of-leon.jpg',
    desc: 'The 3 brothers of Kings of Leon have worked very hard the last few years. They have already released 7 albums. Their act will be amazing!',
  },
  {
    id: '6',
    formobile: 'hidden',
    name: 'Justin Bieber',
    img: './images/justin-bieber.jpg',
    desc: 'Justin Bieber will perform at Sziget 2022. This is quite unique, since Justin Bieber normally does tours and can hardly be found as an act at festivals. Have you never been able to get tickets for a JB tour? This is your chance to see him on Sziget.',
  },
];

featuredArtistsData.forEach((artistcard) => {
  const article = document.createElement('article');
  article.classList.add('artistcard');

  const img = document.createElement('img');
  img.classList.add('card-img');
  img.setAttribute('src', artistcard.img);
  img.setAttribute('alt', `${artistcard.name} picture`);
  article.appendChild(img);

  const div = document.createElement('div');
  div.classList.add('text');
  article.appendChild(div);

  const name = document.createElement('div');
  name.classList.add('card-title');
  name.textContent = artistcard.name;
  div.appendChild(name);

  const desc = document.createElement('p');
  desc.classList.add('card-body');
  desc.textContent = artistcard.desc;
  div.appendChild(desc);

  artistsholder.appendChild(article);
});