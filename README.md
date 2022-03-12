# Task Manager (RAVN)

With this task manager, you can organize your tasks using **Agile Methods**, specifically using a **Kanban** board. You can create tasks with estimated points, tasks, and due dates and assign them to other team members. The kanban board has an **automated saved** so you don't have to care about it. Finally, on the "MyTask" page, you can **search** your tasks easily with a filter.

**Preview:** https://task-manager-ravn.vercel.app/app/dashboard

**Dashboard Page**
![Dashboard Page](https://res.cloudinary.com/dvcpjgixy/image/upload/v1647107668/2022-03-12_11h10_59_jw4evw.png)

**My Tasks Page**
![My Task Page](https://res.cloudinary.com/dvcpjgixy/image/upload/v1647107668/2022-03-12_11h11_06_m58dln.png)

## Setup

 1. Clone the git repository
	 + `$ git clone https://github.com/RicardoGA18/Task-Manager-RAVN.git`
 2.  Install the dependencies
	 +	`$ yarn` or `$ npm install`
3.	Run locally at http://localhost:3000
	+	`$ yarn start` or `$ npm start`
4.	Build the app for production
	+	`$ yarn build` or `$ npm run build`

## About the technologies used

 - To develop this application I mainly used these technologies: ReactJS, Typescript, Styled-Components, and GraphQL with Apollo Client.
 - Firstly React is the most used frontend framework in the world and lets me create dynamic interfaces easily using components and hooks.
 - Typescript lets javascript be a typed language so helps me to write more legible code and apply good practices.  
 -  Styled-Components is a ReactJS library that lets me style my components using CSS in JS so I can use easily all the benefits of the components and their reactivity to create the UI.
 - I also used GraphQL because it let me create my custom queries to the backend and request only the data that I need.
 - Another reason I used GraphQL is Apollo Client. This GraphQL client let me make my queries and mutations using React Hooks and have Redux integrated so it's very optimized for use with React.
 - I also used other libraries to help me in specific tasks:
	 - Yup and Formik for form managed and validation.
	 - React-beautiful-dnd for creating the kanban board
	 - Eslint + Prettier for format my code.

## Project structure

    Src structure:
	    src
	    ├── components  # Reusable components
	    ├── graphql			# Queries and Mutations
	    ├── hooks				# Custom hooks 
	    ├── layouts			# Layouts for be used in the useRouter 
	    ├── pages				# Specific page components, no reusable
	    ├── routes			# Routes configuration using useRouter
	    ├── svg					# Save Svg as a components to change their properties easy
	    ├── theme				# Styled components theming and Global Styles
	    ├── utils       # Some help functions
	    └── ...
	
	Src folders structure:
		ssrc
	    ├── components  
		    ├── ComponentOne			# Every src level folder have an index file
		    ├── ComponentTwo			# where are rexported all the components
				├── ComponentThree		# of this folder for meke its imported easiest.
		    ├── index.ts
			    
    Component structure:
	    src
	    ├── components  
		    ├── ComponentExample
			    ├── index.tsx				# Main file where I export the component 
			    ├── styles.ts				# Styled Components
			    ├── types.ts				# Types for the component and styled components (optional)
					├── helpers.ts			# Help functions (optional)
	
     
  ## Style theming
In the theme folder are all the style configurations. It is based on the Figma design system that I received to do the challenge. This structure let me change all the appearance of the application only changing some variables.

    const theme = {
	    pallete: {
		    primary: {
			    1: #F4CCC8,
			    2: #EBA59E,
			    3. #E27D73,
			    [...]
		    }
		    [...]
	    }
    }

