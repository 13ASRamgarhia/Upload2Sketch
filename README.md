

# [Optic eSports](https://optic-esports.netlify.app/)

[Click here](https://optic-esports.netlify.app/) for preview live site.\
Optic eSports is a react app which was designed for learning purpose. This project is about a static website for an (fictional) eSports organization - Optic eSports.

![Image](https://github.com/13ASRamgarhia/Optic-eSports/blob/main/snapshot.png)

> Time taken to develop the project from writing npx create-react-app on Windows powershell to deploying the app on netlify and excluding the documentation part is 10 hours and a few minutes.

> [Click here](https://www.linkedin.com/in/13asr/) to contact the developer

### Technologies and methods used

The app is developed using create-react-app\
The designing part is done using `Tailwind CSS` and `Semantic UI`\
App does contain a TOP LOADING BAR, which shows up during route changes, added using `react-top-loading-bar` package

Since, this is a single page application, the in-app routing is implemented using `react-router-dom`

`Navbar` has brand name on its left side, and a navigation menu at right side. Navigation menu contains Links for in-app pages.

Landing page contains a header with a background image a `Book an appointment` button, which can be used to open a modal which contains appointment form.

About page contains team details which is fetched from a list. The team list is a `fake API` which was added for the sake of the project.

Contact page contains a several options using which user can contact the company, and a map showing company location (a random location on map)

### Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Steps to run the app

Anyone can use the app by clicking on the title (iNotebook) at the top of this documentary.
If one wants to run this app on his local machine for developement purpose, he can freely download the source code and start the development.

PRE-REQUISITE: VS Code, Node.js and proficiency in MERN Technologies

Note: If you recently installed Node.js, I would recommend you to restart your pc.

After downloading the app, open it in VS Code and type `npm install` in in-built cmd. This will install all necessary dependencies to run the app.
Once all dependecies are installed, run start command `npm start` to run app in development mode.
