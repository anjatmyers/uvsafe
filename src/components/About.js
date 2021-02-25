import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Carousel} from 'react-bootstrap';

export class Classes extends Component {
    render() {
        return (
            <div className="backgroundImg" style={{backgroundImage: `url("images/beach.jpg")`}}>


            <div className="container-fluid d-flex flex-column h-100 justify-content-center align-items-center">

            {/* <div className="col-3 text-white offset-1" >
      
                <Weather city={city}/>
            </div> */}

            <div className ="w-100 h-75 mt-5">
                <div className="col-10 offset-1 margin-top">

                <div className="jumbotron jumbotron-fluid uvCard">
                    <div className="container">
                    <h1 className="display-4">What is UVSafe?</h1>
                    <p className="lead">UVSafe is a tool that provides UV radiation levels for the world's major cities. Our goal is to help you protect your largest and most exposed organ of the body. We provide context for safe sun exposure for different skin types and give friendly reminders that you have to consider your skin, no matter the conditions! It's important to enjoy the outdoors but before you do, remember, "UV Safe out there!"</p>
                    </div>
                </div>
                
                </div>
            </div>
            {/* end about div */}

            <div className="col-10">
            <Carousel>
                    <Carousel.Item interval={4000}>
                        <img
                        className="d-block w-100"
                        src="images/umbrella.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption className=" h-75">
                        <h2>Tip #1</h2>
                        <h4>You need to re-apply sunscreen every two hours that you are outside!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100"
                        src="images/weatherheader.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption className=" h-75 ">
                        <h2>Tip #2</h2>
                        <h4>You need sunscreen even when its cloudy or overcast. Clouds only block a portion of UV radiation.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block w-100"
                        src="images/seasons.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption className=" h-75">
                        <h2>Tip #3</h2>
                        <h4>You need sunscreen year-round! The sun can shine just as bright in winter as it does in summer. </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </div>
                {/* end carousel div*/}

            

            </div>
            {/* end of container div */}

        </div>
        )
    }
}

// maps global state to a prop
// count is our prop: use this.props.count to access it
// const mapStateToProps = (state) => {
//     return{
//         count: state.counter
//     }
// }

// increment is a pops: this.props.increment(n)
// const mapDispatchToProps = (dispatch) => {
//     return{
//         increment: (n)=> dispatch(increment(n))
//     }
// }



// connect takes two functions:
// 1 for pulling down state
// 2 for updating state
export default connect(null, null)(Classes)
