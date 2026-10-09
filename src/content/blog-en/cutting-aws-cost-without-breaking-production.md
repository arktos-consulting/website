---
title: "Cutting an AWS bill without breaking production"
metaTitle: "Cutting an AWS bill: the FinOps method"
description: "The FinOps method I apply during an audit: where the money is actually wasted on an AWS platform, and why cutting at random costs more than doing nothing."
updatedAt: 2026-10-09
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

## The five line items I keep seeing

Beyond those three areas, some services produce a running cost that nobody connects to a decision. The prices below are AWS list prices, before discounts, and they are there to give an order of magnitude.

**Logs.** CloudWatch charges for ingestion, for storage and for queries, per gigabyte, with a monthly free tier of 5 GB. An application stream left at debug level is paid for by the gigabyte, every month, with nobody looking at it. The first move is not to switch logging off, but to set a level per environment and a retention period per stream.

**NAT gateways.** A NAT gateway costs $0.045 per hour, so around $33 a month, plus $0.045 per gigabyte processed. Traffic to S3 goes through that gateway by default, and it is paid for twice: per gigabyte processed, then again as data transfer. A gateway endpoint for S3 removes the processing charge entirely, with no hourly fee and no change to the code.

**The Kubernetes control plane.** An EKS cluster charges $0.10 per hour under standard support, so around $73 a month, whatever the number of nodes. A Kubernetes version stays under standard support for fourteen months after its release in EKS, then moves to extended support at $0.60 per hour: six times the price for the same service. Staying on an old version is a cost decision as much as a technical one.

**Volumes and their copies.** A gp3 volume charges $0.08 per gigabyte per month, with 3,000 IOPS and 125 MB/s included in that price. The line item becomes visible once part of the volumes is attached to nothing: an environment switched off six months ago, disks from a deleted cluster, backups nobody can trace back to a source.

**Resources reserved for idleness.** Public IP addresses with no association, load balancers with no registered target, queues emptied a year ago but kept just in case. They are cheap per unit; they are the sign that no inventory exists.

## How I measure

The bill and the usage do not tell the same story. Cost Explorer answers "how much", by service and by account. The cost and usage report, delivered to an S3 bucket and queryable with Athena, answers "who, what, when": it is the only source that goes down to a named resource.

Three rules apply before anything is proposed.

**Thirty days of metrics, not an impression.** A traffic peak, a launch day or a quarter end do not describe actual consumption. The measurement window is the month, and it is compared against what is reserved.

**What is not attributed cannot be decided.** On an account that was never segmented, part of the bill stays unattributed. No trade-off is possible on a line item you cannot tie to a team or a product. Tagging part of the estate is often the first real deliverable of an audit.

**Measuring before cutting.** Every resource considered for shutdown needs an alert attached. If nobody will see the failure, the cut is not a saving, it is technical debt.

The native tools do the work: Cost Explorer for reading, the cost and usage report for fine analysis, Budgets and anomaly detection for monitoring, Compute Optimizer for resizing. None of them replaces knowing why the architecture is built the way it is.

## The three traps

**Optimising before measuring.** A savings plan built on an impression produces arbitrary cuts. Thirty days of usage metrics are the prerequisite, not an option.

**Cutting what nobody watches.** A resource with no alert attached is a resource whose failure nobody will see. Before touching an environment, you need to know what will start shouting.

**Treating FinOps as a project.** A one-off campaign brings the bill back to where it was within six months. What holds over time is a tracked indicator and a named owner.

## The levers, in order

Order matters as much as content. Cutting out of sequence produces regressions, and those cost the trust the rest of the plan depends on.

**What can be switched off safely.** Unassociated IP addresses, unattached volumes, snapshots whose source no longer exists. None of these needs an architecture decision, only an inventory.

**Retention.** Lifecycle rules on buckets, object versions, log retention periods. This is the lever that degrades fastest without supervision: a rule set today and forgotten lets the data come back.

**Traffic.** Gateway endpoints for S3, then a review of outbound flows between availability zones. The gain is immediate and has no effect on production.

**Sizing.** Resizing against the metrics, autoscaling, instance type selection. This is where the widest gap sits between reserved capacity and observed consumption.

**Commitment.** Compute Savings Plans cut the bill by up to 66%, EC2 Instance Savings Plans by up to 72%, on a one- or three-year commitment. This lever comes last, on a measured and stable baseline. Committing before resizing freezes the oversizing for three years.

## How long it takes

Measurement takes thirty days: a shorter campaign sees neither the peaks nor the troughs. A FinOps audit then runs over two to four weeks depending on the size of the estate, which includes reading, interviews with the teams and costing the options.

The effect of a campaign shows up in the following quarter, not on the bill of the month the cut happened. A commitment runs for one or three years, which is exactly why it comes after the measurement.

## What an audit produces

A table of line items with, for each, the savings potential, the implementation effort and the production risk involved. Then an order of treatment. The decisions stay with the client: I provide the rationale and the costing, not a shopping list.

This is also why a FinOps audit run on its own stops at the bill. The real lever sits where architecture, operational practice and cost meet, which means knowing why the platform is built the way it is.

## What holds over time

What survives the campaign comes down to three things: a tracked indicator, a named owner and a short review at a regular interval. Cost per environment, or per customer, is a better indicator than the bill total, because it ties back to a decision rather than to a figure.

The dashboard does not need to be pretty. It needs to be read, and it needs to hold after the person who set it up has moved on. That is the difference between a saving and a dip.
