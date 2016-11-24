# Assignments


# 2. Write a piece of software, tests first!

[Gaylord Lohiposki](https://www.linkedin.com/in/gaylord-lohiposki-8852a464), who is a dear fishing buddy of Markku Karhu, has asked Markku for a help.

Lohiposki's latest enterprise (which is also a bit fishy, to be honest) needs a new back-end logic for keeping track of a storage and such. The last software, which Gaylord bought from Silk Road 3.0, did not turn out to be so robust after all, even if the price was low!

Luckily Markku, who happens to teach a testing course in Metropolia, knows a bunch of able students who could do the job (and for free, of course). "They even know how to TDD, so the product will be top notch", said Markku to Gaylord. And behold, Gaylord was impressed. A contract was signed with a golden hand shake.

## Specifications

Luckily Mr. Lohiposki, a future POTUS-elect, has written specifications for the warehouse system, so this sould be easy.

So, we have **a warehouse**. One, for now.

The warehouse is filled with boxes. We call single box... wait for it... **a box**.
Warehouse can take boxes in or send them out. We need to be able to track them.
So we need to know *how many boxes the warehouse has at the moment*, and *how many have we received* and *sent* for the lifetime of a warehouse.

## Tests first!

Remember, Gaylord demands **tests first**! So no code before the screen is red.
