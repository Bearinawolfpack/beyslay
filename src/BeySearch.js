import React from 'react'

const BeySearch = (props) =>{
    return(
        <form>
            <input type="text" name="search" placeholder="Enter Search Here" value={props.searchValue} onChange={props.changeHandler}/>
        </form>
    )
}
    // state = { search: "" }

    // changeHandler = (event) => {
    //     // console.log(event.target.name)
    //     // console.log(event.target.value)
    //     this.setState({[event.target.name]: event.target.value })
    //     this.props.changeHandler(this.state)
    // }

export default BeySearch 