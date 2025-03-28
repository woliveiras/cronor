import { styles } from "./styles";

export const Explanation = () => {
  return (
    <table css={styles.table}>
      <thead>
        <tr>
          <th>Field</th>
          <th>Allowed Values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Minutes</td>
          <td>0-59</td>
        </tr>
        <tr>
          <td>Hours</td>
          <td>0-23</td>
        </tr>
        <tr>
          <td>Day of month</td>
          <td>1-31</td>
        </tr>
        <tr>
          <td>Month</td>
          <td>1-12</td>
        </tr>
        <tr>
          <td>Day of week</td>
          <td>0-7 (0 and 7 are Sunday)</td>
        </tr>
      </tbody>
    </table>
  );
};
