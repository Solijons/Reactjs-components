    state = {
      multipleVcrInputs: {
        vcr0: '',
      },
    }
  
  updateId(event) {
    const { multipleInputs } = this.state;

    const input = event.target.id;
    multipleInputs[input] = event.target.value;

    this.setState(multipleInputs);
  }

  
 appendInput() {
    const { multipleInputs } = this.state;

    const objSize = new Date().getTime();
    multipleInputs[`vcr${objSize}`] = '';

    this.setState({ multipleInputs });
  }

  removeInput(id) {
    const { multipleVcrInputs } = this.state;

    if (id !== 'vcr0') {
      delete multipleInputs[id];
    } else {
      multipleInputs[id] = 0;
    }

    this.setState({ multipleInputs });
  }


 <Form.Group>
  <Form.Label>VCR ID</Form.Label>
  { Object.keys(multipleInputs).map((Input) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={Input}>
      <Form.Row>
        <Col md="11">
          <Form.Control
            key={Input}
            id={Input}
            required
            type="number"
            min={0}
            isInvalid={IdInvalid}
            value={multipleInputs[Input]}
            onChange={this.updateId}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid VCR ID
          </Form.Control.Feedback>
        </Col>
        <Col md="1">
          <HighlightOffIcon onClick={() => this.removeInput(Input)} />
        </Col>
      </Form.Row>
      <br />
    </div>
  ))}

  <Form.Row style={{ float: 'right' }}>
    <Button onClick={() => this.appendVcrInput()}>
      <i className="fas fa-plus-circle" />
      {' '}
      VCR ID
    </Button>
  </Form.Row>

</Form.Group>
