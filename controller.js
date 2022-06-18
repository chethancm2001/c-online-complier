const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function handlepost(req, res) {
  let code = req.body.code;
  let outputPath = path.join(__dirname, "codefiles", "code.c");
  let output = "";
  //used when it is moving to cloud

  //   if (!fs.existsSync("./codefiles")) {
  //     fs.mkdir("./codefiles", (err) => {
  //       if (!err) {
  //         console.log(err);
  //       } else {
  //         console.log("created a new floder to store code files");
  //       }
  //     });
  //   }

  //   adding a code to code.c file
  fs.writeFile(outputPath, code, (err) => {
    if (!err) {
      console.log("code added to file");
    } else {
      console.log(`failed to add code to file ${err}`);
    }
  });

  //executing the code .c
  //   exec(`cd ${outputPath} && gcc code.c && a.exe`, (err, stdout, stderr) => {
  //     if (err) {
  //       console.log("this is normal error");
  //       console.log(err);
  //     }
  //     if (stderr) {
  //       console.log("this is standard error");
  //       console.log(stderr);
  //     }
  //     if (stdout) {
  //       console.log(stdout);
  //     }
  //   });

  exec(`cd codefiles && gcc code.c && a.exe`, (err, stdout, stderr) => {
    if (stderr) {
      console.log("this is standard error");
      output = stderr;
      console.log(stderr);
      res.json({ output });
    }
    if (stdout) {
      console.log(stdout);
      output = stdout;
      res.json({ output });
    }
  });
}
module.exports = handlepost;
