export const runSuccess = [
  {
    type: "run_started",
    run_id: "r_001",
    query: "Analyse Apple R&D intensity vs peers",
    timestamp: 1,
  },

  {
    type: "agent_thought",
    task_id: "coordinator",
    thought: "Breaking into multiple research tasks",
    timestamp: 2,
  },

  {
    type: "task_spawned",
    task_id: "t_001",
    label: "Fetch Apple filings",
    agent: "filing_fetcher",
    parallel_group: null,
    depends_on: [],
    timestamp: 3,
  },

  {
    type: "tool_call",
    task_id: "t_001",
    tool: "sec_edgar_search",
    input_summary: "AAPL 2019-2023",
    timestamp: 4,
  },

  {
    type: "tool_result",
    task_id: "t_001",
    tool: "sec_edgar_search",
    output_summary: "5 filings found",
    timestamp: 5,
  },

  {
    type: "partial_output",
    task_id: "t_001",
    content: "Apple R&D grew 84%",
    is_final: false,
    timestamp: 6,
  },

  {
    type: "task_spawned",
    task_id: "t_002",
    label: "Fetch Microsoft filings",
    agent: "filing_fetcher",
    parallel_group: "pg1",
    depends_on: [],
    timestamp: 7,
  },

  {
    type: "task_spawned",
    task_id: "t_003",
    label: "Fetch Google filings",
    agent: "filing_fetcher",
    parallel_group: "pg1",
    depends_on: [],
    timestamp: 8,
  },

  {
    type: "task_spawned",
    task_id: "t_004",
    label: "Fetch Meta filings",
    agent: "filing_fetcher",
    parallel_group: "pg1",
    depends_on: [],
    timestamp: 9,
  },

  {
    type: "task_update",
    task_id: "t_004",
    status: "failed",
    error: "Rate limit",
    timestamp: 10,
  },

  {
    type: "task_update",
    task_id: "t_004",
    status: "running",
    timestamp: 11,
  },

  {
    type: "task_update",
    task_id: "t_004",
    status: "cancelled",
    reason: "sufficient_data",
    message: "3 peers enough",
    timestamp: 12,
  },

  {
    type: "partial_output",
    task_id: "t_002",
    content: "Microsoft R&D stable",
    is_final: true,
    quality_score: 0.91,
    timestamp: 13,
  },

  {
    type: "task_update",
    task_id: "t_002",
    status: "complete",
    timestamp: 14,
  },

  {
    type: "partial_output",
    task_id: "t_003",
    content: "Google R&D high",
    is_final: true,
    quality_score: 0.89,
    timestamp: 15,
  },

  {
    type: "task_update",
    task_id: "t_003",
    status: "complete",
    timestamp: 16,
  },

  {
    type: "task_spawned",
    task_id: "t_005",
    label: "Synthesis",
    agent: "coordinator",
    depends_on: ["t_001", "t_002", "t_003"],
    timestamp: 17,
  },

  {
    type: "agent_thought",
    task_id: "t_005",
    thought: "Combining insights",
    timestamp: 18,
  },

  {
    type: "partial_output",
    task_id: "t_005",
    content: "Apple increasing R&D faster than peers",
    is_final: false,
    timestamp: 19,
  },

  {
    type: "partial_output",
    task_id: "t_005",
    content: "Final synthesis ready",
    is_final: true,
    timestamp: 20,
  },

  {
    type: "task_update",
    task_id: "t_005",
    status: "complete",
    timestamp: 21,
  },

  {
    type: "run_complete",
    run_id: "r_001",
    output: {
      summary: "Apple increased R&D significantly vs peers",
      citations: [{ title: "Apple 10K" }],
    },
    timestamp: 22,
  },
];
