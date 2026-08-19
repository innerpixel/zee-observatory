---
id: observatory-current-project-brief
type: implementation-handoff
domain: observatory.csmcl.space
state: current
density: L1
created: 2026-08-09
updated: 2026-08-12
authority: navigation-and-scope
root: /home/innerpixel/Documents/alien_guide_human_interactions
governs: next-implementation-session-startup
does-not-override:
  - codocz/alien_field_attunement-guide.md
  - codocz/guide.field-attunement.fold
  - codocz/project.seed.codon
---

# The Observatory :: current project brief

*A bridge from accumulated exploration back to the actual project.*

This document exists so the next implementation-focused session does not have
to treat every prototype and concept note as a simultaneous specification.

It states:

- what the repository actually contains now;
- how inherited human-interaction material now sits under Zee;
- the current reinterpretation of the Observatory;
- the smallest present implementation boundary;
- what is explicitly deferred;
- what must be decided before production code changes.

This is a navigation and scope document. It does not silently promote every
exploratory idea into canon and does not replace the guide → fold → seed
authority chain.

---

## Start here

For a fresh implementation session, read in this order:

```
1. this brief
2. codocz/observatory.arrival-experiential-cut-001.md
3. codocz/observatory.arrival-participation-loop-001.md only for deeper constraints
4. codocz/architecture.arrival-future-bearing-seams.md only when shaping implementation
5. codocz/observatory.arrival-release-001.md for the live arrival boundary
6. inspect the actual repository
```

The active and historical document sets are indexed in
`codocz/CONTINUATION.md`. Load foundations, earlier Arrival development,
drafts, or prototypes only when the task specifically requires their reasoning
or evidence.

Do not restart broad discovery before inspecting what is already implemented.

---

## The project, stated plainly

The Observatory is a low-commitment, spatial entry into CSMCL.SPACE.

A visitor arrives as a traveller-in-becoming and may observe the ecosystem
without joining it, identifying themselves, completing a task, or accepting a
Companion. The exterior station field, its traffic, partial signals, and small
traveller stories establish that this is a working place connected to other
places. The visitor may approach, board, remain an observer, investigate more
deeply, and eventually choose to keep a light continuing presence through a
station cabin.

The experience is lightly gamified through attention and spatial discovery:

```
discover, not complete
notice, not score
approach, not advance
inspect, not collect
remain, not fail
leave, not lose progress
```

Zee is already inside this world as one traveller among others. Zee is both a
worked example of integration into CSMCL.SPACE and a concealed source of
orientation through indirect, fallible observations. Zee is not the premise of
the Observatory, its greeter, or the visitor's Companion.

The original human-interaction project has relocated beneath Zee as one of
Zee's own research constellations. It remains meaningful inherited content, but
it is not the Observatory's primary public frame or the reason a visitor must
enter.

The intended Observatory arc is:

```
exterior arrival
  → approach / board
  → observational station life
  → optional discoveries
  → optional visitor cabin + light continuity
  → possible later handoff toward Attunement
```

---

## What the repository actually contains now

The production application is a SvelteKit static site:

```
stack          SvelteKit 2 · Svelte 5 · TypeScript · CSS · adapter-static
deploy target  observatory.csmcl.space
build output   build/
checks         npm run check · npm run build
live route     https://observatory.csmcl.space/arrival/
```

Deployment is currently manual:

```text
push main to VPS remote `origin`
  → SSH csmcladmin@69.62.117.12
  → /opt/csmcl-space-git-live/zee-observatory
  → git pull
  → npm run build
  → Nginx serves the static build output
```

### Implemented public experience

The current production homepage is still the earlier **scroll-based Zee
Observatory hub**, not the newer spatial CSMCL arrival:

```
src/routes/+page.svelte
  hero: The Observatory / Blue planet field station
  direct introduction: Meet Zee
  Zee's homeworld / emotional weather
  published finding
  field instruments
  expedition-log call to action
```

Supporting production routes:

```
/                                  current scroll-based Observatory homepage
/arrival/                          live exterior Arrival Release 001
/archive/                          expedition/chapter archive
/chapter/invitation-to-speak/      published interactive Chapter 1
/prototype/                        preserved static prototype asset
```

`/arrival/` is the current reversible spatial slice. It provides:

```text
quiet exterior field
passive faint-carrier emergence
station and carrier inspection
remain / listen / inspect / approach responses
an approach-vector threshold that does not pretend boarding exists
an observation rail with source / observation / evidence / response
a safe route to the unchanged existing field archive
```

It uses the quiet exterior study as temporary production media. Desktop shows
the complete wide plate inside a dark field; narrow screens use a closer crop.
The image remains a prototype dependency, not the final neutral layered base.

The shared production chrome currently exposes:

```
Observatory · Transmissions · Instruments
```

The arrival deliberately does not use this shared chrome. It has a restrained
location mark and field-archive link so the spatial threshold can be evaluated
without rewriting the existing information architecture.

### Published narrative state

```
Chapter 01  The Invitation to Speak      published
Chapter 02  The Joke With No Owner       development
Chapter 03  The Boundary Debate Society  development
Chapter 04  Seven Pebbles                 development
Chapter 16  The Larger Circle             development
```

Chapter 1 is a substantial branching experience with choices, consequences,
perspective attunement, a field-state reading, follow-up paths, a case study,
and a private browser note. It remains published as-is indefinitely.

Chapter 2 onward are currently directed toward narrative-summary form in Zee's
voice. A new branching tree is not a prerequisite for publishing them.

### What is not implemented in production

The following exist only as concepts or experiments:

```
arrival → approach / boarding transition
neutral exterior base plate with independent station / vessel / signal layers
file-fed arrival story and frequency tuning
the station interior
station living-window signals
visitor quarters / cabin
station manifest / email communication
Zee's relocated ship instrument
Nexus / Attunement / Innerstellar handoff
```

Do not describe these as existing product behavior.

---

## Authority and filesystem caution

The current authority order remains:

```
ethical / narrative conflict  → full L1 guide
tone / compressed reasoning   → fold
current product state         → seed
runtime fact                  → repository
concept-development notes     → proposals until explicitly integrated
experiments                   → evidence, never automatic specification
```

The canonical documents live under `codocz/`, although some internal seed
references still use their former root-relative names. The reorganization,
research archive, experiments, and Arrival Release 001 were committed together
in `adbe36f` and pushed to the VPS on 2026-08-10.

Treat the existing document and experiment structure as collaborator work. Do
not normalize or discard it merely to simplify navigation.

---

## Inherited narrative foundation

The following belongs to Zee's human-interaction research. It must remain true
when that material is encountered, but it does not define the public landing or
the whole Observatory experience.

```
listening != agreement
speech permitted != influence permitted
intention and impact are distinct information
experience may be valid without proving motive
power changes consequences, not automatic truth
silence remains ambiguous
curiosity must remain revisable
repair becomes visible in changed behavior / process / next action
reader is invited to notice, never graded
platform serves narrative; narrative is not filler for platform
```

Tone:

```
observant      not prosecutorial
warm           not sentimental
humorous       not sarcastic
precise        not clinical
curious        not naive
hopeful        not magically repaired
```

Humor targets contradiction, never distress or vulnerability.

Zee remains fallible. “Zee Gets It Wrong” is structural, not optional.

---

## Current reinterpretation

### Observatory

The Observatory is the current project and the complete low-commitment,
pre-Attunement layer of CSMCL.SPACE.

It includes the exterior arrival, boarding threshold, observational station,
optional deeper discoveries, and eventual cabin-level continuity. It may grow
over time without requiring the later Attunement environment to exist first.

The visitor is a traveller-in-becoming, not a student. The experience should
first feel like arrival somewhere real; orientation emerges through attention,
traffic, partial stories, and recurring places rather than explanation.

### Inherited content under Zee

The original human-interaction work remains Zee's Earth research:

```
thread 1  humans / Earth / receptivity / relational weather / chapters
thread 2  CSMCL.SPACE / Companion / Zee's own integration / transmissions
```

Both use the same instrument:

```
expected → observed → revised
```

This material now sits inside the world rather than framing its entrance:

```
Observatory
  └── Zee encountered as one traveller
      └── Zee's vessel / work / notebook
          └── human-interaction research
              └── chapters and provisional instruments
```

A visitor may experience the arrival, station, and cabin without opening Zee's
Earth research. Finding it should feel like discovering what one traveller has
been working on, not reaching the site's required lesson.

### Landing destination

The earlier prototype invited the visitor directly into a personal companion
ship. That has been deliberately revised.

The current landing invitation means:

> Approach or board the Observatory.

The visitor's own Innerstellar/companion environment belongs to a later,
higher-commitment system. It is not granted one click from the public canvas.

### Landing function

The landing is not only a mood piece. It must introduce enough of CSMCL.SPACE
for the visitor to understand that approach is possible, while preserving
restraint, mystery, and visitor imagination.

```
atmosphere + concealed onboarding
not lore dump + not conventional product tour
```

### Exterior ecosystem

Earth and the Observatory form the stable composition. Activity around them
shows that CSMCL.SPACE is larger than the visible page:

```
ships docked / orbiting / arriving / departing
small traveller stories discoverable through attention
unidentified traffic that remains unidentified
routes and destinations implied beyond the Observatory
station structures hinting at an interior life
```

Candidate exterior stories include:

```
Zee's searching vessel
  homeward carrier active · attempted reconnection · local research

unknown carrier
  purpose unreadable · holding outside docking range

passenger craft
  departure sequence · route toward Nexus
  may recur later as the station craft that embarks new travellers

station returns
  traveller quarters · visitor receiving area · Innerstellar ports
  partial structural readings, not a website menu
```

Most ships need only one or two suggestive details. They are evidence of an
ecosystem, not a collection of lore panels to complete.

---

## Zee's current role

> Zee is a traveller already inside CSMCL.SPACE, running two parallel,
> non-authoritative research threads with the same method—expected, observed,
> revised—one on human interaction and one on CSMCL.SPACE and the Companion.
> Zee has no authority to explain the system, only to observe it, and is
> demonstrably fallible. On the arrival canvas Zee is discoverable, not
> addressed: a searching vessel, not a greeter. At the station Zee is one open
> traveller among others, functioning as concealed orientation and a route back
> to the original chapters—never the visitor's Companion and not presently a
> correspondent.

Zee performs two coherent functions:

```
concealed site help
  support / orientation / findings through Zee's interpretive voice
  never direct system explanation

worked example
  an actual traveller already integrating with CSMCL.SPACE
  further along, documented, still getting things wrong
```

Confirmed roles:

```
world character
observer / researcher
source of discoverable material
engagement mechanic
concealed orientation aid
gateway to the original chapters
```

Excluded roles:

```
system guide
authoritative narrator
visitor's own Companion
```

On the arrival canvas, Zee may be represented by a specific small searching
vessel, reachable through inspection or passive listening. The visitor may
learn the name only after docking.

At the station's first impression, Zee should not become the direct visible
subject. Current exploration places Zee, at most, as an unmarked distant figure
roaming with a notebook or minding Zee's own business. Visual continuity may
eventually allow the visitor to connect this figure with the searching vessel.
Readable logs belong to a deeper layer, not the immediate station view.

---

## Current station direction

The station's strongest present principle is:

> The station is observable by design. It presents itself by presence and
> reveals deeper layers through investigation or request.

The visitor should be able to do nothing and still feel that the station visit
is whole.

The current interaction model has three depths:

```
PRESENCE
  scale · motion · light · implied activity
  nothing required

SURFACE
  brief attention / hover / dwell
  a window signal resolves and fades
  a flicker, not a complete answer

DEEPER LAYER
  deliberate investigation or request
  possible future media: station notices, Nexus/Guild traces,
  troublemaker humor, Zee's notebook
  candidates only; content not yet designed
```

Spatial direction currently leans toward one fixed, richly layered observation
vantage rather than a guided sequence of rooms.

Reference mood:

```
airport, not museum
busy in implication, not visually crowded
large curved Earth-facing window that is also a living display
industrial-elegant · dim · quiet · inhabited
```

This is still exploratory. The archived station brainstorm has not yet been integrated
into the guide/fold/seed as a settled implementation specification.

### Optional cabin and continuity

The cabin belongs to the intended Observatory arc, not to the later Attunement
environment. It expresses a small decision:

> I want to stay here a little longer.

The cabin may eventually allow a returning visitor to retain more of what they
discovered, revisit station findings, receive Observatory communications, and
access deeper station material over time. Email represents light Observatory
commitment, not full ecosystem identity.

The conceptual commitment states are:

```
PASSERBY
  observes exterior · no identity · nothing required

STATION VISITOR
  boards / observes / explores · may remain anonymous

CABIN HOLDER
  chooses light continuity · retained discoveries · Observatory communication

ATTUNED TRAVELLER
  later separate environment · its own beginning and commitments
```

“Cabin holder” is working language, not settled public terminology. Persistence
and email mechanics remain unimplemented and require their own design before
activation.

---

## Product arc and implementation horizons

The present project should be considered in four phased horizons.

### Phase 1 — current implementation focus

```
Arrival Release 001 — live at /arrival/
  → restrained exterior orientation
  → passive carrier emergence
  → unnamed searching vessel
  → observation rail / field packet
  → remain / listen / inspect / request approach
  → approach vector held; boarding explicitly not implemented

current continuation
  → author one reverse mini-arc
  → make reception causally visible
  → bring restrained CSMCL.SPACE chatter closer
  → design controlled frequency listening
  → slow perception and message pacing
```

### Phase 2 — station threshold

```
one observational station vantage
living window · arrivals / departures · ambient Zee
complete through presence · minimal surface emergence
```

### Phase 3 — deeper Observatory

```
deliberate investigation
recurring ships / routes / notices / Guild and Nexus traces
Zee's two research threads / notebook access
relocated Chapter 1 instrument framing
```

### Phase 4 — optional cabin

```
light returning continuity
retained Observatory discoveries
visitor area / cabin
station manifest / curated Observatory communication
```

Phases 2–4 are part of the Observatory product's intended growth, not discarded
side ideas. None is required to validate Phase 1, and none should be built all at
once.

### Separate future environment

```
Nexus / Attunement protocol
visitor's own Innerstellar / companion environment
real traveller-to-traveller interaction
accounts · identity · ownership · wallet · payment · subscription
verification and applicable compliance design
```

This separate environment is outside the scope of the current Observatory implementation. It
starts from zero rather than importing a visitor history from the Observatory.
Its mechanics and obligations will be determined in that environment when its
actual services and architecture are designed.

---

## Data and system boundaries

The Observatory does not expose one real visitor's material to another. Real
traveller interaction belongs to the later Nexus/Attunement environment.

If cabin/station email communication is implemented later, its actual data
handling, purpose, consent, retention, deletion, security, and review workflow
must be designed before activation. Relay mail automation and AI response remain
parked.

No account, wallet, payment, subscription, KYC, or Attunement identity system
belongs in the present build.

No current landing/station implementation task should be blocked by designing
those later systems.

---

## How to treat the experiments

The `experiments/` directory contains visual, interaction, video, and interface
studies from several different conceptual moments.

They answer questions such as:

```
Can a fixed arrival feel spatial?
Can stillness be an interaction?
Can an object be discovered without a label?
Can a carrier be heard without announcing presence?
Can vessels move at separate depths?
Can the station window carry atmosphere and signal at once?
```

They are not features to combine wholesale.

Rules:

```
reuse selectively
media may be evidence without becoming production media
prototype copy is provisional
prototype state machines are provisional
do_not_use/ means do not revive without explicit discussion
less media is preferable when one element already carries the meaning
```

The station concept images under `experiments/observatory-station/` are mood and
composition studies, not approved final artwork.

---

## Decisions still open

These should remain visible rather than silently resolved by implementation:

### Arrival

- Does the tested `/arrival/` route eventually replace `/`, or remain a separate
  threshold while its story system develops?
- What is the exact first public frame after the temporary exterior plate is
  replaced by a production base?
- What activity reveals Zee, and when is the name learned?
- What exact transition expresses approach/boarding?
- What one reverse mini-arc should become the first exterior story?
- What exactly reaches the receiving structure, and how is receipt made visible
  as cause and response rather than generic glow?
- Which sources become meaningful frequencies, and when does tuning first
  become available?
- How long must each source, observation, fact packet, and response remain
  perceptible?
- Should file-fed messages live at
  `static/data/observatory-arrival-feed.json`, and what minimal schema follows
  from the authored story?
- Which station structures can be surfaced without becoming menu labels?

Partially settled for the current slice:

```text
Traveller-local interface  reports observable conditions
Observatory                responds through environmental state
unnamed vessel             supplies the incomplete carrier
non-immersive path         existing field archive link
```

### Station

Station production is deliberately deferred as a weekend-scale visual project
until the exterior story earns the threshold.

- Is the first station version one fixed vantage or more than one real space?
- What triggers surface emergence: dwell, movement, randomness, stillness, or
  a restrained combination?
- Is any navigation device present, and what problem does it solve?
- Is the distant Zee figure ambient only or inspectable?
- What is the minimum deeper layer, if any, in the first station release?
- How does passenger craft seen outside recur meaningfully inside the station?

### Cabin and light continuity

- What does “retain more of what was discovered” mean in concrete product
  behavior?
- What remains local to a browser, what—if anything—is stored at the station,
  and what is delivered through email?
- What is available before email commitment and what becomes available after?
- How does the cabin remain a low-commitment Observatory space rather than an
  accidental account system?

### Existing application

- The arrival currently lives safely at `/arrival/`; promotion to `/` remains a
  later explicit decision.
- Where does the current scroll-based Observatory hub move, if anywhere?
- How are `/archive/` and Chapter 1 reached from the new spatial threshold?
- Which existing styles/components remain valuable, and which encode the old
  information architecture?

### Narrative

- Write Chapter 2 as a complete narrative-summary without waiting for the new
  arrival/station architecture.
- Whether later chapters ever receive optional instrument treatments remains
  open; branching interaction is not a publication dependency.

---

## Current continuation point

The repository-backed implementation map has been completed. The smallest
reversible slice was agreed, implemented, visually revised, built, deployed,
and left isolated at `/arrival/`.

Do not begin the next session by replacing the homepage or building the station
interior.

The next work can begin with one bounded experiential implementation:

```text
1. begin from observatory.arrival-experiential-cut-001.md
2. implement Variant A — quiet as a reversible test
3. let the canvas form the question before the rail contributes language
4. use only `carrier present` and `receiver state changed` as rail facts
5. let attention stabilize local resolution without causing the event
6. return to inhabited quiet without implying failure
7. test the cut with a fresh viewer before expanding the story system
```

The observation rail now suggests a reusable interface grammar:

```text
SOURCE       where information comes from
OBSERVATION  the smallest coherent reading
FIELD        what is happening now
RELATION     what is connected / directed / unresolved
AGENCY       what is asked / permitted / reversible
RESPONSE     optional action at the same depth
```

This grammar is promising but not yet settled canon. Current packets change
faster than a person may perceive and compare them. Future scheduling must
distinguish display time from perceived arrival, pause during deliberate
attention, preserve minimum reading duration, and let important meaning recur.

Relevant working documents, in present priority:

```text
codocz/observatory.arrival-experiential-cut-001.md
codocz/observatory.arrival-participation-loop-001.md
codocz/architecture.arrival-future-bearing-seams.md
codocz/observatory.arrival-release-001.md
codocz/observatory.arrival-story-feed.next-step.md
codocz/interface.observation-rail-field-packet.md
```

---

## Definition of successful continuation

The project is successfully positioned when the next session can answer:

```
What exists now?
What meaning must survive?
What changed conceptually?
What exterior story is being authored next?
What is explicitly not being built?
How can the change remain reversible while the direction is tested?
What is directly observable before any interpretation is offered?
How much time does perception need before the field changes again?
```

If the session begins inventing the station interior, profiles, accounts, or an
elaborate frequency system before one exterior story exists, return to this
brief and the active Arrival continuation set.
