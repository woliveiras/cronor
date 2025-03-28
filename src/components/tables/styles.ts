import { css } from "@emotion/react";

export const styles = {
  table: css({
    borderCollapse: "collapse",
    width: "100%",

    "& th, td": css({
      border: "1px solid #ddd",
      padding: "10px",
    }),
  }),
};
