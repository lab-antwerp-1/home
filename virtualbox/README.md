# VirtualBox Ubuntu HYF

If you are thinking of _installing LINUX on your desktop or laptop computer_, perhaps this is a very good starting point that will allow you to have a first contact with this operating system, learn it, use it, develop with it _without having to make hardware adjustments, partitioning your hard drive, or perform a physical installation_ of LINUX on your computer.

- [VirtualBox Ubuntu HYF](#virtualbox-ubuntu-hyf)
  - [What is VirtualBox ?](#what-is-virtualbox-)
  - [Pros & Cons of Virtual Machines](#pros--cons-of-virtual-machines)
  - [Needed Software](#needed-software)

## What is VirtualBox ?

Let’s assume that you are a Windows user who is interested in experimenting with Linux. But you are not sure how to go about partitioning disks.

> _Virtualbox is a software which allow users to run multiple operating system in a single machine. It can create and manage guest Virtual Machine_

What if you had another test computer on which you could try this out? What’s the worst that could happen? Disks crash? So what? It was a test computer anyway.

Oracle virtualbox is a software which allow users to run multiple operating system in a single machine and to freely switch between OS instances running simultaneously. It can create and manage guest Virtual Machine each with a guest operating system and its own virtual environment.

## Pros & Cons of Virtual Machines

__Advantages__

* Can use multiple operating system environments on the same computer.
  
* Virtual machines can provide an instruction set architecture, or ISA, structure different than the actual computer. The ISA serves as the interface between software and hardware.
  
* When you create your virtual machine, you create a virtual hard disk. So, everything on that machine can crash, but if it does, it won’t affect the host machine.
  
* There are security benefits to running virtual machines. For example, if you need to run an application of questionable security, you can run it in a guest operating system. So, if the application causes damage, then it will be only temporary after the guest is shut down.
  
* Virtual machines also allow for better security forensics by monitoring guest operating systems for deficiencies and allowing the user to quarantine it for analysis.

__Disadvantages__

* Virtual machines are less efficient than real machines because they access the hardware indirectly. Running software on top of the host operating system means that it will have to request access to the hardware from the host. That will slow the usability.
  
* When several virtual machines are running on the same host, performance may be hindered if the computer it’s running on lacks sufficient power. Your virtual machine still uses the resources of your host machine. The more powerful the host computer, the more quickly the virtual machine will run.
  
* A virtual machine can be infected with the weaknesses of the host machine. As an example, process isolation is a feature usually employed by operating systems. However, there are bugs that violate it. A regular computer devoid of virtual machines would then only be affected. But, a computer with a number of virtual machines would then infect each of those “machines” as well.
  
_So, the main reason a company would use a virtual machine is if they need to run separate operating systems on the same computer. This can be for a number of reasons, including if the current system isn’t sufficient for the needs of the company’s goals._

## Needed Software

[Oracle VirtualBox](https://www.virtualbox.org?target=_blank)
