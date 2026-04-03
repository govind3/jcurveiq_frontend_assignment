export const runError = [
  {
    type: "run_started",
    run_id: "r002",
    query: "Analyse Tesla margins",
    timestamp: 1,
  },

  {
    type: "task_spawned",
    task_id: "t1",
    label: "Fetch Tesla filings",
    agent: "fetcher",
    timestamp: 2,
  },

  {
    type: "task_update",
    task_id: "t1",
    status: "failed",
    error: "network error",
    timestamp: 3,
  },

  {
    type: "run_error",
    run_id: "r002",
    message: "Coordinator crashed",
    timestamp: 4,
  },
];
