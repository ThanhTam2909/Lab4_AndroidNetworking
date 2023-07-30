var db = require('./db');

const spSchema = new db.mongoose.Schema({
    title: {type: String},
    image: {type: String},
    copyright: { type: String},
    hdurl: {type: String},
    media_tyoe: {type: String},
    service_version: {type: String},
    date: {type: Date},
    explaination: {type: String},
    url: {type: String}
},
    {collection: 'ImageNasaServer'}
);

let spModel = db.mongoose.model('spModel', spSchema);

module.exports = {spModel};