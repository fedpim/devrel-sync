// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const dayjs = require('dayjs');
// const fs = require('fs');
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());
// let transporter = nodemailer.createTransport({
//   host: 'mail.shlz.ru',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'bitrix24informer@shlz.ru',
//     pass: 'TgkTw33@',
//   },
// });
// app.get('/', (req, res) => {
//   res.send('ok');
// });
// app.listen(3333, () => {
//   console.log('I am trying to find your data');
// });
// app.post('/', function (req, res) {
//   const prep_mail = { ...req.body };
//   console.log(prep_mail);
//   if (!prep_mail.to || !prep_mail.subject || !prep_mail.body) {
//     console.log('I found undefined');
//     res.send('404 page not found');
//     const name = './logs/' + dayjs().format('DD-MM-YYYY') + '.txt';
//     // const name =
//     //   '/root/mailer/mailer/logs/' + dayjs().format('DD-MM-YYYY') + '.txt';
//     const time = dayjs().$H + '-' + dayjs().$m + '-' + dayjs().$s;
//     console.log(dayjs().$D + '-' + dayjs().$M + '-' + dayjs().$y);
//     fs.appendFileSync(
//       name,
//       '\n\n' +
//         dayjs().format('HH:mm:ss') +
//         '\n' +
//         'to: ' +
//         prep_mail.to +
//         '\n' +
//         'subject: ' +
//         prep_mail.subject +
//         '\n' +
//         'text: ' +
//         prep_mail.text +
//         '\n' +
//         'status: failed'
//     );
//   } else {
//     transporter.sendMail(
//       {
//         from: 'АО "Щербинский лифтостроительный завод" <bitrix24informer@shlz.ru>',
//         to: prep_mail.to,
//         subject: prep_mail.subject,
//         text: prep_mail.text,
//       },
//       function (err, info) {
//         if (err) {
//           console.log(err);
//           res.send({ success: 'false' });
//           const name = './logs/' + dayjs().format('DD-MM-YYYY') + '.txt';
//           // const name =
//           //   '/root/mailer/mailer/logs/' + dayjs().format('DD-MM-YYYY') + '.txt';
//           const time = dayjs().$H + '-' + dayjs().$m + '-' + dayjs().$s;
//           console.log(dayjs().$D + '-' + dayjs().$M + '-' + dayjs().$y);
//           fs.appendFileSync(
//             name,
//             '\n\n' +
//               dayjs().format('HH:mm:ss') +
//               '\n' +
//               'to: ' +
//               prep_mail.to +
//               '\n' +
//               'subject: ' +
//               prep_mail.subject +
//               '\n' +
//               'text: ' +
//               prep_mail.text +
//               '\n' +
//               err
//           );
//         } else {
//           console.log(info);
//           res.send({ success: 'true' });
//           const name =
//             '/root/mailer/mailer/logs/' + dayjs().format('DD-MM-YYYY') + '.txt';
//           const time = dayjs().$H + '-' + dayjs().$m + '-' + dayjs().$s;
//           console.log(dayjs().$D + '-' + dayjs().$M + '-' + dayjs().$y);
//           fs.appendFileSync(
//             name,
//             '\n\n' +
//               dayjs().format('HH:mm:ss') +
//               '\n' +
//               'to: ' +
//               prep_mail.to +
//               '\n' +
//               'subject: ' +
//               prep_mail.subject +
//               '\n' +
//               'text: ' +
//               prep_mail.text +
//               '\n' +
//               'status: OK'
//           );
//         }
//       }
//     );
//   }
// });

let express = require('express');
const https = require('https');
let app = express();

app.get('', function (req, res) {
  res.send('Hello, Serguy!');
});
app.get('/start', function (req, res) {
  res.send('start');

  console.log(123);
});

app.listen(8080);
