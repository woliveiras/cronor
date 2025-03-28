import { styles } from "./styles";

export const SpecialCharacters = () => {
  return (
    <table css={styles.table}>
      <thead>
        <tr>
          <th>Character</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>*</strong>
          </td>
          <td>Any value</td>
        </tr>
        <tr>
          <td>
            <strong>,</strong>
          </td>
          <td>Value list separator</td>
        </tr>
        <tr>
          <td>
            <strong>-</strong>
          </td>
          <td>Range of values</td>
        </tr>
        <tr>
          <td>
            <strong>/</strong>
          </td>
          <td>Step values</td>
        </tr>
        <tr>
          <td>
            <strong>?</strong>
          </td>
          <td>No specific value</td>
        </tr>
        <tr>
          <td>
            <strong>L</strong>
          </td>
          <td>Last value</td>
        </tr>
        <tr>
          <td>
            <strong>W</strong>
          </td>
          <td>Weekday</td>
        </tr>
        <tr>
          <td>
            <strong>#</strong>
          </td>
          <td>N-th weekday of the month</td>
        </tr>
      </tbody>
    </table>
  );
};
