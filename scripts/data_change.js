const today = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};
const options2 = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const options3 = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

const yesterday = new Date(today);
const days3before = new Date(today);
const tomorrow = new Date(today);

yesterday.setDate(today.getDate() - 1);
days3before.setDate(today.getDate() - 3);
tomorrow.setDate(today.getDate() + 1);

const formattedDate = yesterday.toLocaleDateString("en-US", options);
const formattedDate2 = days3before.toLocaleDateString("ru-RU");
const formattedDate3 = days3before.toLocaleDateString("ru-RU", options2);
const formattedDate4 = tomorrow.toLocaleDateString("en-GB", options3);

const form4upd = `Up until ${formattedDate4}, registration of accounts will be free`;

document.getElementById("change_time1").textContent = formattedDate;
document.getElementById("check_1").textContent = formattedDate2;
document.getElementById("check_2").textContent = formattedDate3;
document.getElementById("change_time2").textContent = form4upd;
