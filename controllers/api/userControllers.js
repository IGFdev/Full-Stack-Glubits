const db = require('../../database/models');

const controllers = {
    getAll: (req, res) => {
        db.User.findAll({
            raw: true
        })
            .then(users => {
                res.status(200).json(users);
            })
    },

    createUser: (req, res) => {
        const newUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }

        db.User.create(newUser)
            .then(response => res.json(response));
    },

    updateUser: (req, res) => {
        const id = req.params.id

        const newUser = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }

        db.User.update(newUser, {
            where: {
                id
            }
        })
            .then(rows => res.json({ message: rows[0] + ' usuario(s) actualizado(s)' }))
    }
}

module.exports = controllers;