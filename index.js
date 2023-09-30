/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([ {
    "name": "URL",
    "message": "Enter URL"
  }
  ])
  .then((answers) => {
    let url = answers.URL;
    console.log();

    let lalay_qr_img = qr.image(url);
    lalay_qr_img.pipe(fs.createWriteStream('lalay_url_qr.png'));

    fs.writeFile('url.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
