---
id: observatory-arrival-persistent-receipt-next-try
type: experiential-proposal
domain: observatory.csmcl.space
state: superseded-exploration
created: 2026-08-13
authority: proposal-not-canon
superseded-by:
  - observatory.arrival-layered-field.next-options.md
responds-to:
  - observatory.arrival-experiential-cut-001.md
inherits:
  - guide.wholeness-playability-participation.md
  - understanding.observatory-responsive-incompletion.hybrid
  - interface.observation-rail-field-packet.md
excludes:
  - production-code
  - additional-story-events
  - generalized-event-engine
  - identity-or-profiling
---

# Arrival :: next try — persistent receipt

*Do not require the visitor to witness an event in order to encounter what it changed.*

## Why the first cut did not work

Experiential Cut 001 treated the event as a timed performance shared between
two attention surfaces:

```text
canvas movement → rail confirmation → canvas change → rail confirmation
```

Even with longer pauses, this requires a fresh visitor to:

- know that a small region of the canvas matters;
- notice a faint movement while still orienting to the page;
- look away from the rail at the correct moment;
- remember the earlier visual state well enough to compare it;
- understand that their attention did not cause the change.

The rail naturally attracts reading attention. When it changes, the visitor
looks down. A fleeting canvas event occurring near that change is therefore
easy to miss. Timing adjustments cannot solve the underlying competition.

The failed cut nevertheless established a useful finding:

> The rail cannot be the live narrator of an event whose meaning depends on
> seeing the canvas change.

## Revised experiential proposition

One unknown transmission reaches the Observatory independently of the visitor.
The event leaves a **persistent local consequence**.

The consequence, rather than the animation, is the encounter.

The visitor may enter the same occurrence through any of three perceptual
paths:

```text
LIVE
  notices the transmission developing and sees where it arrives

AFTERWARD
  finds a retained relation or visibly altered receiving node

RAIL
  later discovers that the Observatory holds one unresolved receipt
```

None is the correct or complete path. Each gives enough evidence to understand
that something occurred in this world without requiring the visitor to have
caused, caught, or completed it.

## What the canvas should do

### Before

The exterior remains inhabited and quiet. No marker tells the visitor to wait
for an event. The receiving node belongs visibly to the station but is not
announced as important.

### During

A relation accumulates rather than flashes:

- more than one pulse establishes direction;
- the trajectory grows slowly enough to be found after it begins;
- the receiving node changes only after the relation reaches it;
- no rail copy changes while meaningful canvas movement is occurring.

Seeing the live arrival should be rewarding, but not necessary.

### After

The event leaves a durable but quiet visual remainder. Candidate remainder:

```text
receiving node holds a new low cadence
faint final segment of the trajectory remains locally visible
station-side halo differs from its original state
```

This is not an alarm, reward, mission marker, or invitation addressed to the
visitor. It is evidence that the world is no longer in exactly its earlier
condition.

The remainder persists for the rest of the visit. It does not vanish merely
because a reading interval expired.

## What the rail should do

The rail should preserve reception, not chase the event.

During the live canvas change, the rail remains exactly as it was. It does not
replace its sentence, animate a new headline, or ask the visitor to read.

Only after the receiving consequence is visually established may the rail gain
a durable receipt. The receipt must not forcibly replace whatever the visitor
is currently reading.

Two possible forms remain open for testing:

### Form A — quiet receipt marker

The rail gains a small stable indication:

```text
local receipts  01
```

If the visitor attends to it, the rail can resolve one restrained packet:

```text
LOCAL RECEIPT
source unresolved
station trace retained
```

The marker does not pulse for attention and never becomes urgent.

### Form B — retained rail row

A new row enters below or beside the current observation without replacing it:

```text
receipt 001     source unresolved     retained locally
```

It remains readable. Nothing progresses because it was or was not read.

Form A protects the canvas and existing reading focus more strongly. Form B is
more immediately legible but risks turning the rail into a feed. The first
paper prototype should prefer Form A.

## What optional attention may change

After the event, attention may increase local resolution:

- the retained trajectory becomes easier to distinguish;
- the receiving node cadence becomes easier to compare;
- the quiet receipt marker resolves into its packet.

Attention must not:

- initiate the transmission;
- complete its arrival;
- produce the station state change;
- send a reply;
- cause the receipt to exist;
- make the remainder disappear after inspection.

The visitor is inspecting evidence, not operating the event.

## A fresh visitor's possible encounter

### Visitor who sees the live event

They first notice several pulses beginning to share a direction. The relation
reaches a station node. The node takes on a new cadence. Much later, or perhaps
not at all, they notice that the rail now holds one local receipt.

Their complete encounter is: **something arrived here and left a condition
behind.**

### Visitor who looks elsewhere during the event

They later notice one station node behaving differently and a faint retained
trace entering it. They do not know when it happened. The rail may offer one
unresolved receipt if they choose to inspect it.

Their complete encounter is: **something has happened here, and its source is
not resolved.**

### Visitor who attends only to the rail

They eventually find one stable receipt marker. Inspecting it makes the
corresponding retained trace easier to see on the canvas. The trace existed
before they inspected the marker.

Their complete encounter is: **this place receives things that are not
necessarily addressed to me.**

### Visitor who leaves early

They encountered an inhabited exterior that made no demand. Nothing frames
their departure as interruption or failure.

## What remains unknown

The next try should not resolve:

- who or what transmitted;
- whether the transmission contained language;
- whether the Observatory accepted, stored, routed, or merely registered it;
- whether a response occurred elsewhere;
- whether the event is ordinary or rare;
- whether it will recur during this session;
- whether the visitor may eventually reply.

The transmission belongs to the world before it belongs to a story told about
the world.

## Smallest paper prototype worth evaluating

Before changing code again, evaluate this static three-state sequence:

```text
STATE 1 — BEFORE
  quiet station node
  existing rail unchanged

STATE 2 — AFTER ARRIVAL
  retained trajectory enters changed station node
  existing rail still unchanged

STATE 3 — RECEIPT AVAILABLE
  same retained canvas state
  one quiet `local receipts 01` marker added without replacing rail content
```

The prototype does not need animation. Show the three states separately and
ask what changed, where attention went first, and whether State 2 is meaningful
without State 3.

Only if the after-state reads should motion be introduced.

## Questions to settle before another implementation

1. What exact visual difference makes a receiving node look changed without
   looking selected, activated, or rewarded?
2. How much of the incoming relation remains visible afterward?
3. Can the after-state be understood without any rail text?
4. Should a receipt marker appear automatically, or only already be present
   when the visitor next looks at the rail?
5. Does inspection connect rail and canvas clearly without resembling a task?
6. Can the existing Inspect and Approach controls coexist without being
   mistaken for causes of the receipt?

## Falsification

The next try fails if a fresh visitor must be told that an event occurred, or
if they say any of the following:

```text
I missed it, so there is nothing left to understand.
The message at the bottom made the line appear.
I think I was supposed to click the receipt.
The changed node looks like a notification I need to clear.
I waited for the next instruction, but nothing happened.
```

The strongest success signal is not a correct explanation of the transmission.
It is a spontaneous observation close to:

> “Something reached that part of the station. It still seems to be holding
> something, but I don't know what.”

## Recommendation

Do not implement another timed cut yet.

First make three static visual studies of the same field: before, retained
after-state, and retained after-state with a quiet receipt marker. The deciding
question is whether the canvas after-state carries the encounter when the live
arrival was not witnessed.

If it does not, no rail timing will rescue it.
