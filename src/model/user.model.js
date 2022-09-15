
const db = require('../config/db')
const userModel = {
  // router list
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users ORDER BY username', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT *FROM users where id=${id}`, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  },
  Detail: (username) => {
    return new Promise((resolve, reject) => {
      db.query(`select *from users where username='${username}'`, (err, results) => {
        if (err) {
          reject(err)
        }
        resolve(results)
      })
    })
  },
  // router - insert
  store: (id, username, email, phone, password) => {
    return new Promise((resolve, reject) => {
      db.query(`
            INSERT INTO users (id,username,email, phone,password)
            VALUES
            (${id}, '${username}','${email}','${phone}','${password}')
            `, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      }
      )
    })
  },
  updateAccount: (id, username, email, phone, password) => {
    return new Promise((resolve, reject) => {
      // email = COALESCE('${email}', email),
      // password = COALESCE('${password}', password)
      db.query(
            `
              UPDATE users SET
              username = COALESCE('${username}', username),
              email = COALESCE('${email}', email),
              phone = COALESCE('${phone}', phone),
              password = COALESCE('${password}', password)
              WHERE id = ${id}
              `,
            // `UPDATE users SET
            // username = COALESCE($1, username),
            // email = COALESCE($2', email),
            // phone = COALESCE($3, phone),
            // password = COALESCE($4, password)
            // WHERE id = $5`,
            // [username, email, phone, password, id],
            (err, res) => {
              if (err) {
                reject(err)
              }
              resolve(res)
            }
      )
    })
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id = ${id};`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }

}
module.exports = userModel
