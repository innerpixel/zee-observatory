# Experiment 001 — Findings

**Run:** 2026-08-03 · payload `project.seed.codon` @ `cca6efb` · three models, two valid.

---

## The grid

| | Q1 comp | Q2 **behaviour** | Q3 invariants | Q4 prohibitions | Q5 legend | Q6 **`!` probe** |
|---|---|---|---|---|---|---|
| **Mistral** | PASS | PASS | PARTIAL | PASS | PASS | **PASS** |
| **ChatGPT** | PASS | PASS | PASS | PASS | PASS | **FAIL** |
| **Groq** | — | *(passed a harder version, see below)* | — | — | — | VOID |

---

## Headline

**The core claim holds.** Two different model families, cold, with nothing but
the codon, both correctly identified the project and both named the right next
action — *write Chapter 02 as prose, before any interface work*. Neither
proposed a single thing from the `avoid:` list. Neither confabulated.

That is the first external evidence LF has ever had. Before today: 1 project,
1 model family, 0 clean reads. Now: 2 clean reads, 2 non-Claude families, both
governed by the document.

**Q2 is the one that matters, and Q2 passed twice.** The prohibitions did not
merely get read — they bound behaviour. That is the difference between a
document that is summarized and a document that governs.

---

## The one real defect: `!` is two symbols wearing one glyph

**Predicted before the run. Confirmed on ChatGPT, not on Mistral.** Half right,
and the half that broke broke in the most informative way possible.

ChatGPT read `narrative !feed platform` as *"it is an invariant that the story
must feed or drive the platform"* — the exact reverse of your constraint. And it
did so **because it read the legend correctly**. At Q5 it reasoned, unprompted:

> "`!` — an invariant … It does not, by itself, mean logical negation."

That is precisely what the `## Decode` block says. Applying the documented rule
faithfully produces the inversion. The model was penalised for trusting the
legend. The fault is in the notation, not the reader.

Mistral passed Q6 — but scored *lower* on Q3, where it failed to connect `!` to
section-level invariance. So:

> **The model that read the legend strictly inverted your meaning.
> The model that read it loosely got it right.**

For a constitution format, that property is unacceptable. Whether a reader
preserves or reverses a core constraint currently depends on how literally it
takes your own documentation.

### The good news: your usage is already perfectly consistent

Every occurrence across the codon and the fold follows one rule, without a
single exception:

```
suffix  Intent!  ·  digestible!  ·  story-before-interface!  ·  PARKED!
        -> invariant

prefix  !feed  ·  !not motive  ·  !silent canon  ·  !decoration
        ·  !consequence-free  ·  !popularity economy  ·  !=
        -> not / excludes
```

The rule exists. It is simply nowhere written down. One line closes it.

### Proposed fix — `## Decode` block, `project.seed.codon`

```diff
  ::        identity / equivalence
  ->        produces / leads to
  <>        tension held without forced resolution
- !         invariant; preserve unless human explicitly changes it
+ term!     suffix :: invariant; preserve unless human explicitly changes it
+ !term     prefix :: not / excludes / must not
  ~         mutable / provisional
  @         canonical source path relative to root
  [x|y]     both dimensions matter; not a binary verdict
```

**Not applied yet.** Awaiting the human — `never silently reinterpret` cuts both
ways, and this is the codon's own legend.

The fold needs no equivalent change: L3 is defined as *symbolic · no legend*, so
it correctly assumes shared context. The fix belongs to L4 only, and to any
future codon template.

---

## The unexpected result: Groq

Void as a scored run — it answered before the probe arrived, and the probe was
pasted with its explanatory notes attached, which tipped off Q6.

But it accidentally ran a **harder** test and passed it. Given the codon alone,
with no question attached, it did not wait to be asked what to do. It read the
continuation protocol and started doing it:

> "The continuation protocol says: write Chapter 02 as complete narrative before
> UI … We should not modify invariants … We should not do heavy implementation
> details, just narrative and suggestions."

Q2 measures whether a model can *say* the right next action. Groq *performed*
it, unprompted, in the right order, while declining to overbuild. That is a
stronger demonstration of portability than the probe was designed to elicit.

**And its failures are equally instructive.** With the seed but no fold, it
produced right direction and wrong texture: a café instead of a school, exclusion
by jargon instead of a joke with no owner, an instant everyone-hugs repair
(magical repair — forbidden by the fold), and an invented numeric score
("receptivity 0.4 → 0.7") when scoring is explicitly prohibited.

The codon's own load policy predicted this:

> `load policy :: seed first; guide fold when shaping narrative/ethics/chapters`

**Direction travelled. Craft did not.** Which is exactly where LF says the
boundary between L4 and L3 sits. The layering is doing what it claims.

---

## What this changes

```
LF claim "L4 travels to any AI"          -> SUPPORTED (n=2 families, clean)
LF claim "carries legend · no reconstruction" -> QUALIFIED
                                            legend has one documented gap
                                            reconstruction still occurs
codon as portable direction              -> DEMONSTRATED
codon as substitute for the fold         -> DISPROVEN (correctly, by design)
```

Narrow the "no reconstruction" wording in `what-is.lingua-franca.hybrid`. Both
models reconstructed — they just did it cheaply and, once, wrongly. The
defensible claim is *portable direction with a self-carrying legend*, not
*activation without reconstruction*.

---

## Next

1. **Apply the Decode fix** (human call), then re-run Q6 only against ChatGPT.
   A clean pass confirms a one-line repair closed a real hole — the tightest
   possible demonstration that this test debugs notation rather than just
   grading it.
2. **Experiment 002 — does the fold close the craft gap?** Same cold model,
   payload = codon **+** `guide.field-attunement.fold`, same open-ended
   "continue the work" framing that Groq got by accident. Check whether magical
   repair, invented scores, and tone drift disappear. If they do, the density
   ladder is validated end to end, and that is a genuinely publishable result
   for LF.
3. **Re-run Groq properly** with `02-PROBE-PASTE-ONLY.txt` to fill the grid.
4. **Record the prior informal test** from the other project in
   `results/prior-informal.md` if the details come back.

---

## Postscript — what LF was actually for

Recorded after the run, in the human's own framing:

> "It helps the context window and was initially intended for the AI to hold it,
> meet me half way in the hybrid files, with L1 for outsiders and prose."

This matters, because **this experiment tested a harder claim than the design
ever needed to make.**

The stated purpose is not "any AI, cold, anywhere." It is:

```
context window     carry a whole project cheaply
AI holds state     the model keeps the project between sessions
L2.5 hybrid        the meeting place — human and AI both working
L1 prose           for outsiders and for recovery
```

Against *that* purpose the result is stronger than "kind of passed":

```
carries a project in ~8KB                 demonstrated
a model holds direction + prohibitions    demonstrated, twice, cold
seed alone insufficient for craft         demonstrated — and correctly so
three files together as the real unit     supported by every run
```

Cross-model portability was a bonus property, not the design goal. It mostly
holds anyway, with one documented gap.

**The honest summary: the intended job is done. The universality claim is the
part that needs narrowing, and it was never the point.**

---

## Method notes for next time

- Paste `02-PROBE-PASTE-ONLY.txt`, never `02-PROBE.md`. The latter explains what
  the test measures.
- A model given only a codon may start *working* rather than waiting. That is a
  feature, but send payload and probe in a single message if you want the grid
  filled.
- Watch for interfaces that auto-convert `->` to `→` or `!=` to `≠`. That would
  silently alter the payload mid-experiment.
