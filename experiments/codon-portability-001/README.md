# Experiment 001 — Does the codon travel?

**Time needed:** about 10 minutes per model.
**What you need:** a chat window with Mistral (and ideally one or two other non-Claude models).
**What you'll have at the end:** the first real evidence about whether Lingua Franca's core claim is true.

---

## What we're testing, in plain language

Lingua Franca claims that a `.codon` file is *self-contained*. The idea is that
because the codon carries its own decoder — that `## Decode` block at the top
explaining what `::` and `!` and `<>` mean — you should be able to hand it to
**any** AI, in a **brand new conversation**, with **no other context**, and it
will immediately understand the project well enough to work on it correctly.

That's a strong claim. Here's the problem with the evidence we have for it:

- Every codon so far was written by you *with Claude helping*. So the notation
  is probably shaped, without anyone intending it, around what Claude finds
  natural. Another Claude "getting it" might just be a family resemblance.
- And every time a Claude has read your codon, it read the fold and the guide
  and the source code within about a minute. So we've never actually seen what
  the codon alone can carry.

So the claim has never been tested under the conditions it describes.
This experiment tests it.

**The core idea:** we hand Mistral the codon and nothing else, ask it six
questions, and check its answers against what the codon actually says.
If it can tell us the project's rules and what to do next, the claim holds.
If it can't, we find out exactly which part of the notation failed — which
tells us what to fix.

---

## The one rule that matters

**Do not help the model.**

This is genuinely hard, because when you watch something struggle, the instinct
is to clarify. But every clarification you give is a piece of context the codon
was supposed to carry by itself. If you explain, you're no longer testing the
codon — you're testing you plus the codon, and that's the thing we already know
works.

Concretely, this means:

- Don't edit the payload file to make it clearer.
- Don't add a sentence of introduction before pasting it.
- Don't answer if the model asks you a clarifying question (there's a script
  for that in Step 4).
- Don't tell it it's wrong and give it another go.

A model that fails is not a bad result. **A failure is the most useful outcome
we can get**, because it points at the exact line of notation that didn't
survive the trip. More on that at the end.

---

## The files in this folder

| File | What it's for |
|---|---|
| `README.md` | This guide. Start here. |
| `01-PAYLOAD.codon` | The thing you paste. A frozen copy of `project.seed.codon`. |
| `02-PROBE.md` | The six questions you paste after it. |
| `03-KEY.md` | The answer key. **Never paste this to the model.** |
| `results/_template.md` | Copy this per model, fill it in. |

**About the payload:** it is a byte-for-byte copy of `project.seed.codon` as of
commit `cca6efb`. I deliberately did *not* add a header or a note explaining
what it is, because that would change what we're testing. It's frozen here so
that when you update the real seed later, this experiment still makes sense.

---

## Running it

### Step 1 — Open a clean conversation

Go to Mistral (or whichever model) and start a **brand new chat**.

Check that there are no custom instructions, no system prompt, no saved memory
or personalization active. If the platform has a "projects" or "personalization"
feature, make sure you're outside it. Any of those would leak context in.

### Step 2 — Paste the payload

Open `01-PAYLOAD.codon`, select everything, paste it into the chat.

**Nothing before it. Nothing after it.** No "hey, can you look at this." No
"this is a project file." Just the raw contents of the file.

Don't send yet if you can help it — go straight to Step 3 and send both together.
If your interface makes that awkward, sending the payload alone first is fine.

### Step 3 — Paste the probe

Open `02-PROBE.md` and copy the block marked **PASTE THIS**. Paste it directly
after the payload, in the same message if you can.

Send.

Use the exact same wording for every model. If you improvise the questions
differently for each one, you can't compare the answers.

### Step 4 — Don't help it

If the model asks you something — "what kind of project is this?", "do you want
me to focus on the technical or creative side?", "can you tell me more about
Chapter 02?" — do not answer it.

Reply with exactly this, then stop:

> Use only the document I gave you. Please answer the six questions.

If it asks again, repeat the same line. Note in your results file that it asked,
and what it asked about — **that's data**. A model that has to ask what the
project is has already told you something important about whether the codon
stands alone.

### Step 5 — Save the raw answer

Copy the model's complete reply into a new file:
`results/mistral.md` (copy `results/_template.md` as your starting point).

Save the whole thing, unedited, before you score anything.

### Step 6 — Repeat for other models

Same payload, same probe, same wording. Fresh chat each time.
Two or three models total is plenty. Good second choices: Gemini, GPT, DeepSeek,
Llama — anything that isn't Claude.

### Step 7 — Score it, all at once

Now open `03-KEY.md` and go through the answers.

Do this **after** all your runs, not between them. If you score Mistral first
and see it fail on question 3, you'll unconsciously read the next model's
answer more generously. Score them together, in one sitting.

Mark each question **PASS**, **PARTIAL**, or **FAIL** using the key.

---

## What to look at first when the answers come in

Two questions carry most of the signal:

**Question 2 is the important one.** It asks the model what it would *do next*.
The codon says the next task is to write Chapter 02 as prose, before building
any interface. If the model says that — good, the codon governed its behaviour.
If it proposes building a Chapter 02 page component, or adding a comment
section, or making a quiz, then the codon was *read* but it didn't *steer*.

That distinction is the whole point of the experiment. It's easy for a model to
summarize a document accurately and then ignore it completely.

**Question 6 is where I expect it to break.** In your codon, the `!` symbol is
doing two different jobs:

- as a heading marker, it means *invariant* — `## Intent!` = "this section
  cannot be changed"
- inside a line, it means *not* — `narrative !feed platform` = "the narrative
  does not feed the platform"

The `## Decode` block only explains the first one. There's nothing in the codon
telling a fresh reader that `!feed` means "does not feed."

Claude infers it from context — but Claude helped invent the notation, so that's
exactly the family resemblance we're trying to control for. A cold model may
well read `narrative !feed platform` as "the narrative feeds the platform, and
this is important," which reverses the meaning of one of your core constraints.

I've written this prediction down *before* the run, in the transmission file, so
we can't move the goalposts afterward.

---

## What each outcome means

**Everything passes.** The claim is real, and you now have external evidence for
it — which is the single most valuable thing LF could own. Write it up.

**Some specific things break.** This is the best outcome, genuinely. Each
failure points at one missing or ambiguous piece of the legend. If all three
models trip on `!`, the fix is one extra line in the `## Decode` block, and you
re-run to confirm. The test doesn't just grade the notation — it debugs it.

**Most things break.** Then L4 isn't universal, it's Claude-native. That's still
worth knowing, and the honest fix is to narrow the claim: "portable across
sessions within a model family." A true narrow claim is worth more than a false
broad one, and LF is stronger for saying so.

**There is no outcome where you lose.** That's why it's worth the ten minutes.

---

## One thing to do afterward

Run this **before** writing any more codons. If there's a hole in the legend,
every codon you write between now and finding it inherits the same hole.

---

## Also worth writing down

You mentioned you'd already tried something like this in another project.
If you can remember roughly what happened — especially *where* it went wrong —
put it in `results/prior-informal.md`. Even a rough memory is real evidence, and
it might mean we should probe a known failure directly instead of predicting it.
