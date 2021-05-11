const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./database.db');

const obj = {}
if(obj.id) console.log('true')