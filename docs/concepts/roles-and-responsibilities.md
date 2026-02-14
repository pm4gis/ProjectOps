---
title: Roles and responsibilities
sidebar_position: 3
---

# Roles and responsibilities

ProjectOps works best when ownership is explicit and roles are clear, even if one person wears multiple hats.

This page describes common roles and how they fit together.

## Role map

ProjectOps typically separates ownership into five areas:
- outcomes and value
- planning and prioritisation
- delivery execution
- change and adoption
- knowledge and governance

In small teams, one person may cover several areas. The important part is that each area is owned.

## Core roles

### Outcome owner

Accountable for the outcome and benefits.

Responsibilities:
- define outcomes and success measures
- agree baselines and targets
- approve trade-offs that affect value
- confirm benefits after release

Common fits:
- business owner, service owner, product owner, sponsor

### Sponsor

Accountable for support, resourcing, and key decisions.

Responsibilities:
- provide mandate and remove organisational barriers
- confirm priorities and investment decisions
- act as escalation point for major issues

### Project or delivery lead

Accountable for delivery flow and predictable releases.

Responsibilities:
- maintain delivery plan and cadence
- coordinate dependencies and delivery teams
- run delivery routines
- manage RAID review cadence and escalation
- ensure readiness checks happen before release

Common fits:
- project manager, delivery manager, scrum master (depending on context)

### Business analyst or requirements lead

Accountable for shaping requirements and maintaining traceability.

Responsibilities:
- clarify problems and user needs
- define acceptance criteria
- manage requirement changes and link to decisions
- ensure requirements remain testable and current

### Change lead

Accountable for adoption and readiness.

Responsibilities:
- stakeholder mapping and engagement
- change impacts and readiness assessments
- communications and training planning
- support model planning for go-live and early life
- adoption tracking and feedback capture

### Technical lead

Accountable for technical quality, architecture, and delivery feasibility.

Responsibilities:
- technical approach and design decisions
- quality controls and non-functional requirements
- release engineering and deployment approach
- technical risk assessment and mitigation

### Operations and support owner

Accountable for ongoing operational health.

Responsibilities:
- confirm operational readiness and handover requirements
- ensure monitoring, support processes, and access are in place
- own post-release incidents and continuous improvement

### Governance lead or PMO

Accountable for consistent decision-making and assurance.

Responsibilities:
- confirm governance cadence and decision points
- ensure risks are visible and owned
- support reporting and portfolio alignment
- ensure audit needs are met without excessive paperwork

## Responsibility matrix (quick reference)

Use this as a starting point and adapt it.

- Outcomes and measures: Outcome owner (A), BA (R), Delivery lead (C), Change lead (C)
- Prioritisation and sequencing: Sponsor (A), Outcome owner (R), Delivery lead (C), Technical lead (C)
- Scope decisions: Sponsor (A), Outcome owner (R), Delivery lead (C), BA (C)
- Delivery execution: Delivery lead (A/R), Technical lead (R), Team members (R)
- Readiness and adoption: Change lead (A/R), Delivery lead (C), Operations owner (C)
- Release approval: Delivery lead (R), Operations owner (C), Outcome owner (A), Technical lead (C), Change lead (C)
- Benefits confirmation: Outcome owner (A/R), Value owner if separate (R), Delivery lead (C)
- Decision logging: Delivery lead (A), everyone (R) for the decisions they make
- RAID ownership: Delivery lead (A), named owners (R) per item

Legend:
- A = accountable
- R = responsible
- C = consulted

## “One person does everything” version

If you are running a small project alone, keep the roles as responsibilities:
- you are still the delivery lead, requirements lead, and knowledge owner
- you still need an explicit outcome owner, even if it is a stakeholder who signs off measures
- you still need a readiness checklist before release
- you still need an outcome review after release

## Minimum role set for first adoption

If you want the smallest useful model:
- Outcome owner
- Delivery lead
- Change owner (can be part-time)
- Technical lead (even if informal)
- Operations owner (for anything that will be supported)
