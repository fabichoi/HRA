const Joi = require('joi');
const Eval = require('../models/evaluation.model');

exports.setResult = async (ctx) => {
    const user_id = ctx.request.user._id
    const data = JSON.parse(ctx.request.rawBody);

    try {
        hanjas = await Eval.setDatas(user_id, data);
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = hanjas;
};

