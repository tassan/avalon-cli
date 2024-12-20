// Import required modules
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Jest test for the Markdown to HTML conversion script
describe("Markdown to HTML CLI Converter", () => {
  const inputMarkdown = path.join(__dirname, "test.md");
  const outputHtml = path.join(__dirname, "test.html");
  const markdownContent = `# Test Title\n\nThis is a **test** paragraph.`;
  const expectedHtmlContent = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>test</title>\n</head>\n<body>\n<h1>Test Title</h1>\n<p>This is a <strong>test</strong> paragraph.</p>\n</body>\n</html>`;

  beforeAll(() => {
    // Write a temporary Markdown file
    fs.writeFileSync(inputMarkdown, markdownContent, "utf8");
  });

  afterAll(() => {
    // Clean up temporary files
    if (fs.existsSync(inputMarkdown)) fs.unlinkSync(inputMarkdown);
    if (fs.existsSync(outputHtml)) fs.unlinkSync(outputHtml);
  });

  it("should convert Markdown to HTML correctly", (done) => {
    // Execute the CLI script
    exec(
      `node bin/markdown-to-html.js ${inputMarkdown} ${outputHtml}`,
      (error) => {
        if (error) {
          done(error);
          return;
        }

        // Read the generated HTML file
        const generatedHtml = fs.readFileSync(outputHtml, "utf8");

        // Validate the output matches expected HTML
        expect(generatedHtml.replace(/\s+/g, "").trim()).toBe(
          expectedHtmlContent.replace(/\s+/g, "").trim()
        );
        done();
      }
    );
  });
});
