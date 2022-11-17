// const mongoose = require("mongoose");
// // const connect = require("./dbConnector");
// // connect("connected to user database");
// const db_link = process.env.db_Url;

// mongoose
//   .connect(db_link)
//   .then(() => console.log("user connection succeeded"))
//   .catch((err) => console.log(err.message));

// const userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   phone_number: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   first_name: String,
//   last_name: String,
//   passport: String,
//   password: String,
//   final_balance: {
//     type: Number,
//     default: 10,
//   },
//   profit_loss: {
//     type: Number,
//     default: 0,
//   },
//   active_investment: {
//     type: Number,
//     default: 0,
//   },
//   referral_bonus: {
//     type: Number,
//     default: 0,
//   },
//   referral_link: String,
//   has_made_deposit: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
//   referral: String,
// });

// const User = mongoose.model("user", userSchema);
// module.exports = User;


























const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to user database");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  first_name: String,
  last_name: String,
  passport: String,
  password: String,
  final_balance: {
    type: Number,
    default: 10,
  },
  profit_loss: {
    type: Number,
    default: 0,
  },
  active_investment: {
    type: Number,
    default: 0,
  },
  referral_bonus: {
    type: Number,
    default: 0,
  },
  referral_link: String,
  has_made_deposit: {
    type: Boolean,
    required: true,
    default: false,
  },
  referral: String,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
