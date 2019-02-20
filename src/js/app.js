var body = document.getElementById('body');

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(Email, {})
    ]);
};

ReactDOM.render(React.createElement(App), body);