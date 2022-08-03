import React, { Component } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"



function getIcon(){
    return L.icon({
        iconUrl:"https://www.pngkey.com/png/full/134-1344242_international-space-station.png",
        iconSize:60,
        shadowSize: [80, 100],
        className:'blinking'
           
    })
}

class Locator extends Component {
    constructor() {
        super()
        this.state = {
            latitude_position: 0,
            longitude_position: 0,
            altitude: 0,
            speed: 0,
            daysInOrbit: 0,
            visibility: ""

        }
    }


    componentDidMount() {
        setInterval(() => {

            fetch("http://api.open-notify.org/iss-now.json")
                .then(response => response.json())
                .then(item => {

                    //console.log(item.iss_position);

                    // let latitude = parseInt(item.iss_position.latitude)
                    // let longitude = parseInt(item.iss_position.longitude)

                    // this.setState({
                    //     latitude_position: item.iss_position.latitude.toFixed(2),
                    //     longitude_position: item.iss_position.longitude.toFixed(2)
                        
                    // })

                    //console.log(this.state.latitude_position)
                })
            }, 1000);

            setInterval(() => {

                fetch("https://api.wheretheiss.at/v1/satellites/25544")
                    .then(response2 => response2.json())
                    .then(item2 =>{
                        //console.log(item2.latitude)

                        let altitudeInt = parseInt(item2.altitude)
                        //console.log(altitudeInt)
                        let velocityInt = parseInt(item2.velocity)

                        var lat  = Math.round(item2.latitude*1000)/1000;
                        var long  = Math.round(item2.longitude*1000)/1000;
    
                        this.setState({
                            altitude: altitudeInt,
                            speed: velocityInt,
                            daysInOrbit: parseInt(item2.daynum),
                            visibility: item2.visibility,
                            latitude_position: lat,
                            longitude_position: long,
                            
                        })
                    })
    
                    //console.log(this.state.speed)
            }, 10000);

            
    }




    render() {
        return (
            <div>
                
                <h2 className="cords">Current Co-ordinates: {[this.state.longitude_position]}, {[this.state.latitude_position]}</h2>
                <ul className="info" id="info">
                    <span>Altitude: {[this.state.altitude]}km</span>
                    <span>Speed: {[this.state.speed]}km/ph</span>
                    <span>Days in Orbit: {[this.state.daysInOrbit]}</span>
                    <span>Visibility: {[this.state.visibility]}</span>
                    {/* <li><img src="https://bestanimations.com/media/loading-gears/1575100148loading-gear-6.gif"></img></li> */}
                </ul>
                <MapContainer center={[this.state.latitude_position, this.state.longitude_position]} zoom={3} maxNativezoom={2} noWrap={true} scrollWheelZoom={true} zoomControl={false}>
                    <TileLayer
                        noWrap={false}
                        minZoom={3}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=ce9b7865-00f0-4312-bef1-a7233a850756"
                    />
                    <Marker position={[this.state.latitude_position, this.state.longitude_position]} icon={getIcon()}>
                        <Popup className="popuppls">
                            Currently Empty
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}

export default Locator