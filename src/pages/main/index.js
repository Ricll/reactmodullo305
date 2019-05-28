import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })),
      error: PropTypes.oneOf([null, PropTypes.string]),
    }).isRequired,
  }


  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    event.preventDefault();
    const { addFavoriteRequest } = this.props;
    const { repositoryInput } = this.state;
    addFavoriteRequest(repositoryInput);
    this.setState({ repositoryInput: '' });
  }

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          { favorites.loading && <span>Carregando</span>}
          {!!favorites.error
             && (<span style={{ color: '#F00' }}>{favorites.error}</span>)}

        </form>
        <ul>
          {favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> {favorite.description}

              </p>
              <a href={favorite.url}>Acessar Github</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
