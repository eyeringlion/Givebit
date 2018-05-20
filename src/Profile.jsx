import React, { Component } from 'react';
import {
  isSignInPending,
  loadUserData,
  Person,
  getFile,
  putFile,
  lookupProfile
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        },
      },
      username: "",
      newStatus: "",
      statuses: [],
      statusIndex: 0,
      isLoading: false    
    };
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile),
      username: loadUserData().username
    });
  }

  handleNewStatusChange(event) {
    this.setState({newStatus: event.target.value})
  }

  handleNewStatusSubmit(event) {
    this.saveNewStatus(this.state.newStatus)
    this.setState({
      newStatus: ""
    })
  }

  saveNewStatus(statusText) {
    let statuses = this.state.statuses

    let status = {
      id: this.state.statusIndex++,
      text: statusText.trim(),
      created_at: Date.now()
    }

    statuses.unshift(status)
    const options = { encrypt: false }
    putFile('statuses.json', JSON.stringify(statuses), options)
      .then(() => {
        this.setState({
          statuses: statuses
        })
      })
  }

  // componentDidMount() {
  //   this.fetchData()
  // }
  
  fetchData() {
    this.setState({ isLoading: true })
      getFile('indexes', { decrypt: false })
        .then((file) => {
          let indexes = JSON.parse(file || '[]')
          this.setState({
            person: new Person(loadUserData().profile),
            username: loadUserData().username,
            indexes: indexes,
          })
        })
        .finally(() => {
          this.setState({ isLoading: false })
          console.log('loaded indexes:', this.state.indexes)
        })
      getFile('stakes', { decrypt: false })
        .then((file) => {
          let stakes = JSON.parse(file || '[]')
          this.setState({
            person: new Person(loadUserData().profile),
            username: loadUserData().username,
            stakes: stakes,
          })
        })
        .finally(() => {
          this.setState({ isLoading: false })
          console.log('loaded stakes:', this.state.stakes)
        })
  }

  render() {
    const { handleSignOut } = this.props;
    const { person } = this.state;
    const { username } = this.state;

    return (
      !isSignInPending() && person ?
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="col-md-12">
              <div className="avatar-section">
                <img
                  src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage }
                  className="img-rounded avatar"
                  id="avatar-image"
                />
                <div className="username">
                  <h1>
                    <span id="heading-name">{ person.name() ? person.name()
                      : 'Nameless Person' }</span>
                    </h1>
                  <span>{username}</span>
                  <span>
                    &nbsp;|&nbsp;
                    <a onClick={ handleSignOut.bind(this) }>(Logout)</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> : null
    );
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile),
    });
  }
}
