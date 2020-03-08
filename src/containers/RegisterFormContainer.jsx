import { connect } from "react-redux";
import {onSubmitNewUser} from "../ducks/auth/actions.js";
import Form from "../components/RegisterForm.jsx";


export default connect(
    state => {
        console.log(state);
        return {
            isClose: state.auth.isClose,
        };
    },
    { onSubmitNewUser },
)(Form);
