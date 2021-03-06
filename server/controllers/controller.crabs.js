const Crab = require('../models/model.crabs');

module.exports = {
    index: (request, response) => {
        Crab.find()
            .then(crabs => response.json({ results: crabs }))
            .catch(err => response.json(err.errors));
    },
    create: (request, response) => {
        Crab.create(request.body)
            .then(crab => response.json({ results: crab }))
            .catch(err => response.json(err.errors))
    },
    show: (request, response) => {
        Crab.findOne({ _id: request.params.id })
            .then(crab => response.json({ results: crab }))
            .catch(err => response.json(err.errors))
    },
    update: (request, response) => {
        Crab.findOneAndUpdate({ _id: request.params.id }, request.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true
        })
            .then(crab => response.json({ results: crab }))
            .catch(err => response.json(err.errors))
    },
    destroy: (request, response) => {
        Crab.deleteOne({ _id: request.params.id })
            .then(result => response.json({ results: result }))
            .catch(err => response.json(err.errors))
    }
}