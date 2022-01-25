# Debugging Programs

A debugger is a program that allows you to step through another program one line
at a time. This is very useful when trying to identify incorrect code and
analyze how a program "flows". Key concepts include: Breakpoints, Stepping, and
Viewing data.

## In order to use the debugger you need to know about the following concepts

### Current Line

A computer can only do "one thing at a time". Thus the computer, when running
your program, always has the notion of the "current line". Usually, control of
the program flows from the current line to the next line down the screen, to the
next line, etc. This can be changed by function calls, if statements, loops, etc

### Breakpoints

Normally when you run a program, even in the debugger, it will start at the
beginning of the program and run until completion (or an error occurs).

Often you may know that the error occurs in a certain function (or part of your
program), but that function is not utilized by your code until long after the
start of the program. Breakpoints tell the debugger where to "halt" the
execution of your program so that you can see what is going on. This allows you
to quickly get to the proper location in your program.

### Stepping

Stepping is the action of "telling the debugger" to advance through your program
one line at a time. Remember, a computer program is many small steps combined to
form a large goal. It is often the case that one of these small steps is
"incorrect". To identify which step is incorrect, we "step" through the program,
looking at each line of code as we come to it, and seeing what effect this has
on the VARIABLES (really the data in the variables).

### Continuing Execution of the Program (giving control back to the computer)

The continue action tells the computer to "resume" the program (moving forward
through the program's code until another breakpoint is encountered or until the
program ends).

### Exiting the Debugger

Once you have used the debugger to find an error in your code you will want to:

1 - Fix the problem (re-write your code). 2 - Stop the current debugger session.
3- Perhaps put a breakpoint on the line you just (presumably) "fixed". 4- Start
a new debugger session to test your fix.
