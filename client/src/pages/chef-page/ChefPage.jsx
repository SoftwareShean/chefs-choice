import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Layout from '../../components/shared/Layout'
import "./ChefPage.scss";
import { getRecipes } from "../../services/reviews";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";

export default class ChefPage extends Component {
  constructor() {
    super();
    this.state = {
      chefs: [],
    };
  }

  async componentDidMount() {
    const chefs = await getRecipes();
    this.setState({ chefs });
  }

  render() {
    const { chefs } = this.state;
    console.log(chefs);
    const allChefs = chefs.map((chef) => {
      return (
        <div key={chef.id} className="Chef-List">
          <h2 className="top-chef">This Week's Top Chefs:</h2>

          {this.state.chefs &&
            <div className="general-chef-display">
              <img className="profile-pic" src={chef.img} alt="chef" />
              <div className="chefs-page-info">
                <h2>{chef.chefName}</h2>
                <Link to={`/chefs/${chef.chefName}`}>
                  <h1 className="chef-page-info-h1">View Full Profile</h1>
                </Link>
                {/* <ChefProfile chefs = {this.state.chefs} onChange={this.handleChange} inputValue = {this.state.chef}/> */}
              </div>
            </div>}
          
          <p>Known for: {chef.knownFor}</p>
        </div>
      );
    });

    // const uniqueChefs = this.state.chefs.filter((name, index) => {
    //   if (this.state.chefs) return this.state.chefs.indexOf(name.chefName) === index
    // });
    // console.log(this.state.chefs)
    // console.log(uniqueChefs)
    // const backToChefs = [...uniqueChefs]
    // allChefs.splice(0, 1)
    // allChefs.splice(2, 1)

    return (
      <>
        <div className="intro-header">
          <div className="image-header">
            <img
              alt="chef"
              className="image1"
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
            <img
              alt="chef"
              className="image2"
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div className="middle-block">
            <h1>What is a Top Chef?</h1>
          </div>
          <div className="lower-half">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem.
              tantus lutus em gratum ad nausum pre catsum
            </p>
            <h4>Join the Program</h4>
          </div>
        </div>

        <div className="spotlight">
          <h2 className="on">Spotlight On:</h2>
          <div className="below-spotlight">
            <img
              alt="chef"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              className="img-spotlight"
            />
            <div className="chef-page-info">
              <h2>Jennifer Thomas</h2>
              <div className="chef-social-media">
                <Instagram />
                <Facebook />
                <Pinterest />
                <Youtube />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              eget urna risus facilisis sit in fusce.
            </p>
            <Link to="/chefs/Jennifer Thomas">
              <h1 className="view-profile">View Full Profile</h1>
            </Link>
          </div>
        </div>

        {allChefs}
        {/* {backToChefs} */}
        {/* {uniqueChefs} */}
      </>
    );
  }
}
