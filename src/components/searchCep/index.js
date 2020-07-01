// this is the Container Component

import React, { PureComponent } from 'react';
import ajax from '@fdaciuk/ajax';
import SearchCep from './searchCep';

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
    isFetching: false
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isFetching: true });

    const cep = e.target.cep.value
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: cep });
    
    this.setState({ isFetching: false });
    this.setState(response);
  };

  async componentDidMount () {
    
  }
  
  render () {
    return (
      <SearchCep 
        { ...this.state }
        handleSubmit={ this.handleSubmit }
      />
    );
  }
};

export default SearchCepContainer;
