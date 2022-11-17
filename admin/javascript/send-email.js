const checkCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  // return "";
  window.location.href = "/login.html";
};

const getParam = () => {
  const urlParams = new URLSearchParams(location.search);

  for (const [key, value] of urlParams) {
    return key;
  }
};


const send_email = async (form) => {
  try {
    document.querySelector("#submit").innerHTML = "proccessing...";
    const response = await fetch("/api/admin/send_wallet", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/admin/user_deposits.html`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

const show_input_error = (input) => {
  input.style.border = "2px solid red";
};
const hide_input_error = (input) => {
  input.style.border = "2px solid #fff";
};


let deposit_amount = document.querySelector("#amount");
let payment_method = document.querySelector("#payment-method");
let currency = document.querySelector("#currency");
let wallet=document.querySelector("#wallet")

deposit_amount.onkeyup=()=>hide_input_error(deposit_amount)
payment_method.onchange = () =>hide_input_error(payment_method)
currency.onchange = () => hide_input_error(currency);
wallet.onkeyup=()=>hide_input_error(wallet)

document.querySelector("#submit").onclick=()=>{
    if(!deposit_amount.value)return show_input_error(deposit_amount)
    if(!payment_method.value)return show_input_error(payment_method)
    if(!currency.value)return show_input_error(currency)
    if(!wallet.value)return show_input_error(wallet)
    const admin = checkCookie("admin");
  const token = checkCookie("admin_token");
  const user=getParam();
    send_email({
      admin,
      token,
      user,
      deposit_amount: deposit_amount.value,
      payment_method: payment_method.value,
      currency: currency.value,
      wallet: wallet.value,
    });
}