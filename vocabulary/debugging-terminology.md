# Some Debugging Terminology

The following terms are used when describing debugging.

## Blue screen

When the system encounters a hardware problem, data inconsistency, or similar
error, it may display a blue screen containing information that can be used to
determine the cause of the error. This information includes the STOP code and
whether a crash dump file was created. It may also include a list of loaded
drivers and a stack trace.

## Crash dump file

You can configure the system to write information to a crash dump file on your
hard disk whenever a STOP code is generated. The file contains information the
debugger can use to analyze the error. This file can be as big as the physical
memory contained in the computer.

## Debugger

A program designed to help detect, locate, and correct errors in another
program. It allows the developer to step through the execution of the process
and its threads, monitoring memory, variables, and other elements of process and
thread context.

## Kernel mode

The processor mode in which system services and device drivers run. All
interfaces and CPU instructions are available, and all memory is accessible.

## Minidump file

Applications can produce user-mode minidump files, which contain a useful subset
of the information contained in a crash dump file. For more information, see
Minidump Files.

## STOP code

The error code that identifies the error that stopped the system kernel from
continuing to run.
