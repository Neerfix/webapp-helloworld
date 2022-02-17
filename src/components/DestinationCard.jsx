import React from 'react';

class DestinationCard extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="destination-card col-start-2 col-span-7 lg:col-span-3">
                <div className='flex'>
                    <div class="card-img mr-3 py-4 my-2">
                        <img src={"./images/cities/" + this.props.img} alt={this.props.country} width="200" height="200" />
                    </div>
                    <div class="card-text flex flex-col align-center justify-center">
                        <h3 class="text-2xl md:text-3xl">{this.props.title}</h3>
                        <p>◆ {this.props.country}</p>
                        <button className="btn btn-outline mx-auto my-5">
                            <span className="btn-text">Découvrir</span>
                        </button>
                    </div>
                </div>
            </a>
        );
    }
}

export default DestinationCard;