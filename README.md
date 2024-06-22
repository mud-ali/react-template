# React Template

This repo contains my personal template for ReactJS Multi-page applications (MPAs) that do not use
NextJS. While Next works nicely, smaller projects do not necessarily need the overhead of a full
frontend framework. This template uses React and the React Browser Router.

## Development

To get started, clone this repo, cd into the folder and install the dependencies:

```bash
git clone https://www.github.com/mud-ali/react-template.git
cd react-template
npm install
```

Then, run the development server:

```bash
npm run dev
```

For the most part, you should not need to work in the root of the `src` directory, except for minor tweaks to `index.css`. However, note that `index.css` will apply styles *globally* to the site. If you need to add styles to a specific page, you should create a new CSS file in the `src/css` directory and import it into the page's JSX file.


## Adding a new page

1. Create a new file in the `src/pages` directory. The file should be named after the page you want to create. For example, if you want to create a page called "About", you should create a file called `About.jsx`.

2. In `src/router/pagesData.jsx`, add a new entry to the pagesData array, following the existing template.

- `path`: (string) the url path that corresponds to the page
- `element`: (JSX Element) the React component that contains the code for this page. Make sure to import it before using it.
- `title`: (string) a unique name for this page.

```jsx
{
    path: "contact",
    element: <Contact />,
    title: "Contact Us"
},
```

3. Create a correspondingly named css file in `src/css`. For example, if you created a page called `About.jsx`, you should create a file called `About.css`. Capitalize the name if it is for a page, and use camelCase for the name if it is for a component.

4. Don't forget to import the css file into the page's JSX file. For example, if you created a page called `About.jsx`, you should add the following line to the top of the file:

```jsx
import '../css/About.css';
```

## Adding a new component

1. Create a new file in the `src/components` directory. The file should be named after the component you want to create, in PascalCase.

2. Create a correspondingly named css file in `src/css`. Use camelCase for the name, and remember to import the css file into the component's JSX file.

```jsx
import "../css/componentName.css";
```

3. Remember to import the component into the page's JSX file.

```jsx
import MyComponent from '../components/MyComponent';
```

## Contributing 

Make sure to create a new repository and use that as your projects remote.

Assuming a system of branches and pull requests for the development process, the following commands can be used to push untracked 
changes on the local `main` branch to a remote branch called `my-branch-name`.

```bash
git add .
git stash
git pull origin main
git checkout -b my-branch-name
git stash pop
git commit -m "My commit message"
git push origin my-branch-name
```