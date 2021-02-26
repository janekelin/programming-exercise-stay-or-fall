// @ts-check

const { Point } = require('../components/Point');

const MESSAGES = {
  WELCOME: `
    Warmly welcome to the Stay-or-fall game!
    In this game you will provide a comma-separated list of commands,
    that will control moving on a table.
    First we will ask you to specify the size of the table,
    and the starting position of the object.
    After that you can provide a list of commands, 
    and we will tell you if you stayed or fell!
    Good luck!
`,
  PROMPT_TABLE_SIZE: `
Let's do it!
So which size of the table would you like to have?
Provide your answer as two comma-separated integers, for example: 4,2
`,
  PROMPT_START_POSITION: `
Great!
And at which position would you like to start?
Provide your answer as two comma-separated integers within the range of your table, 
for example for a table with 4,2 size, the top left position would be 0,0 
and bottom right position would be 3,1
`,
  PROMPT_COMMANDS: `
Now it's time for the real play.
Provide a comma-separated list of integers that will move your object on the table.
Finish your list with 0.
The Command List:
0 = quit simulation and print results
1 = move forward one step
2 = move backwards one step
3 = rotate clockwise 90 degrees (eg north to east)
4 = rotate counterclockwise 90 degrees (eg west to south)
NB! You start by facing north.
`,
  RESULT: `
Here are your results:
`,
  LOST: `
You fell of a table and lost. Good luck next time!
[-1;-1]
`,
  WON: `
You won! Your final position is:

`,
};

const DEFAULT_VALUES = {
  DEFAULT_STATE: {
    tableSize: {
      width: 3,
      height: 3,
    },
    // @ts-ignore
    startPosition: Point(0, 0),
    commands: [],
    // @ts-ignore
    endPosition: Point(0, 0),
    facing: 'whenFacingNorth',
  },
};

module.exports = { ...MESSAGES, ...DEFAULT_VALUES };
