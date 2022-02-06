import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalcomeImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>1000, 00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>

          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>-100, 00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={totalcomeImg} alt="Total" />
        </header>

        <strong>900, 00</strong>
      </div>
    </Container>
  );
}
