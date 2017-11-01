const got = require('got')

const URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'

got(URL)
  .then(html => console.log(html.body))
  .catch(err => console.log(err))
