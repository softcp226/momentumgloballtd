const write_percentage = (percentage, earning) => {
  document.querySelector("#percentage").innerHTML = percentage;
  document.querySelector("#earning").innerHTML = earning;
};
const show_err = () => {
  document.querySelector("#amount").style.border = "2px solid red";
  document.querySelector(".errMessage").innerHTML =
    "Investment amount can not be lesser than minimum investment for the plan selected";
};
const disable_show_err = () => {
  document.querySelector("#amount").style.border = "2px solid #fff";
  document.querySelector(".errMessage").innerHTML = "";
};
let profit;

const handle_request = () => {
  switch (plan.value) {
    case "Basic Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 100) return show_err();
      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 60%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 60
        )}`;
        profit = Math.round((amount.value / 100) * 60);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 420%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 60 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 60 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Premium Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 300) return show_err();
      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 60%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 60
        )}`;
        profit = Math.round((amount.value / 100) * 60);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 420%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 60 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 60 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Standard Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 500) return show_err();
      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 60%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 60
        )}`;
        profit = Math.round((amount.value / 100) * 60);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 420%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 60 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 60 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Enterprise Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 700) return show_err();

      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 60%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 60
        )}`;
        profit = Math.round((amount.value / 100) * 60);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 420%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 60 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 60 * 7);
        write_percentage(percentage, earning);
        break;
      }

    case "Ultimate Plan":
      if (!amount.value) return;
      if (!return_time.value) return;
      if (parseInt(amount.value) < 1000) return show_err();

      disable_show_err();
      if (return_time.value == "daily_return") {
        var percentage = "daily Percentage: 60%";
        var earning = `daily Earning: $${Math.round(
          (amount.value / 100) * 60
        )}`;
        profit = Math.round((amount.value / 100) * 60);
        write_percentage(percentage, earning);
        break;
      } else {
        var percentage = "Weekly Percentage: 420%";
        var earning = `Weekly Earning: $${Math.round(
          (amount.value / 100) * 60 * 7
        )}`;
        profit = Math.round((amount.value / 100) * 60 * 7);
        write_percentage(percentage, earning);
        break;
      }

    default:
      handle_keychange();
      break;
  }
};

const handle_keychange = () => {
  if (!amount.value) return display_error(amount);
  hide_error(amount);
  if (!plan.value) return display_error(plan);
  hide_error(plan);
  if (!return_time.value) return display_error(return_time);

  hide_error(return_time);
  handle_request();
};
