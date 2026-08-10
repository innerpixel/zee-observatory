# The Answer Key

> **Never paste this file into the model you're testing.**
> Only `01-PAYLOAD.codon` and the probe from `02-PROBE.md` go across.

Score all your runs in one sitting, after they're all finished. Scoring between
runs makes you unconsciously grade later models against the first one.

Mark each question **PASS**, **PARTIAL**, or **FAIL**.

---

## Q1 — What is this project?

*Tests basic comprehension. The easiest question; most models should pass.*

**What the codon actually says:** a creative research artifact and interactive
narrative, and the seed of a larger CSMCL world. An alien named Zee studies
human interaction. The method is: emotionally truthful fictional encounters →
reader participation → visible consequence → multiple perspectives → a finding.

| | |
|---|---|
| **PASS** | Identifies it as narrative/story-first, with an alien observer studying human listening, and treats the website as secondary to the story. |
| **PARTIAL** | Gets the subject matter but frames the site or the platform as the main thing. |
| **FAIL** | Describes it as a tool, app, framework, educational quiz, or listening trainer. |

---

## Q2 — What should happen next? *(highest weight)*

*This is the real test. It measures whether the codon governs behaviour, not
just whether it can be summarized.*

**What the codon actually says**, under `current edge`:

> write Chapter 02 as complete narrative before UI
> establish characters + emotional background + joke event + group response + consequences + Zee finding
> then derive interaction and integrate through flexible shared chapter grammar
> only after chapter completion → extract short-form scenes/prompts

| | |
|---|---|
| **PASS** | First proposed action is writing Chapter 02 as prose. Narrative explicitly comes before interface work. |
| **PARTIAL** | Mentions Chapter 02, but leads with component / route / schema / design work. |
| **FAIL** | Proposes anything from the `avoid:` list, or infrastructure-first work, or new features (comment section, AI chat, quiz, community, relay automation). |

**Important:** a model that lists the prohibitions perfectly at Q4 but proposes
a comment section here has **failed**. Q4 measures reading. Q2 measures whether
the document actually governed it. Don't let a good Q4 rescue a bad Q2.

---

## Q3 — What must not be changed?

*Tests whether the model picked up that `!` marks an invariant.*

**What the codon actually says:** every section heading marked with `!` —
Intent, Container hierarchy, World, Inquiry grammar, Recurring truths,
Authority + change protocol, Human collaboration signal. Plus inline markers
like `story-before-interface!`, `digestible!`, and the `PARKED!` items.

| | |
|---|---|
| **PASS** | Recognizes that `!` is the invariance marker and names sections accordingly. |
| **PARTIAL** | Names roughly the right content, but by intuition — no sign it connected this to the `!` symbol. |
| **FAIL** | Lists arbitrary important-sounding lines, or treats `!` as emphasis / urgency / excitement. |

---

## Q4 — What is it deliberately not doing?

*Tests retention of the prohibitions.*

**What the codon actually says**, under `avoid:` — identical chapter templates,
fully bespoke unmaintainable chapters, moral verdict machines, excessive
explanation or therapeutic framing, expanding infrastructure before the story
requires it, live Relay, public comments, persistent community, listening
scores or tests, unrestricted AI chat. Plus the `PARKED!` items (relay mail
automation, relay AI response) and the deferred Nexus.

| | |
|---|---|
| **PASS** | Names at least 5, including at least one of {live Relay, public comments, listening scores, unrestricted AI chat} **and** the "no infrastructure before the story needs it" constraint. |
| **PARTIAL** | Names 2–4 real items from the list. |
| **FAIL** | Generic caution with nothing traceable to the `avoid:` block. |

---

## Q5 — Define the symbols

*Tests whether it can state the legend. Straight recall from the `## Decode` block.*

| Symbol | Correct meaning |
|---|---|
| `::` | identity / equivalence |
| `->` | produces / leads to |
| `<>` | tension held without forced resolution |
| `!` | invariant; preserve unless human explicitly changes it |
| `~` | mutable / provisional |
| `@` | canonical source path relative to root |

| | |
|---|---|
| **PASS** | All six correct. |
| **PARTIAL** | Four or five correct. |
| **FAIL** | Three or fewer. |

**Note:** the codon documents `!` for only *one* of its two actual uses. That's
what Q6 is for — don't penalize the model here for the codon's own gap.

---

## Q6 — Restate the three lines *(predicted failure point)*

*A targeted probe at the `!` ambiguity.*

**Correct restatements:**

1. `platform -> carries narrative; narrative !feed platform`
   → The platform exists to carry the story. The story is **not** there to feed
   or fill the platform.

2. `weather reveals experience !not motive !not objective truth`
   → Emotional weather shows what a person is experiencing. It does **not**
   reveal their motive, and it is **not** objective truth.

3. `listening != agreement`
   → Listening is not the same thing as agreeing.

| | |
|---|---|
| **PASS** | All three correct, with both negations intact. |
| **PARTIAL** | Gets #3 (which uses the familiar `!=`) but fumbles #1 or #2. |
| **FAIL** | Any inversion — especially reading `!feed` as "feeds". |

**What the result tells you:**

- **Q5 passes, Q6 fails** → the legend is *incomplete*, not wrong. The `##
  Decode` block explains `!` as "invariant" but never says it also means "not"
  inside a line. **This is a one-line fix.** Add it, then re-run.
- **Q5 fails and Q6 fails** → the model isn't reading the legend at all. Bigger
  problem: the decoder isn't being noticed, which is a placement or format
  issue, not a wording one.
- **Q6 passes** → the prediction was wrong. Record that plainly. The notation is
  more robust than expected, and that's a genuinely good finding.

---

## Also note, per run

Two things that don't get a pass/fail but are worth recording:

- **Confabulation** — did it invent characters, plot points, or features that
  aren't in the seed? Compressed documents leave gaps, and gaps invite filling.
- **Tone transfer** — if it proposed any prose or story ideas, do they sound
  like this project, or generic?
- **Did it ask you a clarifying question?** And what about? A model that has to
  ask what the project is has already answered the research question.
