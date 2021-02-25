# The task

The task is to accept a set of commands and then simulate whether an object can move according to these commands without falling off the table it stands on.

# Quick start

## If you have NodeJs v14+ installed

Run CLI command `npm run dist` from the repo's root.

## If you do not have NodeJs installed

At the moment this application is distributed only as a command line based program. In order to run it, you must install [NodeJs, LTS v14+](https://nodejs.org/en/).
After that, you can run CLI command `npm run dist` from the repo's root.

# Assumptions

## About the environment

The task's brief states that the program should

1. be a command line based program
2. read from stdin and write to stdout
3. if client-side JavaScript is used, then the browser console should be used instead of the command line

Based on these requirements, it is assumed that they are incorrect, because:

- client-side JavaScript cannot be used in command line based programs (then a web-based application should have been requested if client-side JavaScript to be used)
- there is no standard input in the browser: either user input through interaction with DOM elements is used or you need to access the JavaScript shell of a specific JS engine of a specific browser (which is not what a typical application's user would want to do). The combination of taking input through `stdin`, and giving output through the puppeteered browser would create a bad User Experience, since the user would need to constantly switch focus between different interfaces.

Based on this assumption, the following steps were taken:

- development to be done with server-side JavaScript
- `readline` Node module to be used as an interface for managing `stdin/stdout` related actions
