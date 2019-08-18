// loading async Component with Higher order Component

import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null,

        }
        componentDidMount() {
            importComponent()
            .then(cmp => {
                this.setState({ component: cmp.default });
            });
        }
    

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;


// use function in the component 

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

// Routes - expample
{this.state.aouth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
