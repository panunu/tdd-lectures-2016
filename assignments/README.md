# Assignments

## 1. Dr.Kobros Bait and Lure Calculator (TM)

A customer has reported a bug in Dr. Kobros's BALC app. They say if you  do not choose the size of the motor on your boat, the calculator freezes.

A QA Specialist at [Kobros Digital](http://dr-kobros.com/corporate) has tracked the problem to a function within the BALC application. To solve the problem, we have extracted the function, and a corresponding test. Your immediate job is to:

1. Reproduce the bug by creating a failing test with the mentioned erroneus input
2. Fix the bug, and pass the test

Are there other likely places where the program fails?

A rumor has been circulating the office that the aforementioned function is badly written, and might require some refactoring. Your secondary tasks are to:

3. Refactor the function, and perhaps extract some parts into separate, logical functions
4. Test the refactored/extracted functions
5. Ensure the original tests also pass

### How to start

Download or clone this repository, and check the folder [assignments/assignment-1-bait-and-lure](https://github.com/panunu/tdd-lectures-2016/tree/master/assignments/assignment-1-bait-and-lure). 

Run the tests by opening `test-tunner.html` in your browser.

See https://jasmine.github.io/2.5/introduction for test framework docs.

----------------------------------------------

## 2. Write a piece of software, tests first!

[Gaylord Lohiposki](https://www.linkedin.com/in/gaylord-lohiposki-8852a464), who is a dear fishing buddy of Markku Karhu, has asked Markku for a help.

Lohiposki's latest enterprise (which is also a bit fishy, to be honest) needs a new back-end logic for keeping track of a storage and such. The last piece of software, which Gaylord bought from Silk Road 3.0, did not turn out to be so robust after all, even if the price was low! It almost ruined his business.

Luckily Markku, who happens to teach a testing course in Metropolia, knows a bunch of able students who could do the job (and for free, of course). "They even know how to TDD, so the product will be top notch", said Markku to Gaylord. And behold, Gaylord was impressed. A contract was signed with a golden hand shake.

Luckily Mr. Lohiposki, a future POTUS-elect, has written specifications for the warehouse system, so this should be easy.

### Specifications

So, we have **a warehouse**. One, for now.

The warehouse is filled with boxes. We call single box... wait for it... **a box**. A box has *a weight, in grams*. In this business, this is very important.

Warehouse can *take boxes in* or *send them out*. Where they came from or where they go, we do not care.

But we need to be able to track the amount. Therefore I want to have an automated **supervisor**. It knows *how many boxes the warehouse has at the moment*, and *how many have we received* and *sent* for the lifetime of a warehouse.

Also, I would like to get some special reporting. I want to know how much money is currently in my warehouse.
Every *100 grams in a box* is worth *70 dollars*. And for every box, we count *100 grams extra weight* instead of the actual weight. And now I want a feature for calculating the *total amount in dollars in the warehouse*.

### Again, tests first!

Remember, Gaylord demands **tests first**! His Kopi Luwak business is very dear to him.

### How to start

You can set up a testing environment yourself or check out the folder [assignments/assignment-2](https://github.com/panunu/tdd-lectures-2016/tree/master/assignments/assignment-2/Warehouserizer) which contains a Java (NetBeans) project.
