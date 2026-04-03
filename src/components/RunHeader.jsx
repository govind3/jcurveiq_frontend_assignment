const RunHeader = ({ run, startTime }) => {
  if (!run) return null;

  const seconds = Math.floor((Date.now() - startTime) / 1000);
  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

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
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      <h2 className="font-semibold text-lg">{run.query}</h2>

      <div className="flex gap-4 mt-2">
        <span
          className={`px-2 py-1 rounded-lg ${color[run.status]} ${borderColor[run.status]} border-2`}
        >
          {capitalizeFirstLetter(run.status)}
        </span>

        <span>elapsed: {seconds}s</span>
      </div>
    </div>
  );
};

export default RunHeader;
