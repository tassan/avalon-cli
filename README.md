# Avalon CLI

Avalon CLI is a simple, interactive command-line tool for Avalon CMS. It provides three commands:

- `hello`: Displays a greeting message and an introduction to Avalon CMS.
- `merlin`: Shows the famous "Is dangerous to go alone. Take this." message along with an ASCII sword.
- `markdown-to-html`: Converts Markdown files to HTML with a simple command.

Avalon CMS is a static blog generator that lets you manage blog posts in Markdown and deploy them as static websites. The Avalon CLI provides a simple way to get started with this CMS.

## Features

- **`hello`**: Displays a friendly introduction to Avalon CMS.
- **`merlin`**: Prints an ASCII sword with the iconic "Take this" message.
- **`markdown-to-html`**: Converts a Markdown file into a styled HTML page.
- **Minimalistic CLI**: Simple, easy-to-use commands for quick interaction with Avalon CMS.
- **Ready for npm and GitHub Pages**: The tool can be used for setting up static blog sites with minimal setup.

## Installation

You can use **Avalon CLI** directly with `npx` without needing to install it globally:

```bash
npx avalon-cli hello
npx avalon-cli merlin
npx avalon-cli markdown-to-html <inputMarkdownFile> <outputHtmlFile>
```

Alternatively, you can install it globally via npm:

```bash
npm install -g avalon-cli
```

Then, you can run the commands like so:

```bash
avalon-cli hello
avalon-cli merlin
avalon-cli markdown-to-html <inputMarkdownFile> <outputHtmlFile>
```

## Commands

### `hello`

The `hello` command displays a message introducing **Avalon CMS**:

```bash
npx avalon-cli hello
```

Output:

```
Hello! Welcome to Avalon CMS.
Avalon CMS is a simple, lightweight, and flexible static blog generator.
It allows you to manage blog posts in Markdown with metadata, and deploy them as a static website.
```

### `merlin`

The `merlin` command prints the message:

```bash
npx avalon-cli merlin
```

Output:

```
Is dangerous to go alone. Take this.

      /| ________________
O|===|* >________________>
      \|
```

### `markdown-to-html`

The `markdown-to-html` command converts a Markdown file to an HTML file:

```bash
npx avalon-cli markdown-to-html <inputMarkdownFile> <outputHtmlFile>
```

Example:

```bash
npx avalon-cli markdown-to-html example.md example.html
```

This command reads the `example.md` Markdown file and generates a complete HTML page saved as `example.html`.

## Development

1. Clone the repository:

```bash
git clone https://github.com/tassan/avalon-cli.git
cd avalon-cli
```

2. Install dependencies:

```bash
npm install
```

3. Run tests (to check that your commands work correctly):

```bash
npm test
```

### Running Tests

Avalon CLI comes with Jest-based tests to check the outputs of the commands. These tests ensure that `hello`, `merlin`, and `markdown-to-html` commands work as expected.

You can run the tests using:

```bash
npm test
```

## License

This project is licensed under the MIT License.

## Repository

[GitHub Repository](https://github.com/tassan/avalon-cli)

For bug reports or feature requests, please create an issue in the [GitHub Issues](https://github.com/tassan/avalon-cli/issues) section.

---

**Avalon CLI** is a fun and easy-to-use tool for introducing people to Avalon CMS and working with Markdown. Enjoy using it!
