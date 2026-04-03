# DECISIONS.md

## 1. Agent Thoughts --- Visibility Strategy

**Decision:**\
Agent thoughts are displayed inline as lightweight informational blocks
using a subtle visual style (purple background). They are visible by
default but visually de-emphasized compared to task outputs and final
results.

**Reasoning:**\
The primary user is a financial analyst, not a developer debugging the
system. Completely hiding agent thoughts would reduce transparency and
trust in the system, while over-emphasizing them could create cognitive
overload. Showing thoughts inline provides useful context about why
certain tasks are created (e.g., breaking a problem into subtasks)
without interrupting the flow of the task list.

This approach supports trust-building by giving users a glimpse into the
reasoning process while still prioritizing outcomes.

**When I would reconsider:**\
If user testing showed analysts find thoughts distracting or confusing,
I would move them into collapsible panels or a toggle ("Show
reasoning"). Conversely, if developers were the primary users, I might
show more detailed reasoning logs or timestamps.

------------------------------------------------------------------------

## 2. Parallel Task Layout

**Decision:**\
Tasks sharing the same `parallel_group` identifier are visually grouped
using a left border and a labeled section ("Parallel tasks"). Tasks
inside the group are stacked vertically to maintain readability while
clearly indicating simultaneous execution.

**Reasoning:**\
A purely chronological vertical list would incorrectly suggest
sequential execution. By grouping parallel tasks into a visually
distinct container, the UI communicates concurrency without introducing
complex graph visualizations.

This solution balances clarity and implementation simplicity while
avoiding diagram complexity that may overwhelm non-technical users.

**When I would reconsider:**\
If agent workflows became significantly more complex (e.g., many
parallel groups or nested concurrency), I would explore timeline-based
layouts or swimlane diagrams to improve clarity.

------------------------------------------------------------------------

## 3. Partial Outputs (is_final: false)

**Decision:**\
Partial outputs are displayed inline within the task card in
chronological order, styled as lightweight log entries. Final outputs
include a quality score indicator when available.

**Reasoning:**\
Partial outputs provide meaningful insight into progress and demonstrate
that the system is actively working. Showing intermediate outputs
improves perceived performance and transparency, especially during
longer-running tasks.

Displaying them inline avoids hiding potentially valuable information
and preserves the temporal sequence of execution.

**When I would reconsider:**\
If tasks generated large volumes of intermediate outputs, I would
collapse them into expandable sections or summarize them automatically
to reduce UI clutter.

------------------------------------------------------------------------

## 4. Cancelled Status with reason: "sufficient_data"

**Decision:**\
Cancelled tasks are displayed with a neutral gray status badge and a
short explanatory message when available. The styling avoids red error
indicators to prevent users from interpreting cancellations as failures.

**Reasoning:**\
The cancellation reason "sufficient_data" represents an intelligent
decision by the coordinator agent, not an error condition. Using neutral
visual language reinforces that the system is behaving efficiently and
intentionally.

Clear messaging ensures users understand that the cancellation reflects
optimization rather than malfunction.

**When I would reconsider:**\
If cancellation reasons included user-triggered stops or genuine issues,
I might differentiate cancellation types using separate icons or labels.

------------------------------------------------------------------------

## 5. Task Dependency Representation

**Decision:**\
Dependencies are handled implicitly through execution order rather than
explicitly visualized with graph structures. Tasks appear only after
their dependencies have been completed or resolved.

For synthesis tasks, dependency relationships are respected in
sequencing but not visually diagrammed.

**Reasoning:**\
Introducing visual dependency graphs would significantly increase UI
complexity and may not improve comprehension for the target user. Since
dependencies are already enforced in the event sequence, preserving
logical ordering is sufficient to communicate workflow progression.

This keeps the UI simple while maintaining accuracy.

**When I would reconsider:**\
If analysts needed to audit reasoning chains or debug incorrect outputs,
a dependency visualization (e.g., expandable graph or tooltip listing
prerequisite tasks) could provide additional clarity.

------------------------------------------------------------------------

## 6. Information Hierarchy

**Decision:**\
The final synthesized output is displayed in a visually prominent
container with stronger contrast, larger spacing, and separation from
the task list.

**Reasoning:**\
The final research result is the primary artifact the analyst cares
about. The execution process supports trust but should not overshadow
the result itself. Elevating the final output ensures users immediately
recognize the conclusion of the agent workflow.

**When I would reconsider:**\
If users needed to frequently inspect intermediate steps for validation,
I might introduce summary cards highlighting key intermediate insights.

------------------------------------------------------------------------

## 7. Failure and Retry Representation

**Decision:**\
Task retry sequences are displayed as status transitions in the task
card, allowing users to see the lifecycle progression (running → failed
→ running → complete or cancelled).

Errors are shown inline using subtle red text, without interrupting
layout structure.

**Reasoning:**\
This approach communicates resilience of the system and demonstrates
recovery from temporary issues such as API rate limits. Showing retry
progression improves confidence in system robustness.

**When I would reconsider:**\
If tasks frequently retried multiple times, a compact retry counter or
timeline indicator could reduce visual noise.

------------------------------------------------------------------------

## 8. Empty State Design

**Decision:**\
When no run is active, the UI displays a minimal empty state message
encouraging the user to start a run.

**Reasoning:**\
Providing a simple placeholder prevents the interface from appearing
broken or incomplete before execution begins.

**When I would reconsider:**\
If this panel were part of a larger product, the empty state could
include suggested example queries or onboarding guidance.

------------------------------------------------------------------------

## Summary

The design prioritizes:

-   clarity over visual complexity
-   transparency without overwhelming detail
-   strong emphasis on final research output
-   accurate representation of agent lifecycle states
-   scalability for more complex workflows

The UI helps analysts understand what the system is doing and why they
should trust the results, without requiring technical knowledge of
multi-agent orchestration systems.
