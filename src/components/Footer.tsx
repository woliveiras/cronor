import { css } from "@emotion/react";

const styles = {
  footer: css({
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  }),
};

export const Footer = () => {
  return (
    <footer css={styles.footer}>
      <p>
        Created by <a href="https://github.com/woliveiras">@woliveiras</a> with
        ❤️ and <a href="https://www.npmjs.com/package/cronstrue">cronstrue</a>
      </p>
    </footer>
  );
};
