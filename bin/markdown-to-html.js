// Import required modules
const fs = require("fs");
const path = require("path");
const markdown = require("markdown-it")();

// CLI script to convert Markdown to HTML
const convertMarkdownToHtml = (inputFile, outputFile) => {
  // Read the Markdown file
  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }

    // Convert Markdown to HTML
    const htmlContent = markdown.render(data);

    // Create a complete HTML template
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${path.basename(inputFile, path.extname(inputFile))}</title>
</head>
<body>
${htmlContent}
</body>
</html>`;

    // Write the HTML to the output file
    fs.writeFile(outputFile, htmlTemplate, "utf8", (err) => {
      if (err) {
        console.error(`Error writing file: ${err.message}`);
        process.exit(1);
      }
      console.log(`HTML file successfully created at ${outputFile}`);
    });
  });
};

// Handle CLI arguments
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error("Usage: node script.js <inputMarkdownFile> <outputHtmlFile>");
  process.exit(1);
}

const [inputFile, outputFile] = args;
convertMarkdownToHtml(inputFile, outputFile);
