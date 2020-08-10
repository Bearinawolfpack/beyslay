import React from "react"

class BeyForm extends React.Component {
    state = {
        name: "",
        img: "",
        favorite: false
    }

    changeHandler = (event) => {
        // console.log("ChangeHandler Event:", event)
        this.setState({ [event.target.name]: event.target.value }
        )
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            img: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" name="name" placeholder="GIF Name" value={this.state.name} onChange={this.changeHandler}/>
                <input type ="text" name="img" placeholder="GIF URL" value-={this.state.img} onChange={this.changeHandler}/>
                <input  type="submit" value="add gif"/>
            </form>
        )
    }


}

export default BeyForm