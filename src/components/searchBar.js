import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit = ({ query }) => {
        console.log('trying to handle submit for query', query);
        this.props.navigate(`/results?query=${query}`);  // ejemplo de navegación
    }

    renderInput = (field) => {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}

// Envolvemos con reduxForm
const WrappedSearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

// Creamos un wrapper funcional para inyectar navigate
function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

export default withNavigation(WrappedSearchBar);
