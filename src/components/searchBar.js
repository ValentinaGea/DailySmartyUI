import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit  = ({ query }) => {
      if (this.props.onSubmit) {
          this.props.onSubmit(query);
        } else {
          console.warn('onSubmit prop no está definida en SearchBar');
        }
        this.props.onSubmit(query);
    }

    renderInput = (field) => {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit )}>
                <Field name="query" component={this.renderInput} />
            </form>
        );
    }
}

// Creamos un wrapper funcional para inyectar navigate

function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

// Envolvemos con reduxForm
const WrappedSearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default withNavigation(WrappedSearchBar);
