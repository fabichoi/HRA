const Joi = require('joi');
const Hanja = require('../models/hanja.model');

exports.findByLevel = async (ctx) => {
    const level = ctx.params.level;

    try {
        hanjas = await Hanja.findByLevel(level);
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = hanjas;
};

exports.findByMs = async (ctx) => {
    const ms = ctx.query;

    try {
        hanjas = await Hanja.findByMs(ms);
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = hanjas;
};
