#! /usr/bin/env node


import inquirer from "inquirer"
import chalk from "chalk"


const answers :{
    sentence:string
}= await inquirer.prompt([
    {
        name :"sentence",
        type :"input",
        message:"Ender your sentence to count the word: "
    }
])

const words = answers.sentence.trim().split(" ")

console.log(words);
console.log(chalk.blueBright(`Your sentence word count is ${words.length}`));
