      // <div className="App">
      //   <nav className="navbar pure-menu pure-menu-horizontal">
      //       <a href="#" className="pure-menu-heading pure-menu-link">Crowdex</a>
      //   </nav>

      //   <main className="container">
      //   <div>
      //     <Button onClick={this.toggle}>Post</Button>
      //     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
      //       <ModalHeader toggle={this.toggle}>Enter your prediction</ModalHeader>
      //       <ModalBody>
      //         <RequestForm submitRequest={this.submitRequest} onChange={this.handleChange}/>
      //       </ModalBody>
      //     </Modal>
      //     <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
      //       <ModalHeader toggle={this.toggle2}>Details</ModalHeader>
      //       <ModalBody>
      //         <Form>
      //           <div 
      //             className="ag-theme-balham"
      //             style={{ 
      //             height: '220px', 
      //             width: '205px' }} 
      //           >
      //             <AgGridReact
      //                 columnDefs={columnDefs}
      //                 rowData={rowData}>
      //             </AgGridReact>
      //         </div>
      //         </Form>
      //       </ModalBody>
      //     </Modal>
      //   </div>
      //     <Container>
      //       <Row>
      //         {
      //           this.state.posts.map((p, index) => {
      //             return (
      //                 <Example bidAmount={p.bidAmount} image={p.image} followers={p.followers} totalBid={p.totalBid} title={p.title} description={p.description} hashtag={p.hashtag} key={index} handleInvestigate={this.toggle2}/>
      //             )
      //           })
      //         }
      //       </Row>
      //     </Container>
      //   </main>
      // </div>