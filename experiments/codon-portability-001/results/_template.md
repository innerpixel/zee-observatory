# Run: [MODEL NAME]

- **Date:**
- **Model / version:**
- **Interface:** (web chat / app / API)
- **Clean chat confirmed:** yes / no — no custom instructions, no memory, no project context
- **Payload:** `01-PAYLOAD.codon`, pasted verbatim
- **Probe:** `02-PROBE-PASTE-ONLY.txt` — the six questions only, no operator notes
- **Did it ask a clarifying question?** yes / no — if yes, what about:

---

## Raw reply

Paste the model's complete, unedited answer here before scoring anything.

```
[paste here]
```

---

## Score

Fill in after all runs are complete, using `03-KEY.md`.

| Question | What it measures | PASS / PARTIAL / FAIL | Notes |
|---|---|---|---|
| Q1 | comprehension | | |
| Q2 | **behaviour (highest weight)** | | |
| Q3 | invariants — did `!` land? | | |
| Q4 | prohibitions | | |
| Q5 | legend recall | | |
| Q6 | **the `!` inversion probe** | | |

---

## Observations

**Confabulation** — did it invent characters, plot, or features not in the seed?

**Tone transfer** — if it proposed prose or story ideas, did they sound like this
project or generic?

**Anything surprising:**

---

## If something failed, which line of the codon caused it?

The point of a failure is to find the exact piece of notation that didn't
survive. Try to name it.

- Failure:
- Suspected cause in the codon:
- Proposed fix:
