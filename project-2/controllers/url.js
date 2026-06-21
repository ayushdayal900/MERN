const nanoId = require('nanoid')


async function generateNewShortUrl(req, res) {
    const shortId = nanoId(8)
}

module.exports = {
    generateNewShortUrl
}