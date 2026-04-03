import { useEffect, useReducer, useState } from "react";

import { reducer, initialState } from "./reducer";

import { runSuccess } from "./mock/fixtures/run_success";
import { runError } from "./mock/fixtures/run_error";

import { runMock } from "./mock/eventEmitter";

import RunHeader from "./components/RunHeader";
import TaskCard from "./components/TaskCard";
import AgentThought from "./components/AgentThought";
import ParallelGroup from "./components/ParallelGroup";
import FinalOutput from "./components/FinalOutput";
import EmptyState from "./components/EmptyState";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [fixture, setFixture] = useState("success");

  useEffect(() => {
    const events = fixture === "success" ? runSuccess : runError;

    runMock(events, dispatch);
  }, [fixture]);

  const tasks = Object.values(state.tasks);

  const parallelGroups = {};

  const normalTasks = [];

  tasks.forEach((t) => {
    if (t.parallel_group) {
      if (!parallelGroups[t.parallel_group])
        parallelGroups[t.parallel_group] = [];

      parallelGroups[t.parallel_group].push(t);
    } else {
      normalTasks.push(t);
    }
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Agent Run Panel</h1>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFixture("success")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          success run
        </button>

        <button
          onClick={() => setFixture("error")}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          error run
        </button>
      </div>

      {!state.run && <EmptyState />}

      <RunHeader run={state.run} startTime={state.startTime} />

      {state.thoughts.map((t, i) => (
        <AgentThought key={i} thought={t} />
      ))}

      {normalTasks.map((t) => (
        <TaskCard key={t.task_id} task={t} />
      ))}

      {Object.values(parallelGroups).map((group, i) => (
        <ParallelGroup key={i} tasks={group} />
      ))}

      <FinalOutput output={state.finalOutput} />

      {state.error && (
        <div className="bg-red-50 border p-3 mt-4 rounded">{state.error}</div>
      )}
    </div>
  );
};

export default App;
