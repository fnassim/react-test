import React from 'react'

import '../resources/css/Forms.css';

import { toggleClick } from "../actions/actionCreators"

function toggle_click (is_focus){
   console.log(is_focus);
   var fieldFocused = '';
   var labelFocused = '';

   if (is_focus === true) {
       fieldFocused = ' field-focused'
       labelFocused = ' label-focused' ;
   }


    return ( <div> <label className={"label" + labelFocused}>Full Name</label>
        <input type="email" id="email" className={'field' + fieldFocused} /> </div>)

}

const Forms = (props) => {
    const is_focus = props.state.getIn(["ui", "is-clicked"], false)
    const my_comp = toggle_click(is_focus)

    return (
        <div
             onClick={ () => {props.dispatch(toggleClick())} }>

            { my_comp }
        </div>
    )
}

export default Forms
