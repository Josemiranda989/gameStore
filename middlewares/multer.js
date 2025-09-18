const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/products'))
  },
  filename: function (req, file, cb) {
    const filename = `game-${Date.now()}${path.extname(file.originalname)}`
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

module.exports = upload