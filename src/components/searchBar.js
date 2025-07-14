import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';

class SearchBar extends Component {

  handleFormSubmit({ query }) {
    if (this.props.onSubmit) {
      this.props.onSubmit(query);
    } else {
      console.warn('onSubmit prop no está definida en SearchBar');
    }
  }

  renderInput(field) {
    return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />
}

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="search-bar__wrapper">
          <Field name="query" component={this.renderInput} />
          <p>Press return to search</p>
        </div>
      </form>
    );
  }
}

// Wrapper funcional para pasar navigate como prop
function withNavigation(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

// Envolver con reduxForm
const WrappedSearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

export default withNavigation(WrappedSearchBar);
