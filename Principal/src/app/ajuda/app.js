const express = require ('express')
const nodemail  = require('nodemailer')
const app = express();

const user = "tiagolopes@castgroup.com.br"
const pass = ""

const port = 4200/ajuda;

app.get('/', (req, res) => res.send('Hello!'))

app.get('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.castgroup.com.br",
    port: 587,
    auth: {user, pass}
  })

transporter.sendMail({
  from: user,
  to: user,
  replyTo: "juan-e-guanabara@gmail.com",
  subject: "Confirmação de Recebimento",
  text: "Olá, Recebemos o seu pedido, logo mais entraremos em contato... Obrigado.",

}).then(info => {
  res.send(info)
}).catch( error => {
  res.send(error)
})

app.listen(port, () => console.log(`Running on port ${port}!`))})
