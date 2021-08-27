const program = require("commander");
const chalk = require("chalk")
const clipboardy = require("clipboardy")
const createPassword = require("./createPassword");
const savePassword = require("./saveToFile");

program.version("1.0.0").description("Password Generator");
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'Save password to passwords.txt')
  .option('-nn, --no-numbers', 'Remove Numbers')
  .option('-ns, --no-symbols', 'Remove Symbols')
  .parse();
const log = console.log

const {length, save, numbers, symbols} = (program.opts());

// Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Save Password
savePassword(generatedPassword, save)

// Output
log(chalk.cyan.bold('Generated Password:\n') + chalk.bold(generatedPassword))
log(chalk.magentaBright.bold("Password copied to Clipboard"))
