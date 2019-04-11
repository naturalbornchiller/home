// ☟, ☞, ☛, ✹, ※, ⁂, ☯
// for terminal-like file-tree branches see https://en.wikipedia.org/wiki/Box-drawing_character
const branches = {
  name: 'emmanuel_price/',
  descendants: [{
    name: 'projects/',
    descendants: [{
      name: 'code/',
      descendants: [{
        name: 'life',
        link: {
          type: 'view',
          url: '/projects/code/life'
        }
      }, {
        name: 'concat',
        link: {
          type: 'view',
          url: '/projects/code/concat'
        }
      }]
    }, {
      name: 'writing/',
      descendants: [{
        name: 'cc',
        link: {
          type: 'view',
          url: '/projects/writing/cold_cuts.pdf'
        }
      }, {
        name: 'beached',
        link: {
          type: 'view',
          url: '/projects/writing/beached.pdf'
        }
      }]
    }, {
      name: 'art',
      link: {
        type: 'view',
        url: '/projects/art'
      }
    }]
  }, {
    name: 'about/',
    descendants: [{
      name: 'me',
      link: {
        type: 'view',
        url: '/about/me'
      }
    }, {
      name: 'quotes',
      link: {
        type: 'view',
        url: '/about/quotes'
      }
    }]
  }, {
    name: 'resume',
    link: {
      type: 'view',
      url: '/resume.pdf'
    }
  }, {
    name: 'contact',
    link: {
      type: 'view',
      url: '/contact'
    }
  }]
}

export default branches