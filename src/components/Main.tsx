import { css } from "@emotion/react";

const styles = {
  main: css({
    marginTop: "1rem",
    marginBottom: "1rem",
  }),
  container: css({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    padding: "2rem",
  }),
};

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main css={styles.main}>
      <h2>Cron expressions generator</h2>
      <div css={styles.container}>{children}</div>
    </main>
  );
};
