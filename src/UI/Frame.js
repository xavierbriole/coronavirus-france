import * as React from "react";
import { isMobile } from "react-device-detect";

export default class Frame extends React.Component {
  render() {
    return (
      <div
        className="iframe-wrapper"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://mapthenews.maps.arcgis.com/apps/opsdashboard/index.html#/${
            isMobile
              ? "bae8aaa7a0b14261b4621c31db410c44"
              : "5df19abcf8714bc590a3b143e14a548c"
          }" class="iframe">`
        }}
      ></div>
    );
  }
}
