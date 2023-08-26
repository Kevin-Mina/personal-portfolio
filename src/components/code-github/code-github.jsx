import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">OLHE MEU CÓDIGO</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="Kevin/Simple-Http"
                    avatar="github.png"
                  />
                <CardText>
                        Um simples servidor http em python. Confira o código no Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Ver no github" href="https://github.com/Kevin-Mina/Simple-Http-Python" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
