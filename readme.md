# yokel
(working title)

a static site framework focused on tha user.

content in markdown, backed by git, powered by [choo],
and most importantly, editable by humans.

inspired by [prose], [jekyll], [editdata], [scully], [mulder], [rainbows]

- all pages statically generated (no dynamic pages, no server)
- layout kicks off client app which takes over DOM
- template-based page generation
  - could submit directly to github
  - is an API intermediary necessary?
  - how to maintain attribution?
    - probably name/email attached to submission and appended to commit via bot
- create/edit pages and posts via markdown wysiwyg
- create/edit templates via html editor?
- page updates are just commits
- drafts are maybe secretly PRs
- never show the user what they don't need to know
- git/github is for developers
- developers are not normal people
- no one should have to deal with low-level stuff to make a decent site
- basically jekyll but wordpress but node but choo

now i just have to write it

![](http://i.imgur.com/JXQ3xcw.jpg)

some important questions:

- can/should choo take over the whole html document in order to modify metadata in `<head>`?
- what is the best/simplest choo model/view structure to allow for a markdown-powered site that allows users to submit page edits (and new posts/pages) in-app?
- can this be made provider-agnostic (any git backend, not just github)?

[choo]: https://github.com/yoshuawuyts/choo
[prose]: https://github.com/prose/prose
[jekyll]: https://jekyllrb.com/
[ghost]: https://ghost.org/
[editdata]: https://github.com/editdata/editdata-github
[scully]: https://github.com/sethvincent/scully
[mulder]: https://twitter.com/xfilesbutemoji
[rainbows]: https://s-media-cache-ak0.pinimg.com/originals/37/bd/32/37bd327e52e145e2b224fd870efb90e8.gif
