import React, { Component } from 'react';

class BookingSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform your booking search here with this.state.searchTerm
    // You can make an API call or update the component's state accordingly
    // For this example, we'll just log the search term.
    console.log('Searching for:', this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            placeholder="Type doctor name or hospital name HERE"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default BookingSearch;