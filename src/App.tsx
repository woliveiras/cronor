import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

import { Content } from "./containers/Content";
import { css } from "@emotion/react";

const styles = {
  container: css({
    width: "100%",
    maxWidth: "1200px",
    minWidth: "320px",
    "@media (min-width: 768px)": {
      minWidth: "720px",
    },
  }),
};

function App() {
  return (
    <div css={styles.container}>
      <Header />
      <Main>
        <Form />
      </Main>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
