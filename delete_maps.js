const fs = require("fs")

fs
   .readdirSync("dist")
   .forEach(dirent => true
      && dirent.endsWith(".map")
      && fs.unlinkSync(`dist/${dirent}`))
