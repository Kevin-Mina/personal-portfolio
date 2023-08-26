import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline">EXPERIÊNCIA DO USUÁRIO</p>
            <p className="text-justify">
              aos 16 anos de idade, eu me apaixonei por computadores.

              desde então, eu tenho estudado tudo sobre computadores na internet.

              e, aprimorando cada vez mais minhas habilidades na área.

            </p>

              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="Windows"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Microsoft Office"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Metasploit"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Cobalt Strike"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              iconStyle={{"fill":"#A80202"}}
              label="Visual Studio"
            />
        </div>

          </div>
        );
    }
}

export default DesignComponent;
