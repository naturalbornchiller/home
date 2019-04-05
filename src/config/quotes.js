const quotes = [{
  url: 'https://en.wikiquote.org/wiki/Antoine_de_Saint_Exup%C3%A9ry',
  author: 'Antoine-Marie-Roger de Saint-Exupery',
  content: ['Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.']
}, {
  url: 'https://www.brainpickings.org/2011/12/02/steve-jobs-1995-life-failure/',
  author: 'Steve Jobs',
  content: ['The minute that you understand that you can poke life and actually something will, you know if you push in, something will pop out the other side, that you can change it, you can mold it. That’s maybe the most important thing. It’s to shake off this erroneous notion that life is there and you’re just gonna live in it, versus embrace it, change it, improve it, make your mark upon it.']
}, {
  url: 'https://www.goodreads.com/quotes/5520-a-life-spent-making-mistakes-is-not-only-more-honorable',
  author: 'George Bernard Shaw',
  content: ['A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.']
}, {
  url: 'https://www.youtube.com/watch?v=aySqymiraBA',
  author: 'Terence Mckenna',
  content: ["We have to create culture, don't watch TV, don't read magazines, don't even listen to NPR. Create your own roadshow. The nexus of space and time where you are now is the most immediate sector of your universe, and if you're worrying about Michael Jackson or Bill Clinton or somebody else, then you are disempowered, you're giving it all away to icons, icons which are maintained by an electronic media so that you want to dress like X or have lips like Y. This is shit-brained, this kind of thinking . . . You want to reclaim your mind and get it out of the hands of the cultural engineers who want to turn you into a half-baked moron consuming all this trash that's being manufactured out of the bones of a dying world."]
}, {
  url: 'https://www.brainyquote.com/quotes/john_f_kennedy_108094',
  author: 'John F. Kennedy',
  content: ['Too often we enjoy the comfort of opinion without the discomfort of thought.']
}, {
  url: 'https://everydaypowerblog.com/lao-tzu-quotes/',
  author: 'Lao Tzu',
  content: ['A good traveler has no fixed plans and is not intent on arriving.']
}, {
  url: '',
  author: 'Anon',
  content: ['Elegance, where it relates to design, is synonymous with "deceptive simplicity"; it denotes the stashing of complex work in plain view.']
}, {
  url: 'https://www.brainyquote.com/quotes/robert_frost_101059',
  author: 'Robert Frost',
  content: ['In three words I can sum up everything I\'ve learned about life: it goes on.']
}, {
  url: '',
  author: 'John Locke',
  content: ['The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.']
}, {
  url: '',
  author: 'Alan Watts',
  content: ['We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.']
}, {
  url: '',
  author: 'Philip K. Dick',
  content: ['Reality is that which, when you stop believing in it, doesn\'t go away.', 'Just because something bears the aspect of the inevitable one should not, therefore, go along willingly with it.']
}].sort((a, b) => { // sort alphabetically by first name
  if (b.author > a.author) {
    return -1
  } else if (b.author < a.author) {
    return 1
  }
  return 0
})

export default quotes