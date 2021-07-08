import './styles.css';

function Home() {
  return (
    <>
      <main className="home">
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">            
              <a class="navbar-brand text-dark" href="/" > <img src="./ico/first-aid.svg" className="bi  mx-5" width="40" height="40" title="Ramais" alt="phone"></img>Agendamento Online</a>
            </a>
          </header>


          <div class="row align-items-md-stretch">
            <div class="col-md-6 ">
              <div class="h-100 p-5  prod  rounded-3">
                <h2> Ambiente de Produção</h2>
                <br/><p>Banco de dados <b>PostgreSQL</b> na AWS RDS</p><br/>
                <p>Objetivo do ambiente de produção é usar uma base de dados relacional (PostgreSql), junto com o Sequelize ORM. Foi desenvolvido as rotas para a API, nesse ambiente é possível e realizar transações em um RDBS (Relational Database System), todo ambiente de desenvolvimento foi criado para uso e teste PostgreSql.</p>
                <a class="btn btn-outline-dark" href="/production" type="button">Abrir</a>
                <a class="btn btn-outline-dark m-2" href="http://api-agendamento.ddns.net:3001/postgresql" target="_blank" type="button">API - PostgreSQL </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 dev border rounded-3">
                <h2>Ambiente de Desenvolvimento</h2>
                <br/><p>Banco de dados <b>Mongodb </b> no Atlas Database</p><br/>
                <p>Objetivo do ambiente de desenvolvimento  é usar uma base de dados NoSQL (Mongodb), junto com o Mongoose. Foi desenvolvido as rotas para a API, nesse ambiente é possível e realizar transações em um NoSQL (Non-Relational Database), todo ambiente de desenvolvimento foi criado para uso e teste do Mongodb em um ambiente cloud (Atlas Database).</p>
                <a class="btn btn-outline-dark" href="/development" type="button">Abrir</a>
                <a class="btn btn-outline-dark m-2" href="http://api-agendamento.ddns.net:3001/mongodb" target="_blank" type="button">API - MongoDB </a>
              </div>
            </div>
          </div>

          <div class="p-5 mt-4  git rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-10 fw-bold">Repositorio do Projeto</h1>
              <p class="col-md-15 fs-4">Repositório no <b>GitHub</b>, contendo todos os arquivos de configuração divido nas pastas: Backend, Frontend e Infraestrutura.</p>
              <a class="btn btn-outline-dark" href="https://github.com/iLudolf/Agendamento.git" target="_blank" type="button">Abrir</a>             
            </div>
          </div>




          <div class="pt-3 mt-4 text-muted border-top"> </div>
          
    
        </div>
      </main>
    </>
  );
}

export default Home;
