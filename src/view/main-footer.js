import React, {Component} from "react";
import {Layout} from "antd";

export default class MainFooter extends Component {
  render () {
    return (
      <Layout.Footer
        style={ {textAlign:"center"} }
      >
        苏ICP备123456号-1 2007-2018 JAMESCHUN.CC 版权所有
      </Layout.Footer>
    )
  }
}
