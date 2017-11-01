const got = require('got')
const cheerio = require('cheerio')

const URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'

got(URL)
  .then(html => {
    // use cheerio to extract all readable text from the body of page
    const $ = cheerio.load(html.body)
    const content = $('body')
    
    console.log(content.text())
  })
  .catch(err => console.log(err))
