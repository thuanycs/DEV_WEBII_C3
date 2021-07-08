import './styles.css';

function NavbarProd() {


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
                <div class="container-fluid">
                <a class="navbar-brand" href="/"> <img src="./ico/first-aid.svg" className="bi  mx-5" width="40" height="40" title="Ramais" alt="phone"></img>Agendamento Online</a>
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample09">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/production">Página inicial</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Aplicativos</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown09">
                                    <li><a class="dropdown-item" href="/agendamento-production">Novo Agendamento</a></li>
                                    <li><a class="dropdown-item" href="/unidade-production">Cadastrar Nova Unidade</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form>
                            <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarProd;
