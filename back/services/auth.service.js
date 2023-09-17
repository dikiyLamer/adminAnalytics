const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ email: req.body.email });

    if (candidate) {
        const passwordResult = bcrypt.compareSync(
            req.body.password,
            candidate.password
        );
        console.log(passwordResult);

        if (passwordResult) {
            const token = jwt.sign(
                {
                    email: candidate.email,
                    userid: candidate._id,
                },
                process.env.SECRET,
                { expiresIn: 3600 }
            );
            res.status(200).json({
                token: `Bearer ${token}`,
            });
        } else {
            res.status(401).json({
                message: 'Пароль неверный',
            });
        }
    } else {
        res.status(404).json({
            message: 'Пользователь не найден',
        });
    }
};

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({ email: req.body.email });

    if (candidate) {
        res.status(409).json({
            message: 'Пользователь с таким email уже существует',
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            email: req.body.email,
            password: password,
        });
        try {
            await user.save();
            res.status(201).json(user);
        } catch (e) {
            errorHandler(res, e);
        }
    }
};
