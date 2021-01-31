import React, { Component } from 'react'
import './TourList.css'
import Tour from '../Tour/Tour'
import {tourData} from '../../tourData' // frist we pass tourData info to tourlist.js then it goes to tour.js with props

export default class TourList extends Component {
    state={
        tours: tourData
    }
    removeTour= id => {
        const{ tours }=this.state;
        const sortedTours = tours.filter(tour=>
            tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        // console.log(this.state.tours)
    const {tours} = this.state; // now we have access to tours props

        return (
            <section className="tourlist">
                {/* <Tour /> */}
                {tours.map(tour=>{
                    return(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    ) 
                    
                })}
            </section>
        )
    }
}
