import { addresess } from "./country.js";
let selecttag = document.querySelector("#country");
let statetag = document.querySelector("#state");

let { countries: countries } = addresess; //destructure country from object
let showcountry = () => {
  countries.forEach((e) => {
    let option = document.createElement("option");
    option.value = e.country;
    option.text = e.country;
    selecttag.add(option);
  });
};

showcountry();

selecttag.addEventListener("change", function () {
  if (this.value !== "") {
    show_states(this.value);
  } else {
    statetag.innerHTML = "";
  }
});

const show_states = (country) => {
  const states = countries?.find((e) => e.country === country);

  statetag.innerHTML = "";
  states.states.forEach((e) => {
    let option = document.createElement("option");
    option.value = e;
    option.text = e;
    statetag.add(option);
  });
};

statetag.addEventListener("change", (e) => {
  window.alert(e.target.value);
});
// let showstates = () => {

// };
