import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de Website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2022-02-06 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel de casa",
          type: "withdraw",
          category: "Casa",
          amount: 400,
          createdAt: new Date("2022-02-01 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
