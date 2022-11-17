const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Admin = require("../model/admin");
const User = require("../model/user");
const validate_send_mail = require("../validation/validate_admin_sendmail");
const { create_mail_options, transporter } = require("../mailer/send_account");

Router.post("/", verifyToken, async (req, res) => {
  const request_is_valid = validate_send_mail(req.body);
  if (request_is_valid != true)
    return res.status(400).json({ error: true, errMessage: request_is_valid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });

    const user = await User.findById(req.body.user);
    if (!user)
      return res.status(403).json({
        error: true,
        errMessage:
          "Forbidden!, The user you tried to send an email does not exist",
      });

    transporter.sendMail(
      create_mail_options({
        reciever: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        amount: req.body.deposit_amount,
        currency: req.body.currency,

        payment_method: req.body.payment_method,

        wallet: req.body.wallet,
      }),
      (err, info) => {
        console.log(err);
        console.log(info);
        if (err)
          return res.status(400).json({ error: true, errMessage: err.message });
        return res
          .status(200)
          .json({ error: false, message: "email sent successfully" });

        // return res.status(400).json({
        //   error: true,
        //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
        // });
      }
    );
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
  //
});
module.exports = Router;
