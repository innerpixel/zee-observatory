---
id: interface-observation-rail-field-packet
type: interface-understanding
domain: observatory.csmcl.space
state: working-proposal
density: L2
created: 2026-08-10
authority: interface-grammar-not-canon
inherits:
  - observatory.arrival-release-001.md
  - observatory.arrival-story-feed.next-step.md
scope:
  - observation-rail
  - field-packets
  - response-language
  - message-pacing
possible-later-use:
  - traveller-ship
  - observatory-station
  - cabin
---

# Observation rail and field packets

*A slower explanation of the interface currently living at the bottom of the arrival.*

## What this document is for

The arrival currently contains a low horizontal interface called the
**observation rail**. It brings information quietly while leaving the exterior
field visible.

The rail already suggests a larger interface language, but that language has
not yet been formally designed. This document separates what exists now from
what may become reusable later.

Nothing here requires immediate implementation.

---

## The rail at a glance

The rail contains four different kinds of information:

```text
1. SOURCE
   Where is this information coming from?

2. OBSERVATION
   What is the smallest coherent statement about what changed?

3. FIELD PACKET
   Which directly observable facts support that statement?

4. RESPONSE
   What may the Traveller do, if anything?
```

Current example:

```text
SOURCE
  Passive observation · faint carrier

OBSERVATION
  The quiet contains a signal.

FIELD PACKET
  local motion      stable
  open carriers     one faint
  action required   none

RESPONSE
  listen to carrier · inspect Observatory · remain here
```

The large sentence is not intended to explain the packet. It gives the packet
a humanly perceivable shape. The facts keep the sentence from becoming vague.

---

## What the three columns mean now

In Release 001, the columns do not yet have fixed semantic roles. Each state
simply selects three useful facts.

### Presence state

```text
local motion       stable
open carriers      one faint
action required    none
```

### Carrier state

```text
carrier            active
destination        not supplied
reply requested    no
```

### Station state

```text
relative motion    stable
receiving ports    one active
approach path      unassigned
```

### Approach state

```text
approach vector    stable
identity exchange  none
departure route    open
```

These packets are coherent individually, but the position of a fact does not
yet carry a dependable meaning. For example, the second column sometimes
describes a signal, sometimes a port, and sometimes identity exchange.

That is acceptable for the prototype. A reusable system should become more
consistent.

---

## Proposed reusable three-lens grammar

The field packet may eventually use three stable lenses:

```text
FIELD
  What is happening now?

RELATION
  What is connected, directed, available, or unresolved?

AGENCY
  What is asked, permitted, optional, required, or reversible?
```

This is not merely telemetry. It includes the social conditions of an
interaction.

### Example — unresolved carrier

```text
FIELD
  carrier active

RELATION
  destination not supplied

AGENCY
  reply requested: no
```

### Example — Observatory approach

```text
FIELD
  approach vector stable

RELATION
  receiving port available

AGENCY
  departure remains open
```

### Example — later ship interface

```text
FIELD
  local signal recurring

RELATION
  source moving beyond listening range

AGENCY
  follow available · commitment none
```

The Traveller can understand both the physical condition and the interaction
boundary without a paragraph of explanation.

---

## Requested is not required

This distinction should remain precise.

### No reply requested

```text
reply requested    no
```

The source is transmitting, but it has not asked listeners to answer.
Listening does not create an obligation.

### Reply available

```text
reply available    yes
```

A return path exists. The interface does not imply that it should be used.

### Reply invited

```text
reply invited      once
```

The source has made a specific opening. Silence still remains interpretable in
more than one way.

### Acknowledgement required for one operation

```text
docking acknowledgement    required to proceed
```

This requirement belongs only to the operation. A Traveller may still remain,
listen, or leave without acknowledging it.

### What the Observatory should not say

```text
reply required
identity required
commitment required
```

These phrases are too broad unless the interface names the exact action for
which the requirement exists.

A good requirement is scoped:

```text
required to dock
required to retain this note
required to receive station mail
```

It never silently means “required to belong here.”

---

## Possible agency vocabulary

The third lens may eventually carry language such as:

```text
action required       none
reply requested       no
reply available       yes
identity requested    no
presence sufficient   yes
approach available    yes
commitment required   none
departure route       open
response window       indefinite
record retained       local only
```

Not all of these belong in the arrival. They demonstrate how the same grammar
could travel into a ship, station, or cabin without becoming a conventional
account interface.

---

## Why this may belong in Traveller ships

A Traveller ship needs to interpret situations without pretending to know more
than it can observe.

The three lenses support that:

```text
FIELD
  sensor / environmental evidence

RELATION
  trajectory / source / recurrence / connection

AGENCY
  permission / invitation / boundary / reversibility
```

The interface can therefore help a Traveller navigate both space and relation.
It never needs to claim:

```text
this vessel is afraid
this Traveller wants company
silence means rejection
this is your true preference
```

It reports conditions and openings, not diagnoses.

---

## Pacing problem in the current experience

The current state changes can occur faster than a person can:

```text
notice the source
read the observation
compare the three facts
understand the response options
look back at the field
```

That means the interface may be quiet visually while still demanding fast
cognitive attention.

The future story feed should not treat “text appeared” as “text was perceived.”

---

## Proposed pacing rules

### 1. Minimum readable duration

Estimate reading time from the full packet, not only the title.

```text
short ambient fact        at least 6–8 seconds
observation + field facts at least 12–16 seconds
carrier fragment          at least 16–22 seconds
```

These are starting points for testing, not final constants.

### 2. New information waits

A new narrative packet should not replace the current one simply because its
timer fired. It waits until the current packet has completed its minimum
duration.

### 3. Attention pauses progression

If the Traveller focuses, hovers, selects text, uses a control, or tunes a
frequency, automatic progression pauses.

This notices interaction without interpreting identity.

### 4. Important fragments recur

If a packet can be missed, its meaning should return later through another
source or visible echo. The interface should not require a message history just
to make the story coherent.

### 5. Passive mode remains slow

Doing nothing allows the field to develop, but not at the speed of a trailer.
Quiet intervals are part of the story.

### 6. Deliberate listening may hold a packet

When a Traveller tunes to a frequency, its current packet remains until they
return to passive reception, follow a related signal, or explicitly release it.

### 7. Never animate every layer simultaneously

One of these may change at a time:

```text
field event
source line
observation
field packet
response controls
```

The eyes need to know where the new information entered.

---

## A slower packet sequence

Instead of replacing the entire rail at once:

```text
00s  field event becomes visible

03s  source resolves
     Passive reception · faint carrier

06s  observation arrives
     The quiet contains a signal.

10s  facts resolve one at a time
     carrier active
     destination not supplied
     reply requested: no

18s  optional responses become available
     listen · inspect · remain

22s+ packet remains available
     nothing replaces it until its conditions permit
```

This sequence lets perception move from world to meaning to possible action.

It should not become a mandatory animation. Reduced-motion mode may reveal the
same layers without movement while preserving their timing and order.

---

## What remains open

- Are the stable names **Field · Relation · Agency**, or should the interface
  use quieter public terms?
- Are lens headings visible, or does position teach their meaning over time?
- Does the observation rail belong to the Traveller's local receiver, the
  Observatory, or a shared communication convention?
- When does a frequency packet remain pinned?
- Is a recent-fragment history helpful, or does recurrence make it unnecessary?
- Which operations may legitimately require acknowledgement?
- How does the rail become smaller when nothing currently needs interpretation?

These questions should be answered through one exterior story before the
system is reused elsewhere.

---

## Working statement

> The observation rail translates a changing field into a small packet of
> evidence: what is happening, how it relates, and what—if anything—is being
> asked of the Traveller. It offers orientation without diagnosis and response
> without compulsory participation.

And the pacing rule beneath it:

> A message has not arrived merely because it was displayed. Give perception
> time to reach it.
