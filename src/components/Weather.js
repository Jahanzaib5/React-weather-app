import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div className='weather__info'>
                {
                    this.props.city && this.props.country && <p>Location:
                         <span>{this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperature && <p>Temperature: 
                        <span>{this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.humidity && <p>Humidity:
                         <span>{this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description && <p>Conditions:
                         <span>{this.props.description}</span>
                    </p>
                }
                {
                    this.props.error && <p>{this.props.error}</p>
                }
                
            </div>
        )
    }
}
