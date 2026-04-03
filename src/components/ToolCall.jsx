const ToolCall = ({ calls }) => {
  return (
    <div className="mt-2 text-sm">
      {calls.map((c, i) => (
        <div key={i}>{c.tool && <div>tool: {c.tool}</div>}</div>
      ))}
    </div>
  );
};

export default ToolCall;
