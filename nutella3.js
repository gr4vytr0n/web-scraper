const got = require('got')
const cheerio = require('cheerio')

const URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'

got(URL)
  .then(html => {
    // use cheerio to extract the href attribute from all anchors on page
    const $ = cheerio.load(html.body)

    $('a').map((i, el) => {
      console.log($(el).attr('href'))
    })
  })
  .catch(err => console.log(err))
