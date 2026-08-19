---
id: architecture-arrival-future-bearing-seams
type: future-bearing-seam-map
domain: observatory.csmcl.space
state: working-proposal
density: L2.5
created: 2026-08-11
authority: architecture-proposal-not-canon
inherits:
  - observatory.arrival-participation-loop-001.md
  - guide.wholeness-playability-participation.md
  - understanding.observatory-responsive-incompletion.hybrid
scope:
  - minimal-arrival-event-structure
  - causal-continuity
  - later-recognition-without-profiling
excludes:
  - future-surface-design
  - account-identity
  - attunement-profile
  - universal-event-engine
---

# Arrival future-bearing seam map

*Preserve the event relation without silently preserving the person.*

## Purpose

Arrival Participation Loop 001 should be small enough to implement reversibly
and structured enough that its world event need not be discarded later.

This map identifies minimal internal seams. It does not design the station,
cabin, Firmament, Innerstellar, Nexus, accounts, or Attunement.

The primary distinction is:

```text
WORLD CONTINUITY
  this source emitted this carrier
  this receiver registered it
  this relation may recur

TRAVELLER HISTORY
  this person noticed
  this person listened
  this person prefers this source
```

Loop 001 needs the first. It does not need to retain the second.

---

## Seam map

| Structure | Needed now | Safe to defer | Must not be inferred | Possible later consumer |
|---|---|---|---|---|
| `sourceId` | Opaque stable identity for the carrier source, e.g. `source.carrier.001` | Public name, biography, ownership, Zee reveal | That the Traveller knows, prefers, identifies with, or was addressed by the source | Observatory station recognition; later exterior recurrence; possible Firmament relation |
| `eventId` | Stable identity for this receipt event, e.g. `arrival.receipt.001` | Cross-surface event registry or global timeline | That a displayed event was perceived or completed by the Traveller | Station event trace; cabin-held world finding if explicitly retained later |
| `eventKind` | `unaddressed-carrier-receipt` | Universal ontology of all event kinds | Motive, emotional significance, urgency, or intended audience | Later event comparison without rewriting Arrival copy |
| `observableState` | Direct states such as carrier present, node intersected, receipt pulse emitted, carrier unresolved | High-resolution telemetry and historical analytics | Identity, intention, fear, desire, commitment, or truth about the Traveller | Rail packets; station surfaces; accessible narration |
| `relationState` | Source-to-node carrier relation and node-to-source receipt-pulse relation | Wider route graph, destination resolution, social relation | That physical or signal relation equals consent, intimacy, ownership, or belonging | Station traffic understanding; later constellation recognition |
| `agencyBoundary` | Reply not requested; no identity exchange; attention changes only local legibility; Observatory approach independent | Later scoped operations such as persistence or correspondence | That listening authorizes reply, retention, profiling, contact, or Attunement | Any future surface that offers a deeper crossing |
| `causalPredecessor` | Pulse trajectory reaches node before node changes state | Full causal graph engine | That Traveller attention caused the world event | Receipt explanation; debugging; later visual reconstruction |
| `aftereffect` | Node state change and Observatory receipt pulse | Long-term world consequences or response content | That the Observatory acknowledged the Traveller | Station recognition of its own prior receipt event |
| `recurrenceKey` | Stable carrier-pattern key distinct from source name | Global recurrence service and cross-device persistence | That repeated Traveller attention is a psychological preference | Later source recognition; possible station or Firmament echo |
| `unresolvedFragment` | One incomplete carrier fragment associated with source and event | Full message, translation, intended listener, canonical meaning | That the fragment is advice to the Traveller or proof of a sender's motive | Later echo that adds evidence without invalidating the first reading |
| `possibleLaterEcho` | Declarative relation saying the carrier pattern may recur from a changed position | Exact future surface, timing, or narrative payoff | That recurrence must occur because the Traveller tuned | Station/exterior story authoring; optional later recognition |
| `retentionScope` | `session-world-event`; no retained Traveller preference | Explicit cabin retention, cross-device continuity, account storage | That session interaction may silently become permanent identity data | Cabin only after a separate, explicit retention design |
| `surfaceVisibility` | Arrival may show observable state and agency boundary; internal IDs remain hidden | Public names and wider architecture | That an internal relation must be explained merely because it exists | Each later surface chooses its own permitted projection |
| `interpretationStatus` | `unresolved`; local receiver may offer conditions, never verdicts | Multiple authored interpretations or Companion reflection | One correct meaning, personality conclusion, or emotional diagnosis | Later reflective surface if invited at suitable depth |
| `worldClockState` | Independent ordered beats for pulse, reception, aftereffect, recurrence, quiet | Persistent simulation clock or background server process | That the world waited for the Traveller's interface | Arrival scheduler; later world simulation only if actually needed |
| `interfaceClockState` | Current packet, minimum readable duration, attention hold, queued description | Message history, analytics, cross-session read state | That elapsed display time equals perception | Arrival rail; reusable accessible packet presentation |
| `attentionMode` | Ephemeral local state: passive or tuned to the current carrier | Preference storage and behavioral segmentation | Interest, identification, loneliness, intent, or future consent | Current-session interface only; discard on exit |
| `receiptActor` | Explicitly identify `observatory.receiving-node.001` as emitter of the receipt pulse | Named station intelligence or institutional authority | That “the system” or “the Observatory” understands the Traveller | Later station explanation of its own infrastructure |
| `contentProvenance` | Carrier fragment belongs to carrier source; receipt facts belong to local detection | Author identity, translation chain, content verification service | That station chatter, carrier content, and local interpretation are interchangeable | Any later surface that quotes or revises the event |

---

## Minimal relation model

The event needs only these world relations:

```text
source.carrier.001
  emits -> carrier.pattern.001

carrier.pattern.001
  reaches -> observatory.receiving-node.001

observatory.receiving-node.001
  emits -> receipt-pulse.001

receipt-pulse.001
  follows relation toward -> source.carrier.001

carrier.pattern.001
  may recur as -> carrier.pattern.001 / displaced source position
```

And these local interface relations:

```text
local receiver
  detects -> observable state
  presents -> field packet
  may stabilize -> unresolved fragment
  discards on exit -> attention mode
```

No edge is needed between Traveller identity and source, event, or recurrence.

---

## Needed-now boundary

For the smallest implementation, “needed now” means only what supports:

1. correct causal ordering;
2. one field packet at a time;
3. optional local tuning;
4. one recurrence relation;
5. session-only interaction state;
6. accessible equivalent presentation.

It does not mean building a generalized persistence or event platform.

---

## Safe-to-defer boundary

Safe to defer:

```text
public source name
Zee identity reveal
global timeline
cross-session world simulation
account or cabin retention
message history
personal preference model
cross-device continuity
station event archive
Firmament relation visualization
Innerstellar transfer
Nexus participation
Attunement interpretation
```

Deferral is not loss. The opaque IDs and causal relations preserve future
possibility without designing the future surface now.

---

## Prohibited inference boundary

The following transformations are invalid:

```text
Traveller tuned once
  != Traveller prefers this carrier

Traveller remained
  != Traveller seeks belonging

Traveller ignored carrier
  != Traveller is uninterested

carrier recurred
  != world selected this Traveller

node emitted receipt pulse
  != Observatory welcomed this Traveller

fragment was stabilized
  != fragment was understood

event was displayed
  != event was perceived

session relation exists
  != permission to retain personal history
```

---

## Event continuity without personal history

Later recognition may say:

```text
This carrier pattern previously reached an Observatory receiving node.
```

It must not silently say:

```text
You listened to this carrier before.
You cared about this carrier.
This carrier is part of your identity.
```

The first statement is world continuity. The others require personal history,
interpretation, and explicit retention authority that Arrival does not have.

If a later cabin deliberately offers to retain a finding, that crossing needs
its own plain-language choice and retention behavior. This seam map does not
pre-authorize it.

---

## Randomized timing boundary

Timing may vary only inside causal constraints:

```text
pre-signal pulse
  before carrier reaches node

carrier reaches node
  before node receipt state

node receipt state
  before receipt pulse

first carrier occurrence
  before recurrence echo
```

Ambient traffic may appear between beats. It may not reorder cause and
aftereffect, replace required evidence, or imply an unrelated source produced
the event.

Use bounded timing ranges, not unrestricted shuffle.

---

## Surface projection rule

An internal relation does not automatically become public copy.

Each surface receives only the projection appropriate to its depth:

```text
ARRIVAL
  directly observable state · incomplete relation · optional local response

OBSERVATORY STATION — possible later consumer
  station-side receipt trace if that surface genuinely has access

CABIN — possible later consumer
  only explicitly retained findings under a separate retention choice

FIRMAMENT — possible later consumer
  relation recognition if it becomes meaningful through lived material

INNERSTELLAR / NEXUS — possible later consumers
  no automatic import; separate purpose and consent required
```

These are consumer boundaries, not designs for those surfaces.

---

## Data minimization statement

Loop 001 can function with:

```text
world event state
current interface packet
ephemeral attention mode
```

It does not need:

```text
account
cookie identifier
analytics profile
cross-session interaction history
email
wallet
Companion identity
Attunement state
```

The browser may forget the entire interaction when the page closes while the
authored world relation remains reusable in project content.

---

## Seam review test

Before adding a field, ask:

1. Does this describe the world event, the interface state, or the person?
2. Is it required for Loop 001 causality or only imagined future use?
3. Can it remain opaque until a later surface genuinely needs it?
4. Could it be misread as preference, identity, consent, or diagnosis?
5. Can the event remain reusable without retaining Traveller history?

If a field exists only because a future system might want to know the person,
it does not belong in the Arrival seam.

---

## Working statement

> Arrival preserves enough structure to recognize a world relation later:
> source, event, observable condition, causality, aftereffect, and recurrence.
> It does not silently preserve a psychological or identity relation between
> that event and the Traveller.
