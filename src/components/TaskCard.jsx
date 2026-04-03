import ToolCall from "./ToolCall";

const TaskCard = ({ task }) => {
  const color = {
    running: "bg-yellow-200",
    complete: "bg-green-100",
    failed: "bg-red-100",
    cancelled: "bg-gray-200",
  };
  const borderColor = {
    running: "border-yellow-300",
    complete: "border-green-300",
    failed: "border-red-300",
    cancelled: "border-gray-300",
  };
  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-3">
      <div className="flex justify-between">
        <div>
          <div className="font-medium">{task.label}</div>

          <div className="text-sm text-gray-500">agent: {task.agent}</div>
        </div>

        <span
          className={`px-2 py-1 flex items-center rounded-lg ${color[task.status]} ${borderColor[task.status]}  border-2`}
        >
          {capitalizeFirstLetter(task.status)}
        </span>
      </div>

      {task.error && <div className="text-red-500 text-sm">{task.error}</div>}

      {task.reason && (
        <div className="text-gray-500 text-sm">reason: {task.reason}</div>
      )}

      <ToolCall calls={task.toolCalls} />

      {task.outputs.map((o, i) => (
        <div key={i} className="text-sm mt-2 p-2 bg-gray-50 rounded">
          {o.content}

          {o.quality_score && (
            <span className="ml-2 text-xs">score {o.quality_score}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
