const Joi = require("joi");
const validate_admin_send_mail = (req) => {
  const schema = Joi.object({
    admin: Joi.string().required().max(1000),

    user: Joi.string().required().max(1000),
    deposit_amount: Joi.string().required().max(1000),
    payment_method: Joi.string().required().max(1000),
    currency: Joi.string().required().max(1000),
    wallet: Joi.string().required().max(1000),
  });
  const result = schema.validate({
    admin: req.admin,
    user: req.user,
    deposit_amount: req.deposit_amount,
    payment_method: req.payment_method,
    currency: req.currency,
    wallet: req.wallet,
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_admin_send_mail;
