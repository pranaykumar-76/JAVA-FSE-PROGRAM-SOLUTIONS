import React from 'react';
import GuestPage from './GuestPage';
import UserPage  from './UserPage';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  handleLogin  = () => this.setState({ isLoggedIn: true });
  handleLogout = () => this.setState({ isLoggedIn: false });

  render() {
    // Element variable for page content
    let page;
    if (this.state.isLoggedIn) {
      page = <UserPage onLogout={this.handleLogout} />;
    } else {
      page = <GuestPage onLogin={this.handleLogin} />;
    }

    return (
      <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <h1>Ticket Booking App</h1>
        {/* Render either GuestPage or UserPage */}
        {page}

        {/* Prevent rendering of extra footer for guests */}
        {this.state.isLoggedIn && (
          <footer style={{ marginTop: 40 }}>
            <small>Thank you for booking with us!</small>
          </footer>
        )}
      </div>
    );
  }
}

export default App;
