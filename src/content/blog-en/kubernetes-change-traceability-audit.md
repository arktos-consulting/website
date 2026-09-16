---
title: "Kubernetes change traceability for a regulatory audit"
description: "How to answer the 'who changed what, when' requirement on a Kubernetes cluster, without deploying a heavy machinery."
publishedAt: 2026-07-22
tags: ["Kubernetes", "Compliance", "Audit"]
summary: "Regulated industries require traceability of cluster changes. The Kubernetes audit log answers part of the question, but rarely in the form an auditor expects."
---

In the financial sector, the requirement is stated simply: being able to say who changed what and when, and to prove it to an auditor. On a Kubernetes cluster the technical answer exists, but it does not directly produce the expected deliverable.

## What the logs provide

The Kubernetes audit log records every call to the API server with the identity of the caller, the resource touched and the request body. That is the complete raw material.

The problem lies elsewhere. An audit log is a stream of technical events, not a change register. A single application deployment generates dozens of related entries, and the link to a change request, an approval or a ticket does not exist in the logs.

## What the auditor asks for

They usually want to read one line per significant change: the date, the author, the nature of the modification, the reference of the authorisation. The fields the raw logs do not have.

So there is reconstruction work: correlating audit entries with an identity source, grouping the modifications that belong to the same deployment, and producing a readable format that stays stable over time.

## Three design choices

**Keep the audit log long enough.** Retention is short by default. For an audit going back twelve months, it has to be planned from the start, with a storage cost to estimate.

**Do not base traceability on human identity alone.** An automated deployment has no user behind it, but a pipeline and a commit. That is the chain you need to follow back to the person who approved it.

**Make the evidence verifiable without the team.** A report only its author can read is useless in an audit. The deliverable has to stand on its own, with its method explained.

## The expected outcome

A report that can be consulted, and a chain that can be reconstructed on demand: from the change observed on the cluster back to the original approval. All without requiring the operations team to produce the document by hand every quarter, which is the version that always ends up not being done.
