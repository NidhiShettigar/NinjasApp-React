import React from 'react'; //import React, { Component } from 'react';
import './Ninjas.css'
//class Ninjas extends Component {
const Ninjas = ({ ninjas, deleteNinja }) => { // destructure - ({ninjas}) instead of (props)
    //render(){
        //console.log(this.props); or const {name, age, belt} = this.props;
        //const {ninjas} = props; //removed for destruction process. //this.props; for list of data
        /*method 1 if statement*/
        const ninjalist = ninjas && ninjas.map(ninja => {
            if (ninja.age > 20){
               return (
                    <div className="ninja" key={ninja.id} >
                        <div>Name: {ninja?.name}</div>
                        <div>Age: {ninja?.age}</div>
                        <div>Belt: {ninja?.belt}</div>
                        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                    </div>
                )
            } else {
                return null
            }
            
        })
        // method 2 ternary operator (?,:)
        /*const ninjalist = ninjas.map(ninja => {
            return ninja.age > 20 ? (
                <div className="ninja" key={ninja.id} >
                    <div>Name: {ninja?.name}</div>
                    <div>Age: {ninja?.age}</div>
                    <div>Belt: {ninja?.belt}</div>
                </div>

            ) : null;
        })*/
        //method 3 instead {ninjalist} put code inside {} 
    return (
            <div className="ninja-list">
                {ninjalist}
            </div>
            //method 3 
        /*<div className="ninja-list">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id} >
                            <div>Name: {ninja?.name}</div>
                            <div>Age: {ninja?.age}</div>
                            <div>Belt: {ninja?.belt}</div>
                        </div>
                    ) : null;
                })
            }
        </div>*/
    )
}

export default Ninjas