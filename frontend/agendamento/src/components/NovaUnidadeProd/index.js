import './styles.css';

import NavbarProd from '../NavbarProd';


function NovaUnidadeProd() {

    return (
        <>
        <NavbarProd />
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <h2>Registrar nova unidade de saúde</h2>
                        <p className="lead">Para sua segurança e preservação dos dados pessoais é necessário informar o código do agendamento para imprimir ou cancelar.</p>
                    </div>
                    <form class="needs-validation" novalidate>
                        <div className="card">
                            <div>
                                <h4 className="mb-3">Preencha os campos abaixo</h4>
                                <form className="needs-validation" >
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label for="firstName" className="form-label">Nome da unidade</label>
                                            <input type="text" className="form-control" id="nomeUnidade" placeholder="" required />
                                            
                                        </div>                                  


                                        <div className="col-sm-3">
                                            <label for="username" className="form-label">Telefone</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text">+55</span>
                                                <input type="text" className="form-control" id="telefoneUnidade" placeholder="Celular" required />
                                                <div className="invalid-feedback">
                                                    Your username is required.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-3">
                                            <label for="text" className="form-label">CEP</label>
                                            <input type="text" className="form-control" id="CEP" placeholder="" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="enderecoUnidade" className="form-label">Endereço</label>
                                            <input type="text" className="form-control" id="enderecoUnidade" placeholder="seu@examplo.com" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="emailUnidade" placeholder="seu@examplo.com" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-sm-15">
                                            <label for="exampleFormControlTextarea1" className="form-label">Descrição</label>
                                            <textarea class="form-control" id="descricaoUnidade" rows="3"></textarea>
                                        </div>

                            
                                     


                                    </div>

                                    <hr className="my-4" />

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="same-address" />
                                        <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="save-info" />
                                        <label className="form-check-label" for="save-info">Save this information for next time</label>
                                    </div>

                                    <hr className="my-4" />


                                    <button type="button" class="btn btn-primary" onClick={() => enviarDados()}>Enviar</button>
                                    
                                    <button type="button" class="btn btn-secondary mx-2">Buscar</button>



                                </form>
                            </div>
                        </div>
                    </form>

                </main>


            </div>

        </>
    );
}


const enviarDados = async () => {

    const API_URL = `http://api-agendamento.ddns.net:3001/pg/unidades/`;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pegaDados())
    });
    const data = await response.json();
    alert(data.resultado);
}



function pegaDados() {
    let nomeUnidade = document.getElementById('nomeUnidade').value;
    let descricaoUnidade = document.getElementById('descricaoUnidade').value; 
    let telefoneUnidadee = document.getElementById('telefoneUnidade').value;
    let endereçoUnidade = document.getElementById('enderecoUnidade').value;
    let emailUnidade = document.getElementById('emailUnidade').value;

  



    var data = {
        "nome_unidade": nomeUnidade,
        "descricao_unidade": descricaoUnidade,
        "endereco_unidade": endereçoUnidade,
        "telefone_unidade": telefoneUnidadee,
        "email_unidade": emailUnidade,        
    }

   
    return data;
}



export default NovaUnidadeProd;
