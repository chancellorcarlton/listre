import React, { Component } from "react";
import Navigation from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./UpdateProfile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../redux/reducer";
import axios from "axios";

class UpdateProfile extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      profile_pic: "",
    };
  }

  componentDidMount = () => {
    const {username, profile_pic} = this.props
    this.setState({username, profile_pic})
  } 

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateProfile = (event) => {
    event.preventDefault();
    const { username, profile_pic} = this.state;
    const {id, history} = this.props;
    const body = { username, profile_pic };

    axios
      .put(`/auth/update/${id}`, body)
      .then((res) => {
        this.props.updateUser(res.data);
        history.push("/profile")
      })
      .catch((error) => alert(error, "Could not update profile at this time"));
  };

  render() {
    const { profile_pic } = this.state;

    return (
      <div className="updateProfile-container">
        <Navigation />
        <div className="updateProfile-content">
          <p className="update-title-content">Update Profile</p>
          <form className="update-form-content" onSubmit={this.updateProfile}>
          <input
            className="file-btn"
            value={profile_pic}
            name="profile_pic"
            type="text"
            onChange={this.changeHandler}
            ref={(fileInput) => (this.fileInput = fileInput)}
            placeholder="Image URL"
          />
            <img
              onClick={() => this.fileInput.click()}
              className="update-profile-pic"
              src={this.props.profile_pic}
              alt="profile"
            />
            <p className="user-current-name">Create Bio: <span>{this.props.username}</span></p>
            <textarea
              className="update-input-box"
              placeholder="Enter Bio"
              type="text"
              rows="3"
              name="username"
              onChange={(event) => this.changeHandler(event)}
            />
            <div className="update-form-btns">
              <input
                className="update-form-blue-btn"
                type="submit"
                value="Update"
              />
              <Link to="/profile">
                <input
                  className="update-form-blue-btn"
                  type="button"
                  value="Back"
                />
              </Link>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapToStateProps = (reduxState) => reduxState;

export default connect(mapToStateProps, { updateUser })(UpdateProfile);