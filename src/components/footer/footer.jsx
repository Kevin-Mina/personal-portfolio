import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/Kevin-Mina">
            Github
          </a>
           /
          <a target="_blank" href="https://twitter.com/Kevin007F">
            Twitter
          </a>
           /
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61550066818775">
            Facebook
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/kevin-mina-7a3235289/">
            LinkedIn
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="DE VOLTA AO TOPO" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
