class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      label: 'TEXT',
    };
  }

  handleAdd() {
    // this.setState((prevState) => ({
    //   types: [...prevState.types, 'date'],
    // }));
    this.setState({ types: [...this.state.types, 'date'] });
  }

  handleChange(e, index) {
    const statesDeStructure = this.state;
    statesDeStructure.types[index] = e.target.value;
    console.log(e.target.value);
    this.setState({ types: statesDeStructure.types });
  }


  handleRemove(index) {
    this.state.types.splice(index, 1);
    console.log(this.state.types, 'SSSS');
    this.setState({ types: this.state.types });
  }

  render() {
    const statesDeStructure = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col sm={8} className="border">
              {
              statesDeStructure.types.map((type, index) => {
                return (
                  <div key={index} className="form">
                    <p className="center-align">
                      DATE
                      <input type={type} className="datepicker center-align" />
                    </p>
                    <p className="center-align formfield">
                      TEXT
                      <textarea rows="4" cols="50" id="textarea1" className="textarea" placeholder="Add comments" />
                      <label htmlFor="Red">
                        <input type="checkbox" />
                        <span>Red</span>
                      </label>
                      <label htmlFor="Red">
                        <input type="checkbox" />
                        <span>Green</span>
                      </label>

                      <label htmlFor="Red">
                        <input type="checkbox" />
                        <span>Yellow</span>
                      </label>
                    </p>

                    <p className="center-align"> 
                      TEXT
                      <select>
                        <option value="">Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </p>
                  </div>

                );
              })
              }
            </Col>
            <Col sm={4} className="border">
              <Form.Check style={{ float: 'left' }} aria-label="option 1" label={statesDeStructure.label} />
              <Button type="button" variant="danger" style={{ float: 'right' }} onClick={(e) => this.handleRemove(e)}>
                X
              </Button>
              <Button variant="success" style={{ float: 'right', marginRight: '10px' }} onClick={(e) => this.handleAdd(e)}>
               +
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
