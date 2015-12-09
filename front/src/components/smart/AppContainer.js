import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DashboardActions from '../../actions/DashboardActions';
import App from '../App';

function mapStateToProps(state) {
    return {
        stats: state.stats.get('stats'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dashboardActions: bindActionCreators(DashboardActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
