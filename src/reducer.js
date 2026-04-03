export const initialState = {
  run: null,
  tasks: {},
  thoughts: [],
  finalOutput: null,
  error: null,
  startTime: null,
};

export function reducer(state, event) {
  switch (event.type) {
    case "run_started":
      return {
        ...state,
        run: {
          id: event.run_id,
          query: event.query,
          status: "running",
        },
        startTime: event.timestamp,
      };

    case "agent_thought":
      return {
        ...state,
        thoughts: [...state.thoughts, event],
      };

    case "task_spawned":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [event.task_id]: {
            ...event,
            status: "running",
            toolCalls: [],
            outputs: [],
            history: ["running"],
          },
        },
      };

    case "tool_call":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [event.task_id]: {
            ...state.tasks[event.task_id],
            toolCalls: [...state.tasks[event.task_id].toolCalls, event],
          },
        },
      };

    case "tool_result":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [event.task_id]: {
            ...state.tasks[event.task_id],
            toolCalls: [...state.tasks[event.task_id].toolCalls, event],
          },
        },
      };

    case "partial_output":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [event.task_id]: {
            ...state.tasks[event.task_id],
            outputs: [...state.tasks[event.task_id].outputs, event],
          },
        },
      };

    case "task_update":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [event.task_id]: {
            ...state.tasks[event.task_id],
            status: event.status,
            error: event.error,
            reason: event.reason,
            message: event.message,
            history: [...state.tasks[event.task_id].history, event.status],
          },
        },
      };

    case "run_complete":
      return {
        ...state,
        run: {
          ...state.run,
          status: "complete",
        },
        finalOutput: event.output,
      };

    case "run_error":
      return {
        ...state,
        run: {
          ...state.run,
          status: "failed",
        },
        error: event.message,
      };

    default:
      return state;
  }
}
