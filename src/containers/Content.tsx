import { Explanation } from "../components/tables/Explanation";
import { SpecialCharacters } from "../components/tables/SpecialCharacters";
import { Examples } from "../components/tables/Examples";

export const Content = () => {
  return (
    <section>
      <h3>Examples</h3>
      <Examples />
      <hr
        css={{
          margin: "2rem 0",
          border: 0,
          borderTop: "1px solid #ddd",
        }}
      />
      <details>
        <summary css={{ marginBottom: "1rem" }}>Explanation</summary>
        <div css={{ marginBottom: "2rem" }}>
          <p>
            The cron expression are made of five fields separated by spaces.
            Each field represents a unit of time.
          </p>
          <p>The available fields are:</p>
          <Explanation />
        </div>
      </details>
      <details>
        <summary css={{ marginBottom: "1rem" }}>Special Characters</summary>
        <div css={{ marginBottom: "2rem" }}>
          <p>Special characters used in cron expressions:</p>
          <SpecialCharacters />
        </div>
      </details>
    </section>
  );
};
