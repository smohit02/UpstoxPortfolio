import Onboarding from "../screens/OnBoarding";

const withAuth = (Component, isLoggedIn) => {
    const WrappedComponent = (props) => {
        return isLoggedIn ? <Component {...props} /> : <Onboarding />;
    };

    return WrappedComponent;
};

export default withAuth;
