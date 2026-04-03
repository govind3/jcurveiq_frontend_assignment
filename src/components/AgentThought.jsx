const AgentThought = ({ thought }) => {
  return (
    <div className="bg-purple-50 p-2 rounded text-sm mb-2">
      {thought.thought}
    </div>
  );
};

export default AgentThought;
