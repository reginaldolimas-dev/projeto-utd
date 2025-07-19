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
          title={"PROJETO FINAL"}
          subTitle={
            <div style={{ textAlign: "left", fontSize: "18px" }}>
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
              <div style={{ marginTop: "16px" }}>
                <strong>👨‍💻 Desenvolvedor:</strong>{" "}
                <a href="https://www.linkedin.com/in/reginaldolimas/" target="_blank" rel="noopener noreferrer">
                  Meu LinkedIn
                </a>
              </div>
            </div>
          }
        />
      </Carousel>
    </div>
  );
}
