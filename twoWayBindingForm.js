class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elemType: 'input',
                elemConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elemType: 'input',
                elemConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elemType: 'input',
                elemConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: ''
            },
            country: {
                elemType: 'input',
                elemConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elemType: 'input',
                elemConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            deliveryMethod: {
                elemType: 'select',
                elemConfig: {
                    options:[
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'cheapest'}
                    ]
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }
    
    // two way of binding form
    inputChangedHandler = (event, inputId) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormElem = {
            ...updatedForm[inputId]
        }
        updatedFormElem.value = event.target.value;
        updatedForm[inputId] = updatedFormElem;
        this.setState({ orderForm: updatedForm })
    }

    render () {
        const formElementArray = [];

        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementArray.map((formElement) => {
                    return (
                        <Input
                            key={formElement.id}
                            elemType={formElement.config.elemType} 
                            elemConfig={formElement.config.elemConfig}
                            value={formElement.config.value}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    )
                })}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
