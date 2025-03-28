import { styles } from "./styles";

export const Examples = () => {
  return (
    <table css={styles.table}>
      <thead>
        <tr>
          <th>Expression</th>
          <th>Schedule</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>* * * * *</code>
          </td>
          <td>Every minute</td>
        </tr>
        <tr>
          <td>
            <code>0 * * * *</code>
          </td>
          <td>Every hour</td>
        </tr>
        <tr>
          <td>
            <code>0 0 * * *</code>
          </td>
          <td>Every day at 12:00 AM</td>
        </tr>
        <tr>
          <td>
            <code>0 0 * * FRI</code>
          </td>
          <td>At 12:00 AM, only on Friday</td>
        </tr>
        <tr>
          <td>
            <code>0 0 1 * *</code>
          </td>
          <td>At 12:00 AM, on day 1 of the month</td>
        </tr>
        <tr>
          <td>
            <code>0 23 ? * MON-FRI</code>
          </td>
          <td>At 11:00 PM, Monday through Friday</td>
        </tr>
        <tr>
          <td>
            <code>23 12 * * SUN#2</code>
          </td>
          <td>At 12:23 PM, on the second Sunday of the month</td>
        </tr>
        <tr>
          <td>
            <code>@weekly</code>
          </td>
          <td>At 12:00 AM, only on Sunday</td>
        </tr>
        <tr>
          <td>
            <code>@monthly</code>
          </td>
          <td>At 12:00 AM, on day 1 of the month</td>
        </tr>
      </tbody>
    </table>
  );
};
