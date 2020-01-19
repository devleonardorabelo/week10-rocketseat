const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray, // "mongo operators"
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, // metros de distancia
                }
            },
        })
        return res.json({ devs })
    }
}