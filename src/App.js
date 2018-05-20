import React, { Component } from 'react'
import DonateContract from '../build/contracts/Donate.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import blue from './img/blue.jpeg'
import cesar from './img/cesar.jpg'
import pedigree from './img/pedigree.jpeg'
import dog from './img/dog.jpg'
import run from './img/running1.jpeg'
import run2 from './img/running2.jpg'
import squats from './img/squats.jpeg'
import plank from './img/plank.jpg'
import walk from './img/walk.jpg'

import { 
  Container, 
  Row, 
  Col, 
  Label, 
  Button, 
  Form, 
  FormGroup, 
  Popover, 
  PopoverHeader, 
  PopoverBody, 
  Input, 
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  UncontrolledAlert,
 } from 'reactstrap';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

// import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
} from 'blockstack';

import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';
import Countdown from 'react-countdown-now';

const $ = window.jQuery;

class NameCellRenderer extends React.Component {
    render() {
      const rand = Math.random();
      let color = 'black';
      if (rand > 0.66) {
        color = 'green';
      } else if (rand < 0.33) {
        color = 'red';
      }
    // put in render logic
        return <span style={{color:color}}>{this.props.value}</span>;
    }
}
// import { SignInBlockstackButton, SignInBlockstackLiteButton } from 'blockstack-signin-btn';

const columnDefs = [
    {headerName: "Coin", field: "coin", "width": 80},
    {headerName: "Initial Price", field: "initialPrice", "width": 80, cellRendererFramework:NameCellRenderer},
    {headerName: "Current Price", field: "currentPrice", "width": 80, cellRendererFramework:NameCellRenderer},
];

const rowDataList = [
  [
    {coin: "REP", initialPrice: "$ 49.96", currentPrice: "$ 49.96", },
    {coin: "BTG", initialPrice: "$ 57.25", currentPrice: "$ 57.25", },
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 677.12", },
    {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,421.74", },
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 139.97", },
    {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 403.93", },
  ],
  [
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 139.97", },
    {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 403.93", },
    {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 249.23", },
    {coin: "XMR", initialPrice: "$ 206.69", currentPrice: "$ 206.69", },
    {coin: "NEO", initialPrice: "$ 65.63", currentPrice: "$ 65.63", },
    {coin: "REP", initialPrice: "$ 49.96", currentPrice: "$ 49.96", },
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 677.12", },
    {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,421.74", },
  ],
  [
    {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 249.23", },
    {coin: "XMR", initialPrice: "$ 206.69", currentPrice: "$ 206.69", },
    {coin: "NEO", initialPrice: "$ 65.63", currentPrice: "$ 65.63", },
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 677.12", },
    {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,421.74", },
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 139.97", },
    {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 403.93", }
  ],
  [
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 677.12", },
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 139.97", },
    {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 249.23", },
    // {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 403.93", },
    // {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 249.23", },
  ],
];

const rowDataList2 = [
  [
    {coin: "REP", initialPrice: "$ 49.96", currentPrice: "$ 50.96", },
    {coin: "BTG", initialPrice: "$ 57.25", currentPrice: "$ 55.25", },
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 672.12", },
    {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,425.74", },
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 149.97", },
    {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 400.93", },
  ],
  [
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 138.97", },
    {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 410.93", },
    {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 240.23", },
    {coin: "XMR", initialPrice: "$ 206.69", currentPrice: "$ 211.69", },
    {coin: "NEO", initialPrice: "$ 65.63", currentPrice: "$ 68.63", },
    {coin: "REP", initialPrice: "$ 49.96", currentPrice: "$ 45.96", },
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 676.12", },
    {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,420.74", },
  ],
  [
    {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 245.23", },
    {coin: "XMR", initialPrice: "$ 206.69", currentPrice: "$ 216.69", },
    {coin: "NEO", initialPrice: "$ 65.63", currentPrice: "$ 62.63", },
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 675.12", },
    {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,425.74", },
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 130.97", },
    {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 405.93", }
  ],
  [
    {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 675.12", },
    {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 137.97", },
    {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 245.23", },
    // {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 403.93", },
    // {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 249.23", },
  ],
];

// const rowData = [
//     {coin: "ETH", initialPrice: "$ 677.12", currentPrice: "$ 677.12", },
//     {coin: "BTC", initialPrice: "$ 8,421.74", currentPrice: "$ 8,421.74", },
//     {coin: "LTC", initialPrice: "$ 139.97", currentPrice: "$ 139.97", },
//     {coin: "DASH", initialPrice: "$ 403.93", currentPrice: "$ 403.93", },
//     {coin: "ZEC", initialPrice: "$ 249.23", currentPrice: "$ 249.23", },
//     {coin: "XMR", initialPrice: "$ 206.69", currentPrice: "$ 206.69", },
//     {coin: "NEO", initialPrice: "$ 65.63", currentPrice: "$ 65.63", },
// ];
// ETC LTC ZEC

const Example =({joined=true, company, sku, lot, xId, handleGive, image, title, description = '0 steps', amount=0}) => {
  image = image? image : run;
  var color = joined === true ? 'info' : 'secondary';
  var text = joined === true ? 'Joined' : 'Join Move';
  return (
      <Col sm="3">
        <Card body>
          <CardImg top width={200} height={150} src={image} alt={run} />
          <br/>
          <CardTitle>{title}</CardTitle>
          <CardText>Progress: {description}</CardText>
          <CardText>Amount raised(ETH): {amount}</CardText>
          <Button color={color} onClick={handleGive}>{text}</Button>
          <br/>
          <Button onClick={handleGive}>Donate</Button>
        </Card>
      </Col>
  );
};

const RequestForm = ({submitRequest, onChange}) => (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input name="title" id="title" placeholder="title" onChange={onChange}/>
        </FormGroup>
        <Button onClick={submitRequest}>Submit</Button>
      </Form>
)

const RequestForm2 = ({submitRequest, onChange}) => (
      <Form>
        <FormGroup>
          <Label for="steps">Steps</Label>
          <Input name="steps" id="steps" placeholder="steps" onChange={onChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount(ETH):</Label>
          <Input name="amount" id="amount" placeholder="amount" onChange={onChange}/>
        </FormGroup>
        <Button onClick={submitRequest}>Submit</Button>
      </Form>
)

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null,
      rowDataList: rowDataList,
      posts: [
        {
          title: 'AIDS Awareness Walk',
          refugeeId: '0x68A021EFb629168168AaD4C745E5d4952d42B834',
          hashtag: '#1#2#3',
          description:'15080 steps',
          image: walk,
          sku: 'B001',
          lot: '001',
          amount: 104.15,
          joined: false,
        }, 
        {
          title: 'Breast Cancer Pushup',
          description:'108 pushups',
          refugeeId: '0x68A021EFb629168168AaD4C745E5d4952d42B834',
          hashtag: '#1#2#3',
          image: plank,
          sku: 'C001',
          lot: '001',
          amount: 68.55,
          joined: false,
        }, 
        {
          title: 'Child Education Squat',
          description:'628 squats',
          refugeeId: '0x68A021EFb629168168AaD4C745E5d4952d42B834',
          hashtag: '#1#2#3',
          image: squats,
          sku: 'P001',
          lot: '001',
          amount: 27.04,
          joined: false,
        }
      ],
      popoverOpen: false,
      modal: false,
      modal2: false,
      steps: 0,
    }
    this.donateContract = null;
  }

  // componentDidMount() {
  //   const $this = this;
  //   setInterval(() => {
  //     const rand = Math.random();
  //     console.log('rand', rand)
  //     if (rand > 0.5) {
  //       $this.setState({rowDataList: rowDataList2});
  //     } else {
  //       $this.setState({rowDataList: rowDataList});
  //     }
  //     // console.log('rowDataList', this.state.rowDataList)
  //   }, 1000)
  // }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    this.donateContract = contract(DonateContract);
    this.donateContract.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance

    // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   donateContract.deployed().then((instance) => {
    //     console.log('hello')
    //     // simpleStorageInstance = instance

    //     // Stores a given value, 5 by default.
    //     // return simpleStorageInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     // return simpleStorageInstance.get.call(accounts[0])
    //   }).then((result) => {
    //     // Update state with the result.
    //     // return this.setState({ storageValue: result.c[0] })
    //   })
    // })
  }

  handleDonate2 = () => {
    const web3 = this.state.web3;
    const donateContract = this.donateContract;
    let $this = this;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      var donateInstance;

      donateContract.deployed().then(function(instance) {
        // console.log('donate')
        donateInstance = instance;

        // // Execute adopt as a transaction by sending account
        return donateInstance.donate(1, {from: account});
      }).then(function(result) {
        // return App.markAdopted();
          let posts = $this.state.posts.slice();
          // posts.push($this.state);
          // console.log('submitRequest', $this.state)
          $this.setState({
            posts,
            modal: !$this.state.modal2,
          });
          $this.callApi();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

  handleDonate3 = () => {
    // const web3 = this.state.web3;
    // const donateContract = this.donateContract;
    let $this = this;
    let posts = $this.state.posts.slice();
    // let last = posts[posts.length];
    posts[posts.length - 1].amount = 1;
    // posts.push($this.state);
    // console.log('submitRequest', $this.state)
    $this.setState({
      posts,
    });

    // alert("You donated 1(ETH)");

    // web3.eth.getAccounts(function(error, accounts) {
    //   if (error) {
    //     console.log(error);
    //   }

    //   var account = accounts[0];
    //   var donateInstance;

    //   donateContract.deployed().then(function(instance) {
    //     // console.log('donate')
    //     donateInstance = instance;

    //     // // Execute adopt as a transaction by sending account
    //     return donateInstance.donate(1, {from: account});
    //   }).then(function(result) {
    //     let posts = $this.state.posts.slice();
    //     // let last = posts[posts.length];
    //     posts[posts.length - 1].amount = 1;
    //     // posts.push($this.state);
    //     // console.log('submitRequest', $this.state)
    //     $this.setState({
    //       posts,
    //     });
    //     // return App.markAdopted();
    //   }).catch(function(err) {
    //     console.log(err.message);
    //   });
    // });
  }

  handleDonate = () => {
    // console.log('donate', this.state.web3.eth)
    const web3 = this.state.web3;
    const donateContract = this.donateContract;
    let $this = this;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      var donateInstance;

      donateContract.deployed().then(function(instance) {
        // console.log('donate')
        donateInstance = instance;

        // // Execute adopt as a transaction by sending account
        return donateInstance.donate(1, {from: account});
      }).then(function(result) {
        // return App.markAdopted();
          let posts = $this.state.posts.slice();
          posts.push($this.state);
          console.log('submitRequest', $this.state)
          $this.setState({
            posts,
            modal: !$this.state.modal,
          });
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

  toggle = (args) => {
    console.log('toggle', args)
    if (args === 'give') {

    }
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2 = (p) => {
    this.setState({
      modal2: !this.state.modal2
    });
    // console.log('toggle2', p)
  }

  submitRequest = (e) => {
    // let posts = this.state.posts.slice();
    // posts.push(this.state);
    // // console.log('submitRequest', this.state)
    // this.setState({
    //   posts,
    //   modal: !this.state.modal,
    // });
    this.handleDonate();
  }

  handleChange = (e) => {
    // console.log(event.target.id, event.target.value);
    this.setState({[e.target.id]: e.target.value, image: run})
  }

  handleSignIn(e) {
    e.preventDefault();
    redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  handleBid(index) {
    const web3 = this.state.web3;
    const donateContract = this.donateContract;
    let $this = this;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      var donateInstance;

      donateContract.deployed().then(function(instance) {
        // console.log('donate')
        donateInstance = instance;

        // // Execute adopt as a transaction by sending account
        return donateInstance.donate(1, {from: account});
      }).then(function(result) {
        // return App.markAdopted();
        // console.log('index', this.state);
        let posts = $this.state.posts.slice();
        let post = posts[index];
        let amount = $this.state.bidAmount ? $this.state.bidAmount : 0;
        post.totalBid += parseFloat(amount);
        posts[index] = post;
        $this.setState(posts);
      }).catch(function(err) {
        console.log(err.message);
      });
    });

  }

  callApi = () => {
    console.log('callApi')

    var $this = this;
    // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2TUxEVDgiLCJhdWQiOiIyMkNTRFEiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJhY3QgcmhyIHJwcm8iLCJleHAiOjE1MjY4MDg3MTAsImlhdCI6MTUyNjc3OTkxMH0.0D_aXuK2XkT9uqJPvcn9jY113ZKArDGuPYYQfsUR8Ys';
    
    // setTimeout(function() {
    //   $this.handleDonate3();
    // }, 10000);

    // $.ajax({
    //     type: 'GET',
    //     url: 'https://api.fitbit.com/1/user/-/activities.json',
    //     headers: {
    //         "Authorization":"Bearer " + token,
    //     }
    //     //OR
    //     //beforeSend: function(xhr) { 
    //     //  xhr.setRequestHeader("My-First-Header", "first value"); 
    //     //  xhr.setRequestHeader("My-Second-Header", "second value"); 
    //     //}
    // }).done(function(data) { 
    //     const steps = data.lifetime.tracker.steps;
    //     $this.setState({iniSteps: steps});
    //     let posts = $this.state.posts.slice();
    //     console.log('last post', posts[posts.length - 1]);
    //       // posts.push($this.state);
    //       // console.log('submitRequest', $this.state)
    //       $this.setState({
    //         posts,
    //         modal: !$this.state.modal2,
    //       });
    //     // console.log('state', $this.state)
    //     // console.log('steps', steps);
    // });
    $this.setState({steps: 0});
    const stop = setInterval(function() {
      const steps = $this.state.steps+3;
      $this.setState({steps});
      let posts = $this.state.posts.slice();
      // let last = posts[posts.length];
      posts[posts.length - 1].description = parseInt(steps) + ' steps';
      // posts.push($this.state);
      // console.log('submitRequest', $this.state)
      $this.setState({
        posts,
      });
      if (steps > 10) {
        clearInterval(stop);
        $this.handleDonate3();
      }
      // console.log('steps', steps);
    }, 3000);

    // setInterval(function() {
    //   $.ajax({
    //       type: 'GET',
    //       url: 'https://api.fitbit.com/1/user/-/activities.json',
    //       headers: {
    //           "Authorization":"Bearer " + token,
    //       }
    //       //OR
    //       //beforeSend: function(xhr) { 
    //       //  xhr.setRequestHeader("My-First-Header", "first value"); 
    //       //  xhr.setRequestHeader("My-Second-Header", "second value"); 
    //       //}
    //   }).done(function(data) { 
    //       // const steps = data.lifetime.tracker.steps - $this.state.iniSteps;
    //       const steps = $this.state.steps+1;
    //       $this.setState({steps});
    //       console.log('steps', steps)
    //       // console.log('steps', steps);
    //   });
    // }, 5000);
  }

  render() {
    return (
      <div className="App">
        { !isUserSignedIn() ?
          <Signin handleSignIn={ this.handleSignIn } />
          : 
          <div>
            <nav className="navbar pure-menu pure-menu-horizontal">
                <a href="#" className="pure-menu-heading pure-menu-link">Givebit</a>
            </nav>
            <main className="container">
            { this.state.steps > 10 ?
              <UncontrolledAlert color="warning">
                Congratulations! You donated 1(ETH)!
              </UncontrolledAlert>
              : null
            }
            <Profile handleSignOut={ this.handleSignOut } />
            <div>
              <Button onClick={this.toggle}>Post</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Enter your fundraiser</ModalHeader>
                <ModalBody>
                  <RequestForm submitRequest={this.submitRequest} onChange={this.handleChange}/>
                </ModalBody>
              </Modal>
              <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                <ModalHeader toggle={this.toggle2}>Donation</ModalHeader>
                <ModalBody>
                  <RequestForm2 submitRequest={this.handleDonate2} onChange={this.handleChange}/>
                </ModalBody>
              </Modal>
              <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
                <ModalHeader toggle={this.toggle2}>Details</ModalHeader>
                <ModalBody>
                  <Form>
                    <div 
                      className="ag-theme-balham"
                      style={{ 
                      height: '220px', 
                      width: '205px' }} 
                    >
                      <AgGridReact
                          columnDefs={columnDefs}
                          rowData={this.state.rowDataList[this.state.rowDataList.length - 1]}>
                      </AgGridReact>
                  </div>
                  </Form>
              </ModalBody>
              </Modal>
            </div>
              <Container>
                <Row>
                  {
                    this.state.posts.map((p, index) => {
                      return (
                          <Example joined={p.joined} timeLeft={p.timeLeft} index={index} bidAmount={p.bidAmount} image={p.image} followers={p.followers} totalBid={p.totalBid} title={p.title} description={p.description} hashtag={p.hashtag} key={index} handleGive={()=>this.toggle2('give')} handleBid={()=>this.handleBid(index)} handleChange={this.handleChange} rowData={this.state.rowDataList[index]} amount={p.amount}/>
                      )
                    })
                  }
                </Row>
              </Container>                   
            </main>
          </div>
        }
      </div>
    );
  }

  // componentWillMount() {
  //   if (isSignInPending()) {
  //     handlePendingSignIn().then((userData) => {
  //       window.location = window.location.origin;
  //     });
  //   }
  // }
}
