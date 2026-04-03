# Agent Run Panel

This project implements a real-time **Agent Run Panel** UI that
visualizes how an AI multi-agent system executes research tasks.\
Instead of showing a simple loading spinner, the interface displays task
orchestration, tool calls, intermediate outputs, retries, and final
synthesized results.

The goal is to improve transparency and trust for analysts using
AI-generated research outputs.

------------------------------------------------------------------------

# Tech Stack

-   React (Hooks + Functional Components)
-   Vite
-   Tailwind CSS
-   Local mock event stream (no backend)
-   State managed via reducer pattern

------------------------------------------------------------------------

# Features

## Run Lifecycle Visibility

The UI displays the full lifecycle of an agent run:

-   run started
-   tasks spawned
-   tool calls
-   intermediate outputs
-   retry flow
-   cancelled tasks
-   final synthesis output
-   error scenario

## Parallel Task Visualization

Tasks with the same `parallel_group` id are grouped visually to
communicate concurrent execution.

## Partial Output Streaming

Tasks may emit intermediate outputs before completion. These outputs are
shown inline to communicate progress.

## Retry Handling

Tasks transitioning from: running → failed → running → complete

are displayed clearly so users understand recovery behavior.

## Cancelled State

Tasks cancelled due to sufficient data are displayed as neutral states
instead of errors.

## Final Output Emphasis

The final synthesized result is visually highlighted to ensure it is the
primary focus.

## Error Scenario

An alternate fixture demonstrates how the UI behaves when a run fails
mid-execution.

------------------------------------------------------------------------

# Project Structure

src/

components/ - RunHeader.jsx - TaskCard.jsx - ToolCall.jsx -
AgentThought.jsx - ParallelGroup.jsx - FinalOutput.jsx - EmptyState.jsx

mock/ - fixtures/ - run_success.js - run_error.js - eventEmitter.js

core/ - reducer.js

root/ - App.jsx - main.jsx - index.css

------------------------------------------------------------------------

# Installation

``` bash
npm install
npm run dev
```

Application runs locally using Vite.

------------------------------------------------------------------------

# Switching Between Fixtures

Use the buttons in the UI to switch between run scenarios:

### Success Run

Shows full lifecycle: - sequential task - parallel tasks - retry -
cancellation - synthesis - final output

### Error Run

Simulates coordinator failure before completion.

Fixtures are located in:

mock/fixtures/

------------------------------------------------------------------------

# Event Simulation Approach

The project includes a local event emitter that simulates real-time
streaming of events using setTimeout.

This creates realistic timing between events to mimic how a real
multi-agent system behaves.

Example:

run_started → agent_thought → task_spawned → tool_call → partial_output
→ run_complete

------------------------------------------------------------------------

# Known Limitations

With more time, the following improvements would be implemented:

-   timeline view for execution
-   dependency visualization graph
-   collapsible logs for large output streams
-   improved retry timeline indicators
-   WebSocket based streaming simulation
-   performance optimization for large task graphs
-   filtering views (errors only / final outputs only)

------------------------------------------------------------------------

# Design Goals

The UI prioritizes:

clarity\
trust\
readability\
simple mental model\
accurate lifecycle representation

The final output is emphasized while preserving transparency into the
reasoning process.

------------------------------------------------------------------------

# Author Notes

Hardest part: Designing a UI that clearly communicates retry vs failure
vs cancellation without confusing the user.

Schema improvement suggestion: A dedicated retry_count field would
simplify UI logic for representing retry attempts.
