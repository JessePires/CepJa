// this is the Container Component

import React from 'react';
import { connect } from 'react-redux';
import { fetchAddress } from '../../redux-flow/reducers/address/actionCreators';

const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  handleSubmit, 
  isFetching 
}) => (
  <div>
    <h1>CEP Já</h1>

    <form onSubmit={ handleSubmit }>
      <input type='text' name='cep' />
      <button type='submit' diisabled={ isFetching } >
        { isFetching ? 'Buscando...' : 'Buscar Endereço' }
      </button>
    </form>

    { status === 400 && <div>CEP não encontrado</div> }

    { status === 200 && (
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
            <td>{ code }</td>
            <td>{ address }</td>
            <td>{ district }</td>
            <td>{ city }</td>
            <td>{ state }</td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
);

const mapStateToProps = (state) => state.address;

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();
    dispatch(fetchAddress(e.target.cep.value)); // e.target.cep.value => CEP passed in input
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep);
