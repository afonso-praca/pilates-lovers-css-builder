# pilates-lovers-css-builder

### Quickstart

    npm i -g grunt-cli

    cd pilates-lovers-css-builder
    npm i
    grunt

### Distributable build (minifies, etc.)

    grunt dist

### Folder structure

- `src` - most of your files will be here.
	- `style` - CSS and LESS source files
- `Gruntfile.coffee` - This is the configuration file for grunt. Contains all the build tasks.
- `build` - this folder will be created after you run a grunt task.

### Grunt VTEX

The Speedbag Gruntfile is actually quite empty.  
This is because all tasks are defined in the meta-project [grunt-vtex](https://github.com/vtex/grunt-vtex).  
If you want to contribute an improvement to a task, please do so on that repo.  
Your Gruntfile should only contain customizations that are very specific to your project.

------

### Common issues:

**EADDRINUSE** - Someone is already using one of the ports used by this app, either [connect](https://github.com/gruntjs/grunt-contrib-connect)'s 9001 or [LiveReload](https://github.com/gruntjs/grunt-contrib-livereload)'s 35729.
Shut down interfering services or change the ports on Gruntfile.coffee.

------
