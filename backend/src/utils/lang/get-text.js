import en from "./en.js";
import fr from "./fr.js";

export default (lang, key) => {
  if (lang == "fr") {
    return fr[key];
  } else {
    return en[key];
  }
};
