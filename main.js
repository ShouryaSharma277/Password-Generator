const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const fs = require("fs");
const path = require("path");
const os = require("os");

const saveToFile = (password, save) => {
  if (save) {
    fs.open(path.join(__dirname, "./", "passwords.txt"), "a", 666, (e, id) => {
      fs.write(id, password + os.EOL, null, "utf-8", () => {
        fs.close(id, () => {
          console.log(chalk.green("Password has been saved to passwords.txt"));
        });
      });
    });
  }
};

const alphabets = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sampleNumbers = "0123456789";
const sampleSymbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alphabets;
  hasNumbers ? (chars += sampleNumbers) : "";
  hasSymbols ? (chars += sampleSymbols) : "";

  //   Creating the main password
  password = "";
  let i = 0;
  while (i < length) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    i++;
  }
  return password;
};

program.version("1.0.0").description("Password Generator");
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "Remove Numbers")
  .option("-ns, --no-symbols", "Remove Symbols")
  .parse();
const log = console.log;

const { length, save, numbers, symbols } = program.opts();

// Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Save Password
saveToFile(generatedPassword, save);

// Output
log(chalk.cyan.bold("Generated Password:\n") + chalk.bold(generatedPassword));
log(chalk.magentaBright.bold("Password copied to Clipboard"));
