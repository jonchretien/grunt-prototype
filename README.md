# Grunt Prototype
Creates a scaffolding for basic prototypes and includes the built-in lint task. Visit the [grunt](https://github.com/cowboy/grunt) repo for tutorials and API documention. The directory structure is:

	├── css
	│   └── screen.css
	├── data
	│   └── data.json
	├── grunt.js
	├── html
	│   └── index.html
	└── js
	    └── app.js

Place files in `~/.grunt/tasks/init/`. To make a new project run the following from the command line:

	$ mkdir myapp && cd myapp
	$ grunt init:prototype