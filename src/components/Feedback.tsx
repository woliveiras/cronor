type Props = {
  error: string | null;
  cronDescription: string;
};

export const Feedback = ({ error, cronDescription }: Props) => {
  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>{cronDescription}</p>
      )}
    </div>
  );
};
