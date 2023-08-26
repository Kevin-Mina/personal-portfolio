import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              22, anos
              atualmente morando em Garça, Brasil.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
