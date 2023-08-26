import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                Sou um entusiasta de tecnologia e, acima de tudo, apaixonado por computadores. Desde cedo, minha
                curiosidade e fascínio pelo mundo da informática me levaram a explorar diferentes áreas desse universo digital.
                Meu envolvimento com computadores começou como um hobby, mas logo se tornou uma busca constante por conhecimento e
                aprimoramento. Minha dedicação me levou a estudar e entender as complexidades do sistema operacional Windows,
                especialmente em relação à sua segurança.
              </span>
              <span className="quote-author">- Kevin</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
