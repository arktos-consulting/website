---
title: "Running an EKS cluster on your own"
description: "What a solo contractor can genuinely commit to when operating Kubernetes, and the three promises not to make without a team behind you."
publishedAt: 2026-08-18
tags: ["Kubernetes", "Managed services", "SRE"]
summary: "Taking over EKS operations single-handed forces a choice about what goes in the contract. Here are the commitments that hold, and the ones that do not."
---

Kubernetes managed services is a team job. A solo contractor can practise it, provided they are precise about what they guarantee. The difficulty is not technical: it is in the contractual scope.

## What holds without on-call

Daytime operations covers real needs. Version upgrades, certificate management, alert review, sizing and cost tracking are all handled during business hours without degrading service.

That scope suits platforms whose downtime is annoying rather than critical: an internal tool, a staging environment, an application whose maintenance window is negotiable.

## What does not hold

**24/7 on-call alone.** A permanent night commitment requires rotation. A single person promising intervention at three in the morning takes on an engagement they will not be able to hold for two years, and the client discovers the limit on the day of the incident.

**A guaranteed recovery time.** On an incident whose cause is in the application, the operator diagnoses and escalates, but does not fix the code. Promising a recovery time means committing to work that depends on a third party.

**A numeric availability target with no history.** Claiming 99.9% assumes you know the failure points and have measured them. A figure stated without measurement is a sales promise, not a technical commitment.

## The wording I use

What can be contracted cleanly: a time to acknowledge, an intervention window, a channel and a named contact. The distinction matters: you commit to your own reaction, not to the final outcome, which depends on things outside your control.

Everything else is handled transparently with the client. A critical platform deserves a team with rotation, or a contractor backed by a collective. That is one of the reasons I work within Cloud Partners rather than on my own.

## The warning sign

A contractor who accepts the whole scope without discussion is a contractor who has not read the contract. The conversation about limits is part of the service, and it costs less before signature than after the first incident.
