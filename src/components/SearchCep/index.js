// this is the Container Component

import React, { PureComponent } from 'react';
import ajax from '@fdaciuk/ajax';
import SearchCep from './SearchCep';

class SearchCepContainer extends PureComponent {
  async componentDidMount () {
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: '87365-000' });
    console.log(response);
  }
  
  render () {
    return (
      <SearchCep />
    );
  }
};

export default SearchCepContainer;
