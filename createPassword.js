const alphabets = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alphabets;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

//   Creating the main password
  password = '';
  let i = 0;
  while (i < length) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
    i++
  }
  return password
};

module.exports = createPassword;
