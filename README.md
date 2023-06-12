# react-todo-app
Small React project to learn the basics of the React framework. This project taught me proper use of hooks and of functional components. 

## Features

- Adding new todo items
- Deleting todo items
- ~~Editing todo items~~
- ~~Persistent todo items~~

## Tools
The project was set up using the Vite toolchain with TypeScript and the React framework using the command `yarn create vite`. 
Yarn was chosen over npm for its speed and security. 
The following dependencies were also installed which are independent of the Vite toolchain:
- `react-fontawesome` for the trashcan and edit icons
- `nanoid` for generating unique string IDs

## Running the App

### Requirements

- `git`
- `yarn`

### Quickstart
```sh
git clone https://github.com/Gargoth/react-todo-app.git
cd react-todo-app
yarn
yarn dev
```

#### 1. Clone the repository using your preferred method.

Using `git`
```sh
git clone https://github.com/Gargoth/react-todo-app.git
```
Using `gh`
```sh
gh repo clone Gargoth/react-todo-app
```

#### 2. Install dependencies

First, enter the directory of the newly cloned repository.
```sh
cd react-todo-app
```

Then run the following command to install dependencies. If you encounter an error, make sure `yarn` is properly installed.
```sh
yarn
```

#### 3. Locally run the webapp

While inside the directory, run the following command to run the webapp
```sh
yarn dev
```

The previous command should start the server which you can access by going to the url displayed in the terminal. This usually defaults to http://localhost:5173/
