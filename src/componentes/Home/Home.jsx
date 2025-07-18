import Icon from "@ant-design/icons";
import { Carousel, Result } from "antd";

export function Home() {
  return (
    <div className="mensagem-carrosel">
      <Carousel dotPosition="top" effect={"fade"} autoplay pauseOnDotsHover={true}>
        <Result
          key={0}
          icon={<Icon type="sound" />}
          status="warning"
          title={"Projeto Final UTD - 28/04/2025 à 24/07/2025 Ead"}
          subTitle={
            <div style={{ textAlign: "left" }}>
              <div>
                <strong>📦 Backend:</strong> Node.js, Express, Sequelize, MySQL
              </div>
              <div>
                <strong>⚛️ Frontend:</strong> React, Vite, React Router, Axios, React Icons
              </div>
              <div>
                <strong>📂 Estrutura:</strong> Páginas modulares, organização com pastas <code>pages</code> e{" "}
                <code>services</code>
              </div>
              <div>
                <strong>🔗 Integração:</strong> API REST conectada via Axios
              </div>
              <div>
                <em>Desenvolvimento Full Stack de uma aplicação de cadastro de clientes</em>
              </div>
            </div>
          }
        />
      </Carousel>
    </div>
  );
}
