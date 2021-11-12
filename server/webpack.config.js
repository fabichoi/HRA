'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    context: __dirname,
    entry: { // 엔트리 파일 목록
        app: './server.js'
    },
    output: {
        path: __dirname + '/build', // 번들 파일 폴더
        filename: '[name].bundle.js' // 번들 파일 이름 규칙
    }
};
