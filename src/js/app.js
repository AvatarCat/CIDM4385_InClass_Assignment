class AppComponent extends React.Component {

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <BasicForm />
            </div>
        );
    };
}

var root = document.getElementById('root');
// ReactDOM.render(React.createElement(AppComponent), root);
ReactDOM.render(<AppComponent />, root);