import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component { 
  componentDidMount() {
    this.props.fetchAdmins();  
  }
  
  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    });
  }
  
  head() {
    return (
      <Helmet>
        <title>{`SSR-Admins(${this.props.admins.length})`}</title>
      </Helmet>      
    );
  }  
  
  render() {
    return (
      <div>
        {this.head()}
        <h3>Protected List of Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
