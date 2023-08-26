import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Formação Acadêmica</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Faculdade de Tecnologia" subtitle="Ensino Superior (Agosto 2023 - Atualmente Cursando-ADS)"/>
                      <CardText expandable={true}>
                          October	2016 - October 2017. Development of Microservices, UX-Consulting.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>Angular 2</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Docker</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Jenkins</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>LESS</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Java Spring</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Foundation, Bootstrap</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Confluence, JIRA</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="HATSUE TOYOTA" subtitle="Ensino Fundamental"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Fevereiro	2013 - Dezembro 2016. Garça, Brasil.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>5ª série = 6º ano </Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>6ª série = 7º ano</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>7ª série = 8º ano</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>8ª série = 9º ano</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip></Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip></Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip></Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="CCI - Centro De Comunicação Inglesa" subtitle="Escola De Idiomas Garça, Brasil."
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Janeiro 2017 - Dezembro 2018. inglês intermediário.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>A1-iniciante</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>A2-básico</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>B1-intermediário</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>B2-pós-intermediário</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>C1-avançado</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>C2-proficiente / fluente</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip></Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Escola Estadual Hilmar Machado de Oliveira" subtitle="Ensino Médio."
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Fevereiro	2017	-	Dezembro	2019. Garça, Brasil.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>1ª SÉRIE</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>2ª SÉRIE</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>3ª SÉRIE</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
