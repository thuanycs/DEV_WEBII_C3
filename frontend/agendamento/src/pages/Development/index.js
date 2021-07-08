//Development

import React, { useState, useEffect } from 'react';

import './styles.css';

import NavbarDev from '../../components/NavbarDev';




function Production() {

    const [pessoa, setPessoa] = useState([]);
    const [agendamento, setAgendamento] = useState([]);
    const [unidades, setUnidades] = useState([]);



    useEffect(() => {
        loadDadosPessoas();
        loadDadosUnidades();
        loadDadosAgendamento();     
    }, []);

    const loadDadosPessoas = async () => {
        const API_URL = `http://api-agendamento.ddns.net:3001/mg/pessoas/`;
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setPessoa(data.message);
        // console.log(data.Pessoas);
    }

    if (pessoa != undefined) {

        var dadosPessoas = pessoa.map(function (registros) {
            const nome = "pessoas";
            return (
                <tr key={registros._id}>                    
                    <td>{registros.nome_pessoa}</td>
                    <td>{registros.cpf}</td>
                    <td>{registros.data_nascimento}</td>
                    <td>{registros.telefone_pessoa}</td>
                    <td>{registros.grupo_prioritario ? 'Sim' : 'Não'}</td>
                    <td>{registros.endereco_pessoa}</td>
                    <td>{registros.email_pessoa}</td>
                </tr>
            ); //retorna o registro 
        });
    }


    const loadDadosUnidades = async () => {
        const API_URL = `http://api-agendamento.ddns.net:3001/mg/unidades/`;
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setUnidades(data.message);
        // console.log(data.Pessoas);
    }

    if (unidades != undefined) {
        var dadosUnidades = unidades.map(function (registros) {
            const nome = "unidades";

            let dados = registros._id;
            return (
                <tr key={registros._id}>                 

                    <td>{registros.nome_unidade}</td>
                    <td>{registros.descricao_unidade}</td>
                    <td>{registros.endereco_unidade}</td>
                    <td>{registros.telefone_unidade}</td>
                    <td>{registros.email_unidade}</td>
                </tr>
            ); //retorna o registro 
        });
    }

    const loadDadosAgendamento = async () => {
        const API_URL = `http://localhost:3001/mg/agendamentos/`;
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setAgendamento(data.message);
        // console.log(data.Pessoas);
    }

    if (agendamento != undefined) {
        var dadosAgendamento = agendamento.map(function (registros) {
            const nome = "agendamento";
            return (
                <tr key={registros.id}>                    
                    <td>{registros.id_pessoa}</td>
                    <td>{registros.id_unidade}</td>
                    <td>{registros.data_hora_agendamento}</td>
                    <td>{registros.necessidades_especiais ? "Sim" : "Não"}</td>
                    <td>{registros.observacoes_agendamento }</td>
                </tr>
            ); //retorna o registro 
        });
    }



    return (
        <>


            <NavbarDev />
            <div class="d-example-divider"></div>
            <div className="centralizar-conteudo">
                <div className="col-lg-10 mx-auto p-3 py-md-5">
                    <div id="internaCabecalho" class="input-group ">
                        <img src="./ico/address-book.svg" className="bi " width="40" height="40" title="Ramais" alt="phone"></img>

                        <h1 className="ms-2">Agendamentos</h1>
                    </div>

                    <hr className="col-3 col-md-4 mb-3" />


                    <div id="tableID">

                        <div class="container input-group ">

                            <div class="col p-3">
                                <label for="zip" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>

                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Data</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>



                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Unidade de Saúde</label>
                                <select class="form-select" id="Unidade" required>
                                    <option value="">Selecione ...</option>
                                    <option>Linhares</option>
                                    <option>Teixeira de Freitas</option>
                                    <option>Viana</option>
                                    <option>Vitoria da Conquista</option>
                                </select>
                            </div>




                        </div>



                        <hr className="col  mb-5" />

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr className="table-title">                                 
                                    <th scope="col">ID Pessoa</th>
                                    <th scope="col">ID Unidade</th>
                                    <th scope="col">Data do Agendamento</th>
                                    <th scope="col">Necessidades Especiais</th>
                                    <th scope="col">Observações Agendamento</th>
                                </tr>
                            </thead>
                            <tbody>

                                {dadosAgendamento}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="d-example-divider mb-0"></div>

            <div className="centralizar-conteudo">
                <div className="col-lg-10 mx-auto p-3 py-md-5">
                    <div id="internaCabecalho" class="input-group ">
                        <img src="./ico/users-alt-3.svg" className="bi " width="40" height="40" title="Ramais" alt="phone"></img>

                        <h1 className="ms-2">Usuários Cadastrados</h1>
                    </div>

                    <hr className="col-3 col-md-5 mb-3" />


                    <div id="tableID">

                        <div class="container input-group ">

                            <div class="col p-3">
                                <label for="zip" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>

                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Data de Nascimento</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>



                            <div class="col p-3">
                                <label for="zip" class="form-label">CPF</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>




                        </div>



                        <hr className="col  mb-5" />

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr className="table-title">                                   
                                    <th scope="col">Nome</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">Data de nascimento</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Grupo Prioritario</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>


                                {dadosPessoas}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="d-example-divider mb-0"></div>

            <div className="centralizar-conteudo">
                <div className="col-lg-10 mx-auto p-3 py-md-5">
                    <div id="internaCabecalho" class="input-group ">
                        <img src="./ico/first-aid.svg" className="bi " width="40" height="40" title="Ramais" alt="phone"></img>

                        <h1 className="ms-2">Unidades de Saúde Cadastradas</h1>
                    </div>

                    <hr className="col-3 col-md-7 mb-3" />


                    <div id="tableID">

                        <div class="container input-group ">

                            <div class="col p-3">
                                <label for="zip" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>

                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Data</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>



                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Unidade de Saúde</label>
                                <select class="form-select" id="Unidade" required>
                                    <option value="">Selecione ...</option>
                                    <option>Linhares</option>
                                    <option>Teixeira de Freitas</option>
                                    <option>Viana</option>
                                    <option>Vitoria da Conquista</option>
                                </select>
                            </div>




                        </div>



                        <hr className="col  mb-5" />

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr className="table-title">                                
                                    <th scope="col">Nome</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dadosUnidades}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="d-example-divider mb-0"></div>
        </>
    );
}


async function deletarRegistro(registro, nome) {
    const API_URL = `http://api-agendamento.ddns.net:3001/${nome}/${registro}`;
    const response = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data.resultado);

}


export default Production;
