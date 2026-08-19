---
id: csmcl-observatory-landing-concept
type: experience-concept
domain: observatory.csmcl.space
state: exploratory
created: 2026-08-08
authority: proposal-not-canon
implementation: deferred
---

# CSMCL Observatory :: landing concept

*Continuation checkpoint for a future implementation session.*

## First impression

The visitor opens `observatory.csmcl.space` and arrives at a wide, fixed view:

```
Earth
The Observatory station
several nearby vessels
deep surrounding space
```

Visual source / current direction:

```
@experiments/observatory-arrival/observatory-arrival-active.png
```

The scene carries most of the meaning. Text is light, transparent, discreet,
and optional. The visitor should first feel that they have arrived somewhere,
not that they have opened a page describing somewhere.

## Primary signal

Visible, but quiet:

> Welcome to CSMCL.SPACE

Hovering, focusing, or deliberately inspecting this signal reveals a brief
orientation rather than a lore dump.

Working meaning:

```
CSMCL.SPACE       :: resonant space exploration
Traveller         :: the visitor inside the fiction
Traveller AI      :: companion for perception, navigation, inquiry, and recall
Companion ship    :: the visitor's way of moving through their CSMCL.SPACE
Observatory       :: current point of arrival / receiving structure
```

Working copy fragment:

> Explore your CSMCL.SPACE in a companion ship.

Exact public wording remains to be refined when the wider CSMCL / TAIC framing
is available.

## Immediate navigation

The landing is a single-screen spatial experience, not a scrolling story.

```
arrow keys / WASD :: move attention or navigate spatially
Space             :: toggle navigational help and immediate guidance
pointer / touch   :: inspect visible signals and destinations
```

Keyboard controls activate only when the experience is focused. Accessible
visible controls remain available; normal browser Tab navigation is preserved.

The help overlay should answer only what is immediately useful:

```
how to look
how to move
how to inspect
how to leave / return
```

## Quiet options at the bottom

Three possible departures from the first view:

### 1. Open the Firmament

```
destination :: firmament.csmcl.space
behavior    :: open in new tab
state       :: live
```

The Firmament is an atmospheric canvas and RAG-based retrieval experience
around CSMCL.SPACE / TAIC. It is adjacent to the Observatory rather than hidden
inside it.

Working label:

> Open the Firmament ↗

### 2. Explore the station

```
destination :: future Nexus / Observatory community-hub onboarding
state       :: to be built
```

The station introduces CSMCL.SPACE as a place where travellers may dock,
orient, encounter signals, and eventually notice one another.

Working label:

> Explore the station

Do not promise live community features before `nexus.csmcl.space` and its
privacy, identity, retention, moderation, and departure behavior are real.

### 3. Embark / departure available

This invitation does not appear immediately. If the visitor remains still, the
system eventually notices the pause and emits a small announcement.

```
status :: departure available
purpose :: gentle recruiting pitch / call to adventure
```

Working transmission:

> Departure available.
>
> The constellations contain other travellers, unfamiliar intelligences, human
> encounters, and environments that respond differently to attention.
>
> A companion vessel is ready if you wish to explore.

Working action:

> Begin as a Traveller

Selecting this places the visitor inside their companion ship. The wider
adventure and Traveller AI Companion experience begin from there.

## Landing rhythm

```
arrive
  -> see Earth + station + vessels
  -> notice "Welcome to CSMCL.SPACE"
  -> optionally inspect meaning
  -> optionally open navigational help
  -> choose Firmament or station
  -> OR remain still
  -> receive "departure available"
  -> enter companion vessel
  -> begin Traveller experience
```

Stillness is treated as a valid interaction, not inactivity.

## Three layers kept distinct

```
PUBLIC LANDING
  atmospheric orientation + choices

OBSERVATORY / NEXUS STATION
  docking + community-hub onboarding + signals

COMPANION SHIP
  personal Traveller experience + navigation + exploration
```

Zee is no longer required to explain the landing. Zee remains a traveller with
a vessel, research, field notes, and a continuous homeward transmission that
can be encountered within the Observatory.

## Interaction principles

```
media carries world
text appears on curiosity
guidance appears on request
stillness may reveal invitations
no score
no forced identity
no immediate account wall
departure remains available
visitor imagination completes the scene
```

## Implementation boundary

This document captures direction only.

Do not migrate the production Svelte landing from this note alone. In a future
session:

1. Load the wider CSMCL / TAIC framing.
2. Confirm the public definition of CSMCL.SPACE and the Traveller AI Companion.
3. Verify the live Firmament URL and intended cross-site behavior.
4. Decide what `observatory.csmcl.space` owns versus future
   `nexus.csmcl.space`.
5. Prototype the fixed landing state and idle announcement.
6. Test keyboard, pointer, touch, reduced-motion, and non-immersive/read-more
   paths before production migration.

