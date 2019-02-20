/*
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
</div>
*/

const Email = (props) => {
    return React.createElement('div', {className: "form-group"}, 
    [
        React.createElement('label', 
            {
                for: "exampleInputEmail1"

            },
            "Email address:"
        ),
        React.createElement('input',
            {
                className: "form-control",
                type: "email",
                id: "exampleInputEmail1",
                placeholder: "Email"
            },
        ),
/*
<div class="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" class="form-control" id="inputZip">
</div>
*/
        React.createElement('label', 
            {
                for: "inputZip",

            },
            "Zipcode:"
        ),
        React.createElement('input',
            {
                className: "form-control",
                type: "text",
                id: "inputZip",
                placeholder: "Zipcode"
            },
        ),
/*
<button type="submit" class="btn btn-primary">Sign in</button>
*/
        React.createElement('button', 
            {
                type: "submit",
                class: "btn btn-danger btn-lg btn-block"
            },
            "Submit"
        )
    ]
    );
};