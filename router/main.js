const sqlite3 = require('sqlite3').verbose();
const crypto = require('crypto');
const info = require('../custom/info.js');
const url = './db/gksans.db';

module.exports = function(app)
{
    app.get('/get', function(req, res) {
        let db = new sqlite3.Database(url, (err) => {if(err) {return console.error(err.message);}});        
        let sql = 'SELECT * FROM hanja where 1=1' 
        if(req.query.id) sql += " and id='" + req.query.id + "'";
        if(req.query.shape) sql += " and shape='" + req.query.shape + "'";
        if(req.query.mean) sql += " and mean='" + req.query.mean + "'";
        if(req.query.sound) sql += " and sound='" + req.query.sound + "'";
        if(req.query.level) sql += " and level=" + req.query.level + "";
        
        if(req.query.order) sql += " order by " + req.query.order;
        if(req.query.limit) sql += " limit " + req.query.limit;

        db.all(sql, [], function(err, rows) {
            if(err) {return console.error(err.message)};
            let data = [];
            rows.forEach( (row) => {
                if(row) {                    
                    let decipher = crypto.createDecipher(info.algorithm(), info.key());
                    let decrypted = decipher.update(row.img, info.toEnc(), info.fromEnc());
                    decrypted += decipher.final(info.fromEnc());
                    if(req.query.noimage == "true") { decrypted = ''; }     
                    data.push({...row, img: "data:image/jpeg;base64," + Buffer.from(decrypted, info.oriEnc()).toString(info.toEnc())});
                }
            });
            res.send(JSON.stringify(data));
        });
        
        db.close();        
    }); 

    app.get('/set', function(req, res) {
        let db = new sqlite3.Database(url, (err) => {if(err) {return console.error(err.message);}});        
        let sql = `UPDATE hanja SET correct = ?, wrong = ? WHERE id = ?`;
        let result = JSON.parse(req.query.result);        
        
        for(let i=0; i<result.length; i++) {
            let r = result[i];
            db.run(sql, [r.correct, r.wrong, r.id], function(err) {
                if (err) { return console.error(err.message); }              
            });
        }       
        
        res.send(JSON.stringify('done'));
        db.close();     
    });


    app.get('/wget', function(req, res) {
        let db = new sqlite3.Database(url, (err) => {if(err) {return console.error(err.message);}});        
        let sql = 'SELECT * FROM words where 1=1' 
        if(req.query.id) sql += " and id='" + req.query.id + "'";
        if(req.query.shapes) sql += " and shapes='" + req.query.shapes + "'";
        if(req.query.sounds) sql += " and sounds='" + req.query.sounds + "'";        
        
        if(req.query.order) sql += " order by " + req.query.order;
        if(req.query.limit) sql += " limit " + req.query.limit;

        db.all(sql, [], function(err, rows) {
            if(err) {return console.error(err.message)};
            let data = [];
            rows.forEach( (row) => {
                if(row) {                                        
                    data.push(row);
                }
            });
            res.send(JSON.stringify(data));
        });
        
        db.close();        
    }); 

    app.get('/wset', function(req, res) {
        let db = new sqlite3.Database(url, (err) => {if(err) {return console.error(err.message);}});        
        let sql = `UPDATE words SET correct = ?, wrong = ? WHERE id = ?`;
        let result = JSON.parse(req.query.result);        
        
        for(let i=0; i<result.length; i++) {
            let r = result[i];
            db.run(sql, [r.correct, r.wrong, r.id], function(err) {
                if (err) { return console.error(err.message); }              
            });
        }       
        
        res.send(JSON.stringify('done'));
        db.close();     
    });


};
