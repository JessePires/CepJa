// this is the Container Component

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ajax from '@fdaciuk/ajax';
import SearchCep from './searchCep';
import { updateAddress } from '../../redux-flow/reducers/address/actionCreators';

class SearchCepContainer extends PureComponent {
  state = {
    isFetching: false
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isFetching: true });

    const cep = e.target.cep.value
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: cep });
    
    this.setState({ isFetching: false });
    this.props.dispatch(updateAddress(response));
  };

  async componentDidMount () {
    
  }
  
  render () {
    return (
      <SearchCep 
        { ...this.state }
        { ...this.props.address }
        handleSubmit={ this.handleSubmit }
      />
    );
  }
};

const mapStateToProps = (state) => ({
  address: state.address,
});

export default connect(mapStateToProps)(SearchCepContainer);
