# Security policy

Pantrified is a static, local-first demo. It has no backend, no accounts, and no server-side storage. Photos are read in the browser only; state is kept in `localStorage` on the user's device.

## Reporting a vulnerability

Please report suspected vulnerabilities privately through GitHub's [security advisories](https://github.com/ffrizzyy/pantrified/security/advisories/new) rather than a public issue. Include the affected screen or file, reproduction steps, and the browser/OS you used. This is a solo-maintained portfolio project, so responses are best effort, typically within a week.

## Scope

In scope:

- Cross-site scripting or HTML injection through user-editable ingredient names, quantities, or exported files.
- Leakage of the uploaded image or stored data to a third party.
- Service-worker or cache behaviour that serves stale or cross-user content.
- Dependency vulnerabilities with a practical exploit path in the static app.

Out of scope:

- The simulated detector reporting a wrong ingredient (accuracy is a known limitation, tracked in [PRD.md](PRD.md)).
- Missing prices or recipe data.
- Issues that require a compromised device, browser extension, or physical access.

## Supported versions

Only the latest commit on `main` is supported. There are no maintained release branches.
