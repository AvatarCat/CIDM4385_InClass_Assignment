class EmailInput extends React.Component 
{
    
    //constructor
    constructor(props) {
        super(props);
        
        this.state = {customer_email: ''};

        this.handleEmailChange = this.handleEmailChange.bind(this);        
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    };

    handleEmailChange(event){
        const customer_email = event.target.value;
        this.setState( () => {
                return {
                    customer_email
                }
            }
        );
    }

    //button clicked
    handleEmailSubmit(event){

        this.props.handleOrderSubmit(this.state.customer_email);
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input 
                    className="form-control"            
                    id="emailInput"
                    onChange={this.handleEmailChange}
                    placeholder="Email Address"
                    type="text"
                    value={this.state.customer_email} m
                />
            </div>  
        );
    }
}