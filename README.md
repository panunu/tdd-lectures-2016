![TDD](tdd.png?raw=true "TDD")

# TDD in Metropolia, November 2016

By Joonas Pajunen, Panu Leppäniemi / [Fraktio](https://fraktio.fi).

## Basics

1. Test
2. Code
3. Refactor.

Repeat! Keep the loop as fast as possible. That's it :-)

## Examples of finished assignment

- [Assignment 1](https://github.com/panunu/tdd-lectures-2016/tree/assignment-1-refactor/assignments/assignment-1-bait-and-lure)
- [Assignment 2](https://github.com/panunu/tdd-lectures-2016/tree/assignment-2/assignments/assignment-2/Warehouserizer)

## Collection of (useful) links

- Short and simple video tutorial on JUnit (https://www.youtube.com/watch?v=lYnMyi81hrs)
- What is IOC? What about Dependency Injection? http://martinfowler.com/articles/injection.html
- Ok, I got IOC. What now? Well, you can use e.g. mocks to replace actual dependencies (like calls to an actual space station). Mocks, you say? What the heck are those? Martin Fowler writes about this concept here: http://martinfowler.com/articles/mocksArentStubs.html 
- So, how much to test? I wonder what Kent Beck thinks about this... http://stackoverflow.com/questions/153234/how-deep-are-your-unit-tests/153565#153565
- Martin Fowler's short opinion about different kind of tests, especially UI tests. http://martinfowler.com/bliki/TestPyramid.html
- Testing philosophy (it's more understandable once you have been writing tests for a while): http://www.agitar.com/downloads/TheWayOfTestivus.pdf
- There was also a question about whether TDD is a viable option if the client (or PO) is unsure about what the product/logic/whatnot should be like. If there's at least some kind of understanding about the end result, then TDD can reduce brittleness which might become more obvious once you start making the adjustments. But if there is a lot of uncertainty, one should use something like https://www.invisionapp.com or https://popapp.in to validate the idea first. Because coding is expensive.
- Ok, school is one place to do some networking but I suggest you check events like https://meetabit.com/communities/2 where attending is usually free. You meet people and probably learn something :-)

