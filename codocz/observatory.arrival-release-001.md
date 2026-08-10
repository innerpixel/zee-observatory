---
id: observatory-arrival-release-001
type: implementation-slice
domain: observatory.csmcl.space
state: active-prototype
density: L2
created: 2026-08-10
authority: release-boundary
inherits:
  - observatory.current-project-brief.md
  - understanding.observatory-responsive-incompletion.hybrid
route: /arrival/
---

# Observatory arrival :: release 001

*A reversible exterior threshold for testing responsive incompletion.*

## Purpose

This release tests whether a quiet exterior field can establish an inhabited
place, support provisional inference, answer attention proportionately, and
offer approach without requiring identity or action.

It does not replace the production homepage. It lives at `/arrival/` while the
existing Observatory hub, archive, and Chapter 1 remain unchanged.

## Observable experience

### Presence

The Traveller sees Earth, the Observatory, restrained traffic, and one lit
receiving port. The scene is complete without interaction. Persistent interface
language establishes location and local conditions, not lore.

### Fragment 1 — unresolved carrier

After quiet observation, a carrier becomes perceptible from a small vessel.
Listening may reveal only:

```text
carrier active
destination not supplied
reply requested: no
```

The vessel is Zee's searching vessel in the larger world, but it remains
unnamed in this release.

### Fragment 2 — crossing traffic

A small craft crosses the Observatory field without resolving into a story.
It establishes that activity continues independently of the Traveller.

### Observatory echo

Inspecting or approaching the station may cause one receiving port and a local
approach trace to resolve. This is an environmental response, not a statement
about the Traveller.

### Threshold

The final implemented state is an accepted approach vector. The experience
does not claim that boarding or the station interior exists yet. A Traveller
may remain outside, reset the field, or use the reading path to the existing
site.

## Interaction states

```text
presence
  -> signal appears through time, not compulsory action
  -> listen / inspect / remain
  -> approach requested
  -> approach vector resolves
  -> remain / reset / existing field archive
```

No action is scored. Silence is not interpreted. No interaction creates a
profile or persists beyond the current page.

## Layer inventory

```text
TEMPORARY BASE PLATE
  experiments/observatory-arrival/observatory-arrival-quiet.png
  purpose: composition and interaction prototype only
  limitation: station, vessels, and faint route graphics are baked in

AMBIENT LAYERS
  CSS light traffic
  slow crossing trace
  restrained star / field movement

ATTENTION LAYERS
  carrier trace
  station receiving-port response
  target focus rings

INTERFACE LAYER
  minimal location mark
  local observation card
  action controls
  aria-live status

FALLBACK / CONTINUITY
  direct link to the existing Observatory field archive
```

The temporary plate must not be mistaken for the required final neutral base.
A later production base should separate station, ambient traffic, Zee's vessel,
event vessels, signals, and approach response into removable layers.

## Content sources

```text
Traveller-local interface
  reports directly observable conditions

Observatory
  responds through port light and approach trace

unnamed vessel
  supplies the incomplete carrier after attention
```

Zee is neither named nor used as interface documentation.

## Reusable information form — observation rail

The arrival uses one low-transparency observation rail instead of a foreground
card or collection of independent notices. The rail is intended to remain a
recognizable instrument across arrival, station, and later cabin contexts.

Its information order remains stable:

```text
SOURCE
  where this information comes from

OBSERVATION
  the smallest coherent statement of what changed

EVIDENCE
  directly observable facts, never an identity diagnosis

RESPONSE
  optional actions at the same depth as the evidence
```

The rail may reorganize vertically on narrow screens, but it should retain this
grammar. It remains translucent, avoids covering the current narrative object,
and uses restrained contrast so the field—not the interface—is encountered
first. Additional floating captions should not duplicate it.

### Later extension — frequencies as story sources

When the field contains more than one meaningful carrier, the observation rail
may become a restrained receiver. This is a narrative extension, not a generic
channel menu and not part of Release 001's acceptance boundary.

```text
PASSIVE RECEPTION
  the world continues releasing small fragments over time
  doing nothing still produces a partial, coherent encounter

AVAILABLE FREQUENCIES
  appear only when an actual source is present
  Observatory local · unresolved carrier · passing traffic

TUNING
  Traveller may attend to one source without closing the others
  changing frequency changes what can be heard, not which story is "correct"

RETURN TO FIELD
  passive reception remains available
  silence and untuned signals remain valid states
```

Information should arrive piece by piece: signal, observable fact, recurrence,
and later echo. A frequency must carry a real source and unresolved situation;
empty channels must not be added merely to make the interface look functional.

## Accessibility and restraint

- Every visual target has an equivalent labelled control.
- Status changes are announced through a polite live region.
- The experience remains usable without hover.
- Reduced-motion preference removes transit and pulsing animations.
- The existing site is available as a non-immersive reading path.
- No audio starts automatically; this release uses no audio dependency.

## Acceptance test

Release 001 is ready for interpretation testing when:

1. `/arrival/` builds as a static route without changing `/`.
2. Waiting, listening, inspecting, remaining, and approaching all work by
   keyboard.
3. Doing nothing still leaves a coherent place on screen.
4. The carrier provides structure without explaining its owner or motive.
5. The approach response remains environmental and reversible.
6. Reduced-motion mode removes non-essential animation.
7. The archive and published Chapter 1 remain reachable and unchanged.

## Explicitly deferred

```text
production exterior artwork
boarding transition
station interior
Zee name reveal
visitor cabin
persistence or email
Attunement / Nexus
accounts, identity, payment, or traveller interaction
```
