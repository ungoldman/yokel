// this is definitely not the right way to do a model
// just brute forcing some prototype stuff
module.exports = {
  state: {
    nav: {
      open: false
    },
    site: {
      title: 'Site Name'
    },
    page: {
      title: 'Page Title',
      author: 'Bingo',
      description: 'Bingo\'s Page',
      og: {
        url: 'http://i.dunno'
      },
      twitter: {
        creator: '@ungoldman',
        site: '@ungoldman'
      },
      markdown: {
        mode: 'render',
        text: '# Page Title\nClick the edit button to change page content.'
      }
    }
  },
  reducers: {
    hamburger: (data, state) => ({ nav: { open: !state.nav.open } }),
    toggleEditor: (data, state) => {
      var mdState = state.page.markdown
      return {
        page: {
          markdown: {
            mode: mdState.mode === 'edit' ? 'render' : 'edit',
            text: mdState.text
          }
        }
      }
    },
    updateText: (data, state) => {
      return {
        page: {
          markdown: {
            mode: 'edit',
            text: data
          }
        }
      }
    }
  }
}
