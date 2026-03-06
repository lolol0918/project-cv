<p align="center">
    <img src="https://img.shields.io/badge/CV%20Builder-React-%2361DAFB?style=for-the-badge&logo=react&logoColor=white" alt="CV Builder" width="30%">
</p>
<p align="center">
	<em><code>Build your professional CV in React — fast, modern, and deployable!</code></em>
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/lolol0918/project-cv?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
  <img src="https://img.shields.io/github/last-commit/lolol0918/project-cv?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/lolol0918/project-cv?style=default&color=0080ff" alt="repo-top-language">
  <img src="https://img.shields.io/github/languages/count/lolol0918/project-cv?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

## Overview

<code>Project-CV is a modern React-based CV builder that allows users to create, edit, and preview professional resumes in real time. It features a clean interface, live PDF export, and a responsive design suitable for both desktop and mobile.</code>

---

## Features

<code>
- Build and customize CV sections with a live preview
- Edit bullet points and section content interactively
- Export CVs as PDFs
- Fully responsive layout for desktop and mobile
- Built with React and Tailwind CSS for fast and modular development
</code>

---

##  Project Structure

```sh
└── project-cv.git/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── CVBuilder.jsx
    │   ├── assets
    │   ├── components
    │   ├── data
    │   ├── helpers
    │   ├── index.css
    │   └── main.jsx
    ├── tailwind.config.js
    └── vite.config.js
```


### Project Index
<details open>
	<summary><b><code>PROJECT-CV.GIT/</code></b></summary>
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td><code>PostCSS configuration for Tailwind CSS processing</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>Auto-generated lock file for npm dependencies</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td><code>Tailwind CSS configuration file</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/vite.config.js'>vite.config.js</a></b></td>
				<td><code>Vite build and development server configuration</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/package.json'>package.json</a></b></td>
				<td><code>Project metadata and npm scripts</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/index.html'>index.html</a></b></td>
				<td><code>Main HTML entry point of the app</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>ESLint configuration for code linting</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/index.css'>index.css</a></b></td>
				<td><code>Global CSS styles</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/App.css'>App.css</a></b></td>
				<td><code>App-specific CSS</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/App.jsx'>App.jsx</a></b></td>
				<td><code>Main React component rendering the app</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/main.jsx'>main.jsx</a></b></td>
				<td><code>React entry point for mounting the app</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/CVBuilder.jsx'>CVBuilder.jsx</a></b></td>
				<td><code>Component for building and editing CV sections</code></td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CollapsibleSection.jsx'>CollapsibleSection.jsx</a></b></td>
						<td><code>Reusable collapsible UI section</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/Header.jsx'>Header.jsx</a></b></td>
						<td><code>App header component with title and nav</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/BulletsEditor.jsx'>BulletsEditor.jsx</a></b></td>
						<td><code>Component to edit bullet points in CV sections</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/Field.jsx'>Field.jsx</a></b></td>
						<td><code>Reusable input field component</code></td>
					</tr>
					</table>
					<details>
						<summary><b>CVPreview</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/NavBar.jsx'>NavBar.jsx</a></b></td>
								<td><code>Top navigation bar in CV preview</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/TwoCol.jsx'>TwoCol.jsx</a></b></td>
								<td><code>Two-column layout for CV sections</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/BulletList.jsx'>BulletList.jsx</a></b></td>
								<td><code>Displays bullet points in CV preview</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/SkillRow.jsx'>SkillRow.jsx</a></b></td>
								<td><code>Displays individual skill with rating</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/CVPreview.jsx'>CVPreview.jsx</a></b></td>
								<td><code>Full CV preview component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/Section.jsx'>Section.jsx</a></b></td>
								<td><code>Individual CV section in preview</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/components/CVPreview/EditorPanel.jsx'>EditorPanel.jsx</a></b></td>
								<td><code>Panel for editing CV content in preview</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>helpers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/helpers/cvHelpers.js'>cvHelpers.js</a></b></td>
						<td><code>Helper functions for CV data manipulation</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/lolol0918/project-cv/blob/master/src/helpers/pdfHelpers.js'>pdfHelpers.js</a></b></td>
						<td><code>Helper functions for PDF export</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with project-cv.git, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install project-cv.git using one of the following methods:

**Build from source:**

1. Clone the project-cv.git repository:
```sh
❯ git clone https://github.com/lolol0918/project-cv.git
```

2. Navigate to the project directory:
```sh
❯ cd project-cv.git
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run project-cv.git using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

---

##  Contributing
<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/lolol0918/project-cv.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). For more details, see the [LICENSE](./LICENSE) file.

---

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) — for the foundational guidance in building React projects and structuring apps.
- [Tailwind CSS](https://tailwindcss.com/) — for the utility-first CSS framework used for styling.
- [Shields.io](https://shields.io/) — for the GitHub badges in this README.

