// this is the Presentational Component

import React from 'react';

const SearchCep = () => (
  <div>
    <h1>CEP</h1>

    <form>
      <input type='text' name='cep' />
      <button type='submit' >Buscar Endereço</button>
    </form>

    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>87365000</td>
          <td>Rua Antonio Rodrigues nº313</td>
          <td>Centro</td>
          <td>Quarto Centenário</td>
          <td>PR</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SearchCep;

