const FinalOutput = ({ output }) => {
  if (!output) return null;

  return (
    <div className="bg-green-50 border-2 border-green-400 p-5 rounded-2xl mt-4">
      <h2 className="font-semibold text-lg mb-2">Final Result</h2>

      <div>{output.summary}</div>
    </div>
  );
};

export default FinalOutput;
