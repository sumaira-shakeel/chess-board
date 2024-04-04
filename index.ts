#! user/bin/env node  
  
  
  import inquirer from "inquirer";
const randomNumber =Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type:"number",
        message:"please guss a number between 1-6: ",

    },
]);
if(answers.userGussedNumber === randomNumber){
    console.log('congratulations you guess right number:');
}else{
    console.log('you gussed a wrong number:');
}

