import { Movie } from '../types';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Love Actually',
    runtime: 135,
    imdbRating: 7.6,
    year: 2003,
    description:
      'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    director: 'Richard Curtis',
    stars: 'Hugh Grant, Martine McCutcheon, Liam Neeson, Laura Linney, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BNThkNjgxNGQtOTIxMy00ZTFmLWIwMDItYzE5YzM3ZDMzNDE3XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_UY209_CR3,0,140,209_AL_.jpg',
  },
  {
    id: '2',
    title: 'Home Alone',
    runtime: 103,
    imdbRating: 7.7,
    year: 1990,
    description:
      'An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas Eve.',
    director: 'Chris Columbus',
    stars: 'Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '3',
    title: "National Lampoon's Christmas Vacation",
    runtime: 97,
    imdbRating: 7.5,
    year: 1989,
    description:
      "The Griswold family's plans for a big family Christmas predictably turn into a big disaster.",
    director: 'Jeremiah S. Chechik',
    stars: "Chevy Chase, Beverly D'Angelo, Juliette Lewis, Johnny Galecki, ",
    image:
      'https://m.media-amazon.com/images/M/MV5BMGZkMWQ2MzMtYTkxYS00OThmLWI0ZTQtNmY0ZTkyY2E4MjliXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '4',
    title: 'Elf',
    runtime: 97,
    imdbRating: 7.1,
    year: 2003,
    description:
      "Raised as an oversized elf, Buddy travels from the North Pole to New York City to meet his biological father, Walter Hobbs, who doesn't know he exists and is in desperate need of some Christmas spirit.",
    director: 'Jon Favreau',
    stars: 'Will Ferrell, James Caan, Bob Newhart, Zooey Deschanel, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '5',
    title: 'How the Grinch Stole Christmas',
    runtime: 104,
    imdbRating: 6.3,
    year: 2000,
    description:
      'On the outskirts of Whoville lives a green, revenge-seeking Grinch who plans to ruin Christmas for all of the citizens of the town.',
    director: 'Ron Howard',
    stars: 'Jim Carrey, Taylor Momsen, Kelley, Jeffrey Tambor, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BNWNiNTczNzEtMjQyZC00MjFmLTkzMDMtODk4ZGMyZmE0N2E4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '6',
    title: 'The Grinch',
    runtime: 85,
    imdbRating: 6.4,
    year: 2018,
    description:
      'A grumpy Grinch plots to ruin Christmas for the village of Whoville.',
    director: 'Yarrow Cheney',
    stars:
      'Scott Mosier, Benedict Cumberbatch, Cameron Seely, Rashida Jones, Pharrell Williams, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '7',
    title: 'Die Hard',
    runtime: 132,
    imdbRating: 8.2,
    year: 1988,
    description:
      'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
    director: 'John McTiernan',
    stars: 'Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '8',
    title: 'Home Alone 2: Lost in New York',
    runtime: 120,
    imdbRating: 6.9,
    year: 1992,
    description:
      'One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.',
    director: 'Chris Columbus',
    stars: "Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O'Hara, ",
    image:
      'https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '9',
    title: 'The Polar Express',
    runtime: 100,
    imdbRating: 6.6,
    year: 2004,
    description:
      'On Christmas Eve, a young boy embarks on a magical adventure to the North Pole on the Polar Express, while learning about friendship, bravery, and the spirit of Christmas.',
    director: 'Robert Zemeckis',
    stars: 'Tom Hanks, Chris Coppola, Michael Jeter, Leslie Zemeckis, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTM1NTU0NTE4MV5BMl5BanBnXkFtZTcwMTQ0MjEzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '10',
    title: "It's a Wonderful Life",
    runtime: 130,
    imdbRating: 8.6,
    year: 1946,
    description:
      'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.',
    director: 'Frank Capra',
    stars: 'James Stewart, Donna Reed, Lionel Barrymore, Thomas Mitchell, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY209_CR2,0,140,209_AL_.jpg',
  },
  {
    id: '11',
    title: 'The Santa Clause',
    runtime: 97,
    imdbRating: 6.6,
    year: 1994,
    description:
      'When a man inadvertently makes Santa fall off his roof on Christmas Eve, he finds himself magically recruited to take his place.',
    director: 'John Pasquin',
    stars: 'Tim Allen, Judge Reinhold, Wendy Crewson, Eric Lloyd, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTZlNzk1MjItYjJlYy00MTAxLWJkNjEtZmNiNmVlNjQ4NDE5XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_UX140_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '12',
    title: 'White Christmas',
    runtime: 120,
    imdbRating: 7.6,
    year: 1954,
    description:
      'A successful song-and-dance team become romantically involved with a sister act and team up to save the failing Vermont inn of their former commanding general.',
    director: 'Michael Curtiz',
    stars: 'Bing Crosby, Danny Kaye, Rosemary Clooney, Vera-Ellen, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjI0ZTk0ZjQtZTMzOS00NDdmLTk0YzUtZTQ4NGRkNWFhZTkxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX140_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '13',
    title: 'Scrooged',
    runtime: 101,
    imdbRating: 6.9,
    year: 1988,
    description:
      'A selfish, cynical television executive is haunted by three spirits bearing lessons on Christmas Eve.',
    director: 'Richard Donner',
    stars: 'Bill Murray, Karen Allen, John Forsythe, John Glover, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BZDExMjFhYTItNmFkNC00YzQ0LWE1OGMtN2ExNGFkNWMxMjA4XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_UX140_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '14',
    title: 'Spirited',
    runtime: 127,
    imdbRating: 6.6,
    year: 2022,
    description:
      "A musical version of Charles Dickens's story of a miserly misanthrope who is taken on a magical journey.",
    director: 'Sean Anders',
    stars: 'Will Ferrell, Ryan Reynolds, Octavia Spencer, Patrick Page, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2RlZGFmYjAtNGZiMi00YjQ5LWE0ZmQtZmIyM2VmMjRhMTJlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '15',
    title: 'Miracle on 34th Street',
    runtime: 114,
    imdbRating: 6.6,
    year: 1994,
    description:
      'A lawyer and a little girl must prove that a man claiming to be Santa Claus is the real thing.',
    director: 'Les Mayfield',
    stars:
      'Richard Attenborough, Elizabeth Perkins, Dylan McDermott, J.T. Walsh, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjk3M2UyN2YtNmQ1MS00MWI3LWEzNGMtYTRkM2E5MWNjOWJjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '16',
    title: 'Jingle All the Way',
    runtime: 89,
    imdbRating: 5.7,
    year: 1996,
    description:
      'A father vows to get his son a Turbo Man action figure for Christmas. However, every store is sold out, and he must travel all over town and compete with everybody else in order to find one.',
    director: 'Brian Levant',
    stars: 'Arnold Schwarzenegger, Sinbad, Phil Hartman, Rita Wilson, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMmJlYzViNzctMjQ1Ni00ZWQ4LThkN2YtMzI2ZGU5Nzk0NTAyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '17',
    title: 'Klaus',
    runtime: 96,
    imdbRating: 8.2,
    year: 2019,
    description:
      "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
    director: 'Sergio Pablos',
    stars:
      'Carlos Martínez López, Jason Schwartzman, J.K. Simmons, Rashida Jones, Will Sasso, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '18',
    title: 'A Christmas Carol',
    runtime: 96,
    imdbRating: 6.8,
    year: 2009,
    description:
      "An animated retelling of Charles Dickens' classic novel about a Victorian-era miser taken on a journey of self-redemption, courtesy of several mysterious Christmas apparitions.",
    director: 'Robert Zemeckis',
    stars: 'Jim Carrey, Gary Oldman, Colin Firth, Steve Valentine, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODU4MV5BMl5BanBnXkFtZTcwNTYyNTU4Mg@@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '19',
    title: 'Last Christmas',
    runtime: 103,
    imdbRating: 6.5,
    year: 2019,
    description:
      'Kate is a young woman subscribed to bad decisions. Working as an elf in a year-round Christmas store is not good for the wannabe singer. However, she meets Tom there. Her life takes a new turn--that seems too good to be true.',
    director: 'Paul Feig',
    stars: 'Madison Ingoldsby, Emma Thompson, Boris Isakovic, Lucy Miller, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTQ4ZmY0NjgtYzVhNy00NzhiLTk3YTYtNzM1MTdjM2VhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
  {
    id: '20',
    title: 'Christmas with the Kranks',
    runtime: 99,
    imdbRating: 5.5,
    year: 2004,
    description:
      'With their daughter, Blair, away in Peru, Luther and Nora Krank decide to skip Christmas all together until she decides to come home, causing an uproar when they have to celebrate it at the last minute.',
    director: 'Joe Roth',
    stars: 'Tim Allen, Jamie Lee Curtis, Dan Aykroyd, M. Emmet Walsh, ',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQxMDMxODEwNF5BMl5BanBnXkFtZTYwNzM4OTc2._V1_UY209_CR0,0,140,209_AL_.jpg',
  },
];

export default movies;
