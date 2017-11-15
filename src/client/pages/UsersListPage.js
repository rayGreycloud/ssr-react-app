import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component { 
  componentDidMount() {
    this.props.fetchUsers();  
  }
  
  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }
  
  head() {
    return (
      <Helmet>
        <title>{`SSR-Users(${this.props.users.length})`}</title>
      </Helmet>      
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        Here's a list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};