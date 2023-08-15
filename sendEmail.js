/* Plan of action
1.Send email to user saying "Hello World"
2.Send email to multiple users by creating email function
3.email template ( designed template)

*/
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "shuvamlim234@gmail.com",
    pass: "",
  },
});
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Shuvam Adhikar👻" <shuvamlim234@gmail.com>', // sender address
    to: "shuvamlim234@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    // text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>", // html body
    template,
  });

  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
