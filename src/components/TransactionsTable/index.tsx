import React, { useEffect } from "react";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">300.00</td>
            <td>Desenvolvimento</td>
            <td>06/02/2022</td>
          </tr>

          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="withdraw">300.00</td>
            <td>Desenvolvimento</td>
            <td>06/02/2022</td>
          </tr>

          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">300.00</td>
            <td>Desenvolvimento</td>
            <td>06/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
