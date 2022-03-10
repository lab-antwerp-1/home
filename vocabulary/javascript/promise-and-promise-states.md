# promise and promise states

## intro

> in order to understand promises we must first understand why promises are
> needed. When we run a program which relies on multiple events happening at
> different times we have two options; we can either wait for each event to
> conclude before moving to the next (synchronous), or we can launch multiple
> events at the same time and set up protocols for how to interact with each
> event, when and if they conclude(asynchronous). this is why we need promises.

## promises

### description

> promises are objects created to help us set protocols for the asynchronous
> events described above.

- promises 'store' the event data set up by the program.
- promises receive instructions set by the program on how to handle the event
  data at its various states.

### promise states

> let's say we created a promise for a fetch event where the program calls for
> data from an external source. our promise might exist in one or more of three
> states:

#### pending

> a pending promise is a promise for an ongoing event; in the example above our
> promise will be pending while the data from the external api hasn't been
> received yet.

- the program must define a protocol for how to handle the data once it is
  received and/or rejected or the promise will remain pending forever.

#### resolved

> once the data has been received from the external source it can be handled by
> the protocols set by the program. we can now say that the promise was
> resolved.

- multiple protocols could be assigned to a single promise event on what is
  called a 'chain'.

#### rejected

> promises do not always resolve in a way that is compatible to the protocols we
> have set up. for example; what if the external source does not have the data
> the fetch event is looking for? in this case we can say the promise was
> rejected, and our program should be able to handle unexpected or undesirable
> outcomes without them breaking the rest of the code.

- reject protocols are set by the program to handle intentional promise outcomes
  that are incompatible with the resolve protocols.
- reject protocols also handle any unintentional errors that may occur from the
  promise event.

### references

- for more information check out this
  [video](https://www.youtube.com/watch?v=QO4NXhWo_NM&t=4s)
