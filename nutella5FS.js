const got = require('got')
const cheerio = require('cheerio')
const writer = require('format-data')('csv')
const { createWriteStream } = require('fs')

const ouputFile =  createWriteStream('output.csv')

const URL = 'http://web.archive.org/web/20120216223019/http://www.reddit.com/r/science/'

got(URL)
  .then(html => {
    const $ = cheerio.load(html.body)
    const links = $('.link')
    
    links.map((i, e) => {
      const el = $(e)
      const score = el.find('.score.unvoted').text()
      const a = el.find('a')
      const href = a.attr('href')
      const content = a.text()

      let row = {
        score: score,
        href: href,
        content: content
      }

      writer.write(row)
    })

  })
  .catch(err => console.log(err))

writer.pipe(ouputFile)
