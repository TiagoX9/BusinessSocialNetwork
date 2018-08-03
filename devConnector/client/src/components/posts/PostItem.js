import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

class PostItem extends Component {
  render() {
    const { post, auth } = this.props;

    return (
      <div className="posts">
        <div className="card card-body mb-3">
          <div className="row">.</div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state = {
  auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
