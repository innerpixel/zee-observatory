---
id: observatory-arrival-story-feed-next-step
type: content-and-interaction-plan
domain: observatory.csmcl.space
state: working-proposal
density: L2
created: 2026-08-10
authority: next-step-not-canon
inherits:
  - observatory.arrival-release-001.md
  - understanding.observatory-responsive-incompletion.hybrid
scope:
  - exterior-arrival
  - file-fed-transmissions
  - passive-story
  - frequency-listening
excludes:
  - station-interior-production
  - cabin
  - nexus-attunement
  - accounts-or-profiling
---

# Observatory arrival :: story feed next step

*Let the exterior begin telling stories before asking for a larger world.*

## Decision

Stay with the arrival.

The current exterior is already a coherent place and is now live. The next gain
does not require another environment. It requires the field to become more
legible over time: small transmissions, recurrence, incomplete station chatter,
and visible evidence that the Observatory receives and responds to something.

The station interior remains a later visual-production project. It needs a
cleaner base plate, compositing geometry, and deliberate graphic work rather
than being rushed as the next route.

## Immediate objective

Design one exterior story system in which:

```text
doing nothing
  -> still receives a sequence of coherent fragments

attending to a frequency
  -> brings one source closer without closing the others

watching the Observatory
  -> reveals what "receiving" looks like

remaining over time
  -> allows an earlier fragment to return with changed meaning
```

This document plans the content before implementation. It does not change the
current application.

## Story does not mean continuous exposition

The arrival should not become a subtitle reel or automated lore presentation.
Most of the field remains quiet.

A useful rhythm is:

```text
place
  -> small change
  -> one fragment
  -> room for inference
  -> unrelated ambient life
  -> later echo
```

The Traveller may miss a fragment. Important meaning should recur in another
form rather than demanding completion.

## Tell the story backwards

“Backwards” means revealing consequence before explanation, not reversing the
sentences.

```text
1. AFTEREFFECT
   a receiving port changes state

2. RECEIPT
   the station confirms that something arrived

3. CONDITION
   no docking request accompanied it

4. CARRIER
   a fragment from the source becomes audible

5. EARLIER FACT
   the source has been transmitting longer than first assumed

6. RECURRENCE
   the same source or route appears again under changed conditions
```

The Traveller first wonders what was received, then gradually gains evidence
about the signal without being told what its sender feels or intends.

## First reverse mini-arc — candidate, not canon

### Fragment A — visible aftereffect

```text
one receiving node changes amber -> mineral green
receipt state: confirmed
origin: unresolved
```

### Fragment B — station-local chatter

```text
carrier accepted
docking request: none attached
forward route: withheld
```

### Fragment C — isolated carrier

```text
delivery is not required
reception is sufficient
```

### Fragment D — older carrier fact

```text
homeward route: unavailable
attempt count: not supplied
```

### Fragment E — later echo

The carrier briefly disappears beneath passing traffic and returns from a
slightly changed position. This complicates “lost,” “waiting,” and “leaving”
without resolving any of them.

This may eventually belong to Zee's searching vessel, but the arrival does not
need the name or an identity reveal yet.

## What the receiving structure receives

The present label promises behavior that the image does not yet demonstrate.
The next exterior layer should make reception observable.

Possible receivable things:

```text
presence pulse
approach vector request
unaddressed carrier
returning traveller ping
route fragment
station-to-station relay
```

For the first story, use one **unaddressed carrier**. Show it reaching a specific
station node, being accepted, and then becoming locally traceable. Do not show a
generic glow with no causal relation.

Minimum visual grammar:

```text
source pulse
  -> visible trajectory
  -> receiving node changes state
  -> small acknowledgement pulse
  -> quiet
```

The station may confirm receipt without explaining content, sender, or motive.

## Frequencies

Frequencies are world sources, not navigation tabs.

### Passive field

Default state. The receiver notices fragments in its own time. The Traveller
does not have to operate anything for the exterior to develop.

### Observatory local

Restrained operational chatter: receipt conditions, open paths, holding
traffic, departures, maintenance contradictions. It should sound like a place
already working, not onboarding copy.

### Unresolved carrier

One specific source followed across recurrence. Its fragments remain partial,
and its identity is not announced.

### Passing traffic

Short-lived signals that establish a larger ecosystem. Most should not become
full stories.

Rules:

```text
a frequency appears only when its source is present
tuning means attend, not choose permanently
untuned sources continue existing
return to passive field is always possible
silence is a valid frequency state
no channel is framed as the correct story
```

Do not show four empty frequency buttons at first contact. Let the first carrier
teach the existence of tuning; let the second meaningful source reveal that
channels can change.

## CSMCL.SPACE chatter

Chatter can bring the wider space closer without explaining its map.

Useful chatter has:

- a speaker or source class, even if unnamed;
- one practical situation;
- one unresolved relation;
- language that implies recurrence beyond this visit;
- enough brevity to be missed without punishment.

Candidate tones:

```text
operational
  Dock seven remains available. The vessel does not.

ordinary
  Return carrier received. Tea classification still disputed.

boundary-aware
  Presence acknowledged. Identity remains unnecessary.

ecosystem trace
  Nexus departure moved beyond local listening range.
```

These are tone probes, not approved dialogue. Humor should arise from the
ordinary life of the station, never from a vulnerable carrier.

## File-fed content architecture

The desired end state is content that can be revised independently of the
Svelte component.

Recommended runtime source:

```text
static/data/observatory-arrival-feed.json
```

The arrival route would fetch this file at runtime. After that one code change,
message copy, timing, weight, and ordering could be updated by replacing the
data file without rewriting the component. A normal deployment would still be
preferable for versioning; direct VPS edits should not become the canonical
workflow.

Proposed shape:

```json
{
  "version": 1,
  "channels": [],
  "fragments": [
    {
      "id": "carrier.receipt.001",
      "channel": "observatory-local",
      "kind": "receipt",
      "phase": "aftereffect",
      "text": "Carrier accepted.",
      "facts": [],
      "requires": [],
      "echoes": [],
      "passive": true,
      "weight": 1,
      "cooldownSeconds": 90,
      "visualEcho": "receiving-node-01"
    }
  ]
}
```

The exact schema should follow the written mini-arc rather than being designed
in isolation.

## Controlled variation, not pure random

Pure randomness can destroy cause, recurrence, and pacing. Use small shuffled
decks inside narrative phases:

```text
PHASE 1  establish place
PHASE 2  produce aftereffect
PHASE 3  expose receipt condition
PHASE 4  allow carrier attention
PHASE 5  recur / revise
```

Within a phase, ambient chatter may vary. Movement to the next phase follows
story prerequisites, elapsed quiet, or deliberate attention. A session may end
without reaching the final phase and still feel complete.

## What can be done before code

1. Write 12–18 fragments divided among passive field, Observatory local,
   unresolved carrier, and passing traffic.
2. Arrange one five-fragment reverse mini-arc.
3. Mark which fragments are facts, chatter, carrier text, or visual echoes.
4. Define the one receiving node and the exact visible state change.
5. Decide which fragments may recur and what new evidence recurrence adds.
6. Read the sequence without the image and remove anything that explains more
   than the field can demonstrate.
7. Only then create the JSON feed and small runtime scheduler.

## Weekend visual track — deliberately separate

When energy and time allow:

```text
neutral exterior base plate
independent station receiving nodes
independent carrier / vessel layer
clean masks and occlusion paths
one visible receipt trajectory
station-interior base exploration afterward
```

The current image remains a successful prototype field. It should not be forced
to solve every future compositing requirement.

## Next-session stopping point

The next session is successful if it produces:

```text
one reverse mini-arc
four meaningful source frequencies at most
12–18 editable fragments
one observable receiving event
one controlled-variation sequence
no station interior code
```

The story system should earn the station threshold before the project builds
the room beyond it.
