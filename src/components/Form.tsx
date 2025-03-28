import { useState } from "react";

import { css } from "@emotion/react";
import cronstrue from "cronstrue";

const styles = {
  formContainer: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }),
  form: css({
    width: "200px",
  }),
  inputContainer: css({
    position: "relative",
    "&:focus-within label": {
      top: "-1.2rem",
    },
  }),
  input: css({
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    height: "2rem",
    lineHeight: "2rem",
  }),
  label: css({
    fontSize: "0.8rem",
    position: "absolute",
    top: "-0.5rem",
    left: "0.1rem",
    backgroundColor: "#fff",
    width: "60%",
  }),
};

export const Form = () => {
  const [cronDescription, setCronDescription] =
    useState<string>("Every minute");
  const [error, setError] = useState<boolean | null>(null);
  const [cronExpression, setCronExpression] = useState<string>("* * * * *");

  const handleInputChange = (value: string) => {
    try {
      const expression = cronstrue.toString(value);
      setError(null);
      setCronExpression(value);
      setCronDescription(expression);
    } catch (error) {
      setCronExpression(value);
      setError(true);
    }
  };

  return (
    <div css={styles.formContainer}>
      <form css={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div css={styles.inputContainer}>
          <label css={styles.label} htmlFor="cronExpression">
            Cron Expression
          </label>
          <input
            css={styles.input}
            type="text"
            name="cronExpression"
            id="cronExpression"
            value={cronExpression}
            onChange={(e) => handleInputChange(e.target.value)}
            aria-label="Cron expression"
          />
        </div>
      </form>
      <div>
        {error ? (
          <>
            <p style={{ color: "red" }}>
              Invalid cron expression. You can check the valid cron expressions
              below.
            </p>
          </>
        ) : (
          <p>
            <strong>{cronDescription}</strong>
          </p>
        )}
      </div>
    </div>
  );
};
