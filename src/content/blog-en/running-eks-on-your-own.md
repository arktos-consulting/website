---
title: "Running an EKS cluster on your own"
description: "What a solo contractor can genuinely commit to when operating Kubernetes, and the three promises not to make without a team behind you."
updatedAt: 2026-10-09
publishedAt: 2026-08-18
tags: ["Kubernetes", "Managed services", "SRE"]
summary: "Taking over EKS operations single-handed forces a choice about what goes in the contract. Here are the commitments that hold, and the ones that do not."
---

Kubernetes managed services is a team job. A solo contractor can practise it, provided they are precise about what they guarantee. The difficulty is not technical: it is in the contractual scope.

## What holds without on-call

Daytime operations covers real needs. Version upgrades, certificate management, alert review, sizing and cost tracking are all handled during business hours without degrading service.

That scope suits platforms whose downtime is annoying rather than critical: an internal tool, a staging environment, an application whose maintenance window is negotiable.

## The tempo of solo operations

Daytime does not mean occasional. Operations run on a fixed rhythm, and that rhythm is what replaces on-call: what is done on a fixed date does not become an incident.

The upstream calendar sets the tempo. The Kubernetes community releases a minor version roughly every four months, and EKS follows that cycle. A platform that upgrades once a year stays inside the support window; a platform that never upgrades ends up paying a higher rate for an identical service.

What is handled during business hours: alert review, certificate renewal, add-on upgrades, sizing, reading the bill. What needs an announced window: control plane and node upgrades, base image changes, changes to the ingress layer. The window is chosen with the client, not against them.

## Taking over an existing platform

Taking over operations happens in two steps, in this order.

**The inventory.** What runs, what alerts, who holds the access, what is documented and what is not. This step takes one to two weeks on a medium-sized platform, and everything else depends on it: you do not commit to what you have not seen.

**The catch-up.** Version gaps, certificates expiring in three weeks, backups never restored, alerts that go nowhere. This is the visible work of the first weeks.

What does not get touched straight away: the architecture. A platform that runs carries decisions nobody wrote down, and changing them before understanding usage produces exactly the incidents the engagement exists to avoid.

## The Kubernetes version is a budget as much as a risk

An EKS cluster charges $0.10 per hour for its control plane, so around $73 a month, whatever the number of nodes. That rate applies to a version under standard support.

A Kubernetes version stays under standard support for fourteen months after its release in EKS, then moves to extended support for twelve months at $0.60 per hour: six times the rate, for the same service. Extended support is on by default, and billing starts on the day the version leaves standard support.

That rate is not a simple penalty. Extended support keeps security patches coming for the control plane and the main add-ons — VPC CNI, kube-proxy, CoreDNS — which explains part of the price. Beyond it, the community stops publishing patches for unsupported versions, and a vulnerability specific to an old version may simply stop being reported.

Three mechanical points decide how hard an upgrade really is.

**Nodes do not upgrade with the control plane.** A managed node group creates EC2 instances in your account and does not follow the control plane version automatically: the upgrade happens in two steps, and an old node group signals nothing by itself.

**The gap between control plane and nodes is tolerated up to three minor versions.** Beyond that, the configuration is no longer recommended. A cluster that lets its nodes fall behind ends up upgrading twice.

**A rollback is possible within seven days of an in-place upgrade.** After that, or when the upgrade was triggered automatically, there is no way back.

At the end of extended support, AWS upgrades the control plane automatically, without notice, to the oldest supported version. A platform that waits discovers its upgrade one morning, with no window of its own choosing.

## The indicators I look at

An operations contract is judged on indicators, not on an impression. Four are enough.

**The version gap.** How long between a version being released in EKS and it reaching production. A gap that widens is debt that will be paid, in rate or in difficulty.

**Alert volume.** A platform that alerts too much is no longer being watched. The number of alerts per week measures the quality of monitoring, not the team's vigilance.

**Time to acknowledge**, met or not. It is the only commitment I sign, so it is the first thing to measure.

**Cost per environment.** The total bill says nothing; cost per environment says which decision produced it.

## What does not hold

**24/7 on-call alone.** A permanent night commitment requires rotation. A single person promising intervention at three in the morning takes on an engagement they will not be able to hold for two years, and the client discovers the limit on the day of the incident.

**A guaranteed recovery time.** On an incident whose cause is in the application, the operator diagnoses and escalates, but does not fix the code. Promising a recovery time means committing to work that depends on a third party.

**A numeric availability target with no history.** Claiming 99.9% assumes you know the failure points and have measured them. A figure stated without measurement is a sales promise, not a technical commitment.

## The wording I use

What can be contracted cleanly: a time to acknowledge, an intervention window, a channel and a named contact. The distinction matters: you commit to your own reaction, not to the final outcome, which depends on things outside your control.

Everything else is handled transparently with the client. A critical platform deserves a team with rotation, or a contractor backed by a collective. That is one of the reasons I work within Cloud Partners rather than on my own.

## What decides between solo and a collective

The criterion is not the size of the platform, it is how much its downtime matters. An internal tool operated during the day needs no rotation. A service carrying revenue does, and pretending otherwise is not honest.

That is the question I ask at scoping: what happens if the platform is unavailable for a whole night? If the answer is "we wait until the morning", daytime operations is enough. If the answer is "we lose customers", you need a team with rotation — mine when the scope allows it, or that of a collective I lean on.

## The warning sign

A contractor who accepts the whole scope without discussion is a contractor who has not read the contract. The conversation about limits is part of the service, and it costs less before signature than after the first incident.
