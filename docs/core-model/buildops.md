---
title: BuildOps
sidebar_position: 3
---

# BuildOps

BuildOps is the delivery engine. It focuses on flow, quality, and predictable releases. It treats delivery as an operational system rather than a series of tasks.

BuildOps works with agile delivery, waterfall, or hybrid approaches. The common goal is the same: small, reliable releases with clear acceptance and readiness.

## What BuildOps is responsible for

- delivery flow is visible and predictable
- quality is built in, not added at the end
- release readiness is checked before go-live
- risks and issues are actively managed
- operational safety and support readiness are included
- stakeholders can see progress without chasing updates

## Key artefacts

### 1) Work queue

A work queue might be:
- a kanban board
- a sprint backlog
- a milestone plan with tasks
- a ticket system

Minimum fields:
- item description
- owner
- acceptance criteria
- status
- links to requirements and decisions where relevant

### 2) Definition of done

Keep it short and shared. Example elements:
- acceptance criteria met
- tests complete (automated or manual, as appropriate)
- security and privacy checks done if required
- documentation updated if required
- operational handover requirements met
- release notes prepared

### 3) Release plan and release notes

Release plan answers:
- what is included
- what is excluded
- what environments are affected
- what change window is required
- what rollback plan exists
- who is on support for early life

### 4) RAID log and decision log

BuildOps should update both continuously. If a risk turns into an issue, it should be recorded and owned.

## Routines

### Delivery stand-up (or delivery sync)

Purpose:
- surface blockers quickly
- confirm next steps and owners
- keep flow moving

Keep it short and action-focused.

### Backlog refinement

Purpose:
- clarify work before it starts
- reduce rework and delays
- confirm acceptance criteria

### Release readiness check

Run before every release. Involve delivery, change, and operations.

## Quality and flow metrics (simple set)

Choose a small set that drives behaviour:
- lead time (start to done)
- throughput (items done per week)
- change failure rate (how often releases cause incidents or rollback)
- mean time to restore (if incidents occur)

DORA research is a good starting point:
https://www.devops-research.com/research.html

## Practical checklists

### Release readiness checklist (minimum)

Confirm:
- scope of the release is clear
- acceptance criteria met
- known issues documented and accepted
- comms and training ready (or scheduled)
- support and monitoring ready
- rollback plan exists and is understood
- operations owner has signed off where required

### Issue triage checklist

When something goes wrong:
- confirm impact and affected users
- assign an owner and time-bound next step
- decide if the release continues, pauses, or rolls back
- record the decision and rationale
- communicate to stakeholders

## Useful external references

- DORA research and metrics: https://www.devops-research.com/research.html  
- ITIL 4 change enablement overview (change control concepts): https://www.axelos.com/best-practice-solutions/itil  
- OWASP Top 10 (security awareness): https://owasp.org/www-project-top-ten/
