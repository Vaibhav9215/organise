let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let path = require("path");
let fs = require("fs");
function organizeFn(srcPath){
    if (srcPath == undefined)
    srcPath = process.cwd();
    // 1 create organized_files -> directory
    let organizedFilesPath = path.join(srcPath, "organized_files");
    if (fs.existsSync(organizedFilesPath) == false){
        fs.mkdirSync(organizedFilesPath);
    }
    // 2 scan whole srcPath -> entenxsion check
    let allTheFiles = fs.readdirSync(srcPath);
    console.log(allTheFiles);
    // 2 b check extension then classify
    for(let i = 0; i < allTheFiles.length; i++){
        let fullOriginalPath = path.join(srcPath, allTheFiles[i]);
        if (fs.lstatSync(fullOriginalPath).isFile()== true){
        let folderName = checkextnTellFolder(allTheFiles[i]);
       // console.log(allTheFiles[i], "will go to" , folderName)
            copyFileTodest(folderName, fullOriginalPath, srcPath);
    }
}
      // 3 copy to that folder to which it belong
    // folder
    // file copy 
    //other
    // file copy
}
    function copyFileTodest(folderName, fullOriginalPath, srcPath){
        let destFolderPath = path.join(srcPath, "organized_files" , folderName)
        if (fs. existsSync(destFolderPath) == false){
            fs.mkdirSync(destFolderPath);
        }
        let originalFileName = path.basename (fullOriginalPath);
        let destFilePath = path.join(destFolderPath, originalFileName);
        fs.copyFileSync(fullOriginalPath, destFilePath);
        console.log(originalFileName, " copied to " , folderName);

    }
    function checkextnTellFolder(filename){
        let extName = path.extname(filename);
        extName = extName.slice(1);
        for(let key in types){
            for(let i = 0; i < types[key].length;i++){
                if(types[key][i] == extName){
                    return key;
                }
            }
        }
        return "others";
    }
    module.exports = {
        organizefxn: organizeFn
    }