import TaskCard from "./TaskCard";

const ParallelGroup = ({ tasks }) => {
  return (
    <div className="border-l-4 border-blue-400 pl-3 mb-3">
      <div className="text-sm text-gray-500 mb-2">parallel tasks</div>

      {tasks.map((t) => (
        <TaskCard key={t.task_id} task={t} />
      ))}
    </div>
  );
};

export default ParallelGroup;
