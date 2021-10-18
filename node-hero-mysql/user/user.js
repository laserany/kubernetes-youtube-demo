//Require MySQL related modules
const mysql = require('mysql')
const user  = process.env.user
const database = process.env.database
const password = process.env.password
//Create MySQL Connection
let con = mysql.createConnection({ 
	host: "mysql"
	, user: user
	, database: database
	, password: password
})

//Functions
exports.getUsers = function(callback) {
	let sql = "SELECT * FROM users"
	con.query(sql, function (err, result, fields) {
		callback(err, result);
	})
}

exports.getUser = function(name, callback) {
	let sql_template = "SELECT * FROM users WHERE name = ?"
	sql = mysql.format(sql_template, [name])
	console.log(sql)

	con.query(sql, function (err, result, fields) {
		callback(err, result);
	})
}

exports.deleteUser = function(name, callback) {
	let sql_template = "DELETE FROM users WHERE name = ?"
	sql = mysql.format(sql_template, [name])
	
	con.query(sql, function (err, result, fields) {
		callback(err, result);
	})
}

exports.addUser = function (name, age, callback) {
	let sql_template = "INSERT INTO users VALUES(?, ?)"
	sql = mysql.format(sql_template, [name, age])

	con.query(sql, function (err, result) {
		callback(err, result);
	})
}
