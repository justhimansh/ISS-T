import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



class Locator extends Component {
    constructor() {
        super()
        this.state = {
            latitude_position: 0,
            longitude_position: 0
        }
    }


    componentDidMount() {
        setInterval(() => {

            fetch("http://api.open-notify.org/iss-now.json")
                .then(response => response.json())
                .then(item => {

                    console.log(item.iss_position);

                    // let latitude = parseInt(item.iss_position.latitude)
                    // let longitude = parseInt(item.iss_position.longitude)

                    this.setState({
                        latitude_position: item.iss_position.latitude,
                        longitude_position: item.iss_position.longitude
                    })

                    console.log(this.state.latitude_position)
                })
        }, 1000);

       
    }



    // fetch(url)
    // .then((data) => data.json())
    // .then(item=>{
    //     console.log(item.quote);

    //     quote.innerText = item.quote;

    // });

    render() {
        return (
            <div>
                <MapContainer center={[this.state.latitude_position, this.state.longitude_position]} zoom={3} maxNativezoom={2} noWrap={true} scrollWheelZoom={true}>
                    <TileLayer
                        noWrap={false}
                        minZoom={3}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[this.state.latitude_position, this.state.longitude_position]}>
                        <Popup className="popuppls">
                            HELLOOOO <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}

export default Locator