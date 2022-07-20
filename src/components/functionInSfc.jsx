export const FunctionInSfc = () => {
  return (
    <button onClick={callAlert} className="btn btn-success">
      {" "}
      +{" "}
    </button>
  );
};
export const callAlert = () => {
  return alert(" opaa ,that worked in sfc!");
};
