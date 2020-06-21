import React, { Component } from "react";
import "../Home/HomeIcon.scss";

export default class Button extends Component {
  render() {
    return (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.5 7.49996L9 1.66663L16.5 7.49996V16.6666C16.5 17.5871 15.7538 18.3333 14.8333 18.3333H3.16667C2.24619 18.3333 1.5 17.5871 1.5 16.6666V7.49996Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
