"use client";

const GlobalError = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Something went wrong.</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default GlobalError;
