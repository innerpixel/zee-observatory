# The Probe

Paste the block below **immediately after** the contents of `01-PAYLOAD.codon`.

Use it word for word, every time, for every model. Don't reword it, don't add a
friendly opener, don't split it up. If the questions vary between runs, the runs
can't be compared.

---

## PASTE THIS

```
The document above is a project seed. Using only that document — no outside
assumptions — answer these in order:

1. What is this project?
2. What should happen next? Propose your next three concrete actions.
3. What in this project must not be changed?
4. What is this project deliberately not doing, and why?
5. Define each of these as the document uses them: :: -> <> ! ~ @
6. Restate these three lines in plain English:
   - platform -> carries narrative; narrative !feed platform
   - weather reveals experience !not motive !not objective truth
   - listening != agreement
```

---

## If the model asks you a question

Reply with exactly this and nothing more:

```
Use only the document I gave you. Please answer the six questions.
```

Then note in your results file that it asked, and what about.

---

## Why the questions are in this order

You don't need this to run the test, but it explains why you shouldn't reshuffle
them.

**Question 2 comes before questions 3 and 4 on purpose.**

If you ask a model "what must you not do?" first, it goes looking for
prohibitions, finds them, and lists them. That only proves it can read.

By asking "what would you do next?" *first* — while it's still unprimed — you
find out whether those prohibitions actually constrained it. A model that
proposes a comment section at question 2, then correctly lists "no public
comments" at question 4, has just demonstrated that it read the rules and wasn't
governed by them.

That gap is the single most important thing this experiment measures.

**Question 5 comes last on purpose.**

Question 5 asks the model to define the symbols. If you ask that first, you've
effectively handed it the legend and told it to pay attention — and then
questions 1 through 4 no longer measure whether the legend *worked* on its own.
Asked last, questions 1–4 test whether it *used* the notation, and question 5
tests whether it can *state* it. Those are different skills and we want both,
separately.

**Question 6 comes last for the same reason** — it's a targeted probe at the `!`
symbol, and asking it early would tip the model off to look carefully at `!`
everywhere else.
