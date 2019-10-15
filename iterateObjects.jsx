  state = {
    objects: {
      input1: 0,
      input2: '',
      isInvalid: false,
    }
  }  
  
  this.setState({ isInvalid: Object.values(objects).some((val) => val === '' || val === 0) });
