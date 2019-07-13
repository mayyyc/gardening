import React from 'react';
import axios from "axios";

const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
export default class OwnerProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        plants: []
    }}
    componentDidMount = () => {
        axios.get("https://trefle.io/api/plants?token=RWpsV1d1ZzBLdThBa1l4VklhejNqdz09",{ crossdomain: true })
        .then(res => {this.setState({
            plants: res.data
        });    })
        axios.get("https://trefle.io/api/plants/190891?token=RWpsV1d1ZzBLdThBa1l4VklhejNqdz09",{ crossdomain: true })
        .then(result => {this.setState({
            plant1details: result.data
        });
       
        })
    
        axios.get("https://trefle.io/api/plants/191266?token=RWpsV1d1ZzBLdThBa1l4VklhejNqdz09",{ crossdomain: true })
        .then(result2 => {this.setState({
            plant2details: result2.data
        });
        
        })
    }
    
    render(){
        
        var plantname = this.state.plants.length > 0 && this.state.plants[0].common_name;
        var plantname2 = this.state.plants.length > 0 && this.state.plants[1].common_name;
        var link = this.state.plants.length > 0 && this.state.plants[0].link+"?token=RWpsV1d1ZzBLdThBa1l4VklhejNqdz09";
        var link2 = this.state.plants.length > 0 && this.state.plants[1].link+"?token=RWpsV1d1ZzBLdThBa1l4VklhejNqdz09";
        /*var plantNameUpper = plantname.charAt(0).toUpperCase();*/
        var varieties =this.state.plant1details && this.state.plant1details.varieties;
        return (
            
            <div className="App">
              <header>
                <h1>Garden Profile</h1>
              </header>
              <section class = "garden_photo">
                  <img src = "/images/garden.jpg" width="720" height="960" alt="Garden Photo" />
              </section>
              <section class = "garden_type">
                  <h2> Garden Type</h2>
                  
              </section>
              <section>
                  <h2>Plants</h2>
                
                  
                <h3>{plantname}</h3>
                  
                  <h4>Plant Details</h4>
                  <p>Max Height (cm): {this.state.plant1details && this.state.plant1details.main_species.specifications.max_height_at_base_age.cm.toFixed(2)} </p>
                  <p>Growth Rate: {this.state.plant1details && this.state.plant1details.main_species.specifications.growth_rate} </p>
                  <p>Bloom Period: {this.state.plant1details && this.state.plant1details.main_species.seed.bloom_period}</p>
                  <p>Growth Spread: {this.state.plant1details && this.state.plant1details.main_species.seed.vegetative_spread_rate}</p>
                  <p>Lifespan: {this.state.plant1details && this.state.plant1details.main_species.specifications.lifespan} </p>
                  <p>Toxicity: {this.state.plant1details && this.state.plant1details.main_species.specifications.toxicity} </p>

                  <h4>How to Grow</h4>
                  <p>When to plant: {this.state.plant1details && this.state.plant1details.main_species.specifications.growth_period}</p>
                  <p>Soil type: {this.state.plant1details && this.state.plant1details.main_species.soils_adaptation.coarse &&"Coarse"}</p>
                  <p>Propagation: {this.state.plant1details && this.state.plant1details.main_species.propagation.sprigs && "Sprigs; "}
                  {this.state.plant1details && this.state.plant1details.main_species.propagation.seed && "Seed; "}
                  {this.state.plant1details && this.state.plant1details.main_species.propagation.cuttings && "Cuttings; "}
                  {this.state.plant1details && this.state.plant1details.main_species.propagation.bare_root && "Bare Root "}
                  </p>

                  <p>Min Temp: {this.state.plant1details && this.state.plant1details.main_species.growth.temperature_minimum.deg_c.toFixed(2)}</p>
                  <p>Shade Tolerance: {this.state.plant1details && this.state.plant1details.main_species.growth.shade_tolerance}</p>

                  <button type = "button">Read More</button>

                  <h3>{plantname2}</h3>
                  
                  <h4>Plant Details</h4>
                  {/* <p>Max Height (cm): {this.state.plant2details && this.state.plant2details.main_species.specifications.max_height_at_base_age.cm.toFixed(2)} </p> */}
                  <p>Growth Rate: {this.state.plant2details && this.state.plant2details.main_species.specifications.growth_rate} </p>
                  <p>Bloom Period: {this.state.plant2details && this.state.plant2details.main_species.seed.bloom_period}</p>
                  <p>Growth Spread: {this.state.plant2details && this.state.plant2details.main_species.seed.vegetative_spread_rate}</p>
                  <p>Lifespan: {this.state.plant2details && this.state.plant2details.main_species.specifications.lifespan} </p>
                  <p>Toxicity: {this.state.plant2details && this.state.plant2details.main_species.specifications.toxicity} </p>

                  <h4>How to Grow</h4>
                  <p>When to plant: {this.state.plant2details && this.state.plant2details.main_species.specifications.growth_period}</p>
                  <p>Soil type: {this.state.plant2details && this.state.plant2details.main_species.soils_adaptation.coarse &&"Coarse"}</p>
                  <p>Propagation: {this.state.plant2details && this.state.plant2details.main_species.propagation.sprigs && "Sprigs; "}
                  {this.state.plant2details && this.state.plant2details.main_species.propagation.seed && "Seed; "}
                  {this.state.plant2details && this.state.plant2details.main_species.propagation.cuttings && "Cuttings; "}
                  {this.state.plant2details && this.state.plant2details.main_species.propagation.bare_root && "Bare Root "}
                  </p>

                  <p>Min Temp: {this.state.plant2details && this.state.plant2details.main_species.growth.temperature_minimum.deg_c.toFixed(2)}</p>
                  <p>Shade Tolerance: {this.state.plant2details && this.state.plant2details.main_species.growth.shade_tolerance}</p>
                 
                  

                  
                  <button type = "button">Read More</button>
                  
              </section>

              <section>
                  <h2>Location</h2>
                  <p>Lakemba</p>
                  <h3>Soil details</h3>
                  <p>Coarse</p>
              </section>

              <section>
                  <h2>Other Garden Details</h2>
                  <p>Behind locked fence, message for key details</p>
              </section>

              <section>
                  <h2>Garden Owner Details</h2>
                  <img src="/images/avatar.png" width="200" height="200" alt="owner avatar" />
                  <h3>Name</h3>
                  <p>Emily</p>
                  <h3>About</h3>
                  <p>Emily is awesome!</p>
              </section>
            </div>
          );
        
    }
}

