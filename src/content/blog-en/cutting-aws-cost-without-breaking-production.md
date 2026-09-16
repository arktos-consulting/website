---
title: "Cutting an AWS bill without breaking production"
description: "The FinOps method I apply during an audit: where the money is actually wasted on an AWS platform, and why cutting at random costs more than doing nothing."
publishedAt: 2026-09-08
tags: ["FinOps", "AWS", "Audit"]
summary: "The most visible line item is almost never the biggest one. This is the order in which I read a bill, and the three traps that sink most savings plans."
---

People often ask for a FinOps audit assuming it means cancelling unused resources. In practice, the obvious waste is rarely the main part of the bill, and cutting it without understanding usage produces incidents that cost more than the saving.

## Where the money actually is

The most common disorder on a platform that grew fast sits in three areas, ordered by impact.

**Non-production environments left running.** Development, staging and demo clusters often run around the clock while only being used during working hours. The measurement is easy and the saving is real, but it meets a legitimate objection: a team that loses thirty minutes every morning restarting its environment will eventually route around the rule.

**Oversizing out of caution.** Instances sized to absorb the traffic of a launch day, kept two years later. The metrics almost always show a wide gap between actual consumption and reserved capacity. The lever is resizing, not cancellation.

**Data that accumulates with no retention policy.** Application logs, forgotten snapshots, object versions in buckets without lifecycle rules. This is the quietest line item and often the heaviest on an older platform.

## The three traps

**Optimising before measuring.** A savings plan built on an impression produces arbitrary cuts. Thirty days of usage metrics are the prerequisite, not an option.

**Cutting what nobody watches.** A resource with no alert attached is a resource whose failure nobody will see. Before touching an environment, you need to know what will start shouting.

**Treating FinOps as a project.** A one-off campaign brings the bill back to where it was within six months. What holds over time is a tracked indicator and a named owner.

## What an audit produces

A table of line items with, for each, the savings potential, the implementation effort and the production risk involved. Then an order of treatment. The decisions stay with the client: I provide the rationale and the costing, not a shopping list.

This is also why a FinOps audit run on its own stops at the bill. The real lever sits where architecture, operational practice and cost meet, which means knowing why the platform is built the way it is.
