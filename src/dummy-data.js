import slug from 'slug'

const players = [
  {name: 'Todd Rizzolo', courseId: 'bulls', hcp: 7, rpg: 17, avatar: 'https://avatars.io/twitter/rizzofosho', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Austin Pernell', courseId: 'foxes', hcp: 9, rpg: 17, avatar: 'https://avatars.io/twitter/austinpernell', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Shooter McGavin', courseId: 'hedgehogs', hcp: 14, rpg: 17, avatar: 'https://avatars.io/twitter/shootermcgavin_', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Donald Trump', courseId: 'hedgehogs', hcp: 75, rpg: 17, avatar: 'https://avatars.io/twitter/realdonaldtrump', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Michael Arnold', courseId: 'koalas', hcp: 22, rpg: 17, avatar: 'https://avatars.io/twitter/marmanold', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Happy Gilmore', courseId: 'lemurs', hcp: 26, rpg: 17, avatar: 'https://avatars.io/twitter/_happy_gilmore', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Jack Nicklaus', courseId: 'foxes', hcp: 2, rpg: 17, avatar: 'https://avatars.io/twitter/jacknicklaus', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Justin Thomas', courseId: 'bulls', hcp: 3, rpg: 17, avatar: 'https://avatars.io/twitter/justinthomas34', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Jake Owen', courseId: 'koalas', hcp: 3, rpg: 17, avatar: 'https://avatars.io/twitter/jakeowen', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Bill Murray', courseId: 'lemurs', hcp: 3, rpg: 17, avatar: 'https://avatars.io/twitter/billmurray', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'John Daly', courseId: 'hedgehogs', hcp: 3, rpg: 17, avatar: 'https://avatars.io/twitter/pga_johndaly', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Michael Scott', courseId: 'koalas', hcp: 3, rpg: 17, avatar: 'https://avatars.io/twitter/Idundermifflin', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
  {name: 'Leslie Knope', courseId: 'foxes', hcp: 3, rpg: 17, avatar: 'https://avatars.io/twitter/theknope', fir: 3, gir: 4, putts: 8, pars: 4, bogeys: 4, d_bogeys: 1, birdies: 1, eagles: 0 },
]

const courses = {
  bulls: {
    id: 'bulls',
    name: 'The Bull Trap',
    wins: 80,
    losses: 2,
    established: 1998,
    coach: 'Addy Osmani',
    manager: 'Todd Motto',
    championships: [1998, 1999, 2001, 2004, 2005, 2008, 2011, 2013, 2014, 2015],
    players: players.slice(0, 5),
  },
  foxes: {
    id: 'foxes',
    name: 'Foxes Den',
    wins: 75,
    losses: 7,
    established: 2000,
    coach: 'Rich Harris',
    manager: 'Jem Young',
    championships: [2000, 2002, 2009],
    players: players.slice(5, 10),
  },
  hedgehogs: {
    id: 'hedgehogs',
    name: 'Hedgehog Hills',
    wins: 72,
    losses: 10,
    established: 2002,
    coach: 'Vivian Cromwell',
    manager: 'Jafar Husain',
    championships: [2003, 2012],
    players: players.slice(10, 15),
  },
  lemurs: {
    id: 'lemurs',
    name: 'Lemurs Ledge',
    wins: 60,
    losses: 22,
    established: 2004,
    coach: 'Paul O’Shannessy',
    manager: 'Lee Byron',
    championships: [2007, 2009],
    players: players.slice(15, 20),
  },
  koalas: {
    id: 'koalas',
    name: 'Koala Forest',
    wins: 55,
    losses: 27,
    established: 2005,
    coach: 'David Nolen',
    manager: 'Tereza Sokol',
    championships: [2006, 2009, 2010],
    players: players.slice(20, 25),
  },
}

const articleText = `Quae phasellus? Ullamcorper nunc ad eu tempus nostra, etiam massa, perferendis suscipit interdum, voluptates, tempora leo, nec, dignissim, laudantium diam tortor provident, eum erat, optio lorem rem class volutpat hac, eros per vivamus quisque, mauris incididunt! Quam ornare! Nam posuere metus? Laudantium esse provident nibh iure dolor modi! Voluptatibus porttitor magni nisl? Voluptatem mi, pariatur et nascetur! Hymenaeos maecenas viverra! Dolorum distinctio suspendisse, imperdiet! Aliquip quisquam quod, lacus beatae auctor. Ipsa fringilla! Minim molestie quo? Adipiscing, dui, fermentum excepteur luctus, conubia facilisi voluptatibus unde alias est possimus quibusdam, totam, quos? Recusandae egestas corporis, similique potenti facilisi? Reprehenderit massa voluptatum, asperiores. Eius libero sociosqu cras mollis. Maxime penatibus nascetur praesent eius explicabo, molestie? Deserunt inventore asperiores incididunt, venenatis recusandae potenti doloribus assumenda odit, tempora voluptatem dignissimos suscipit ridiculus, dicta quibusdam consequatur mauris, perspiciatis repellendus aute pede sapien. Blandit fringilla quisque, faucibus! Accusantium quis. Magna eros facere sollicitudin ornare sapiente placeat malesuada tempus hac? Provident inventore dignissim habitant. Per aliquet veritatis. Quasi mattis repellendus dapibus mi! Suscipit labore vulputate quae impedit hymenaeos! Sodales pede optio perferendis? Architecto iusto nullam condimentum ac expedita! Cursus. Natoque eu minim, ut ullam venenatis, varius dignissimos per! Scelerisque. Platea ut nec convallis mauris. Optio laudantium tristique cursus. Quibusdam, vero quod culpa magnam magna consectetur maiores quisque blandit sunt ab viverra commodo hic aliquam morbi cumque! Officia netus blandit laboriosam tortor ex lectus, fames habitant similique, ex convallis, blandit neque. Quidem dignissim ridiculus, ipsa, vero eum non class nostrum labore? Class dis nesciunt, pellentesque iure facilisi, error placerat aliquet semper? Commodo ultrices? Id habitant congue ratione nascetur phasellus itaque pariatur dignissim, similique pariatur, fugiat! Tincidunt dolore ullamco quo, beatae deserunt nesciunt posuere deserunt scelerisque proin, dignissimos, nesciunt enim! Ut, inventore quibusdam dicta? Habitasse cupidatat quaerat porttitor neque optio! Gravida? Minima! Fugit? Eius deserunt ullamcorper? Iure eos, tincidunt? Exercitation. Fugiat reiciendis quos mus, fugiat, consequat? Aenean beatae aliquam lectus tempor habitant quibusdam ipsam aliquet venenatis. Sapien ullam venenatis cupiditate nobis cursus ratione litora? Mollitia odit tenetur scelerisque, excepteur facilisi? Porro maecenas molestiae per, quasi, litora, tincidunt numquam mattis laborum! Lacus urna ligula. Natus litora. Viverra odit exercitation ad convallis sociis minima. Tincidunt ullamco! Sagittis qui, inventore ratione fuga eaque, beatae eu integer, maiores, eius similique sodales interdum mus distinctio vitae labore est earum sequi, dictum? Condimentum veniam! Atque minim! Voluptatibus donec dolorem temporibus. Metus ducimus feugiat tempore! Optio aliqua lacinia morbi pulvinar mollis laboriosam fames, ante eveniet harum, facere.`

const articleInfo = [
  { title: 'close out big game', date: new Date(2018, 0, 1) },
  { title: "fall into late slump", date:  new Date(2017, 11, 29) },
  { title: "lose key player", date: new Date(2017, 11, 15) },
  { title: "heating up in October", date: new Date(2017, 11, 11) },
  { title: "continue to get worse", date: new Date(2017, 11, 3) },
  { title: "lose. Again.", date: new Date(2017, 10, 19) },
  { title: "get free agent for cheap", date: new Date(2017, 10, 11) },
  { title: "off to great start", date: new Date(2017, 9, 12) },
  { title: "lose another to injury", date: new Date(2017, 9, 5) },
  { title: "worst case scenario", date:  new Date(2017, 8, 4) },
  { title: "defy all odds", date: new Date(2017, 7, 29) },
  { title: "are young but determined", date: new Date(2017, 6, 11) },
  { title: "keep the streak alive", date: new Date(2017, 5, 14) },
  { title: "have eye on the prize", date: new Date(2017, 6, 6) },
  { title: "are all washed up", date: new Date(2017, 5, 4) },
]

function generateTitle (courseId, index) {
  return  courseId[0].toUpperCase() + courseId.slice(1) + ' ' + articleInfo[index].title
}

export function generateArticle (courseId, articleId) {
  const index = articleInfo
    .map((info, index) => slug(generateTitle(courseId, index)))
    .indexOf(articleId)

  const title = generateTitle(courseId, index)

  return {
    id: slug(title),
    body: articleText,
    title,
    date: articleInfo[index].date,
  }
}

export function generateCourseArticles (courseId) {
  return articleInfo.map(({title, date}, index) => {
    const updatedTitle = generateTitle(courseId, index)
    return {
      date,
      title: updatedTitle,
      id: slug(updatedTitle),
    }
  })
}

export {
  courses,
  players,
}