let inputArr = process.argv.slice(2);
let helpObj = require("C:\\Users\\91895\\Desktop\\rev\\help.js");
let treeObj = require("./tree.js");
let organizeObj = require("C:\\Users\\91895\\Desktop\\rev\\organize.js");
let cmd = inputArr[0];
switch(cmd){
    case "help":
        helpObj.helpfxn();
        break;
        case "tree":
            treeObj.treeFn(inputArr[1]);
            break;
            case "organize":
                organizeObj.organizefxn(inputArr[1]);
                        break;
                        default: 
                        console.log(`Wrong command
                        .Kindly enter help to see all the command`);
                        break;
            }