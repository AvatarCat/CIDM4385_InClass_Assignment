class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_password: ''}; 

        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handlePasswordChange(event){
        const delivery_password = event.target.value;
        this.setState( () => {
                return {
                    delivery_password
                }
            }
        );

        const password = this.state.delivery_password;

        this.props.handlePassword(password);
    }    

    render() {
        return (
            <div className="form-group">
                <input className="form-control" 
                       id="zipcodeInput" 
                       onChange={this.handlePasswordChange}                       
                       placeholder="Password" 
                       type="input"
                       value={this.state.delivery_password}  />

                <div className="input-group-append">
                    <button className="btn btn-primary" 
                            id="button-addon2"
                            onClick={this.handleEmailSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        );
    };
}