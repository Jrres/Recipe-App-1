import mysql from "mysql"

var connection = 
mysql.createConnection({
    host        : 'localhost', 
    user        : 'root', 
    password    : 'password', 
    database    : 'account'
});
export default connection