const fs = require("fs")

fs
   .readdirSync("dist")
   .forEach(dirent => true
      && dirent.endsWith(".map")
      && fs.unlinkSync(`dist/${dirent}`))

const pages = require("gh-pages")

pages.publish("dist", err => { throw new Error(err) })
