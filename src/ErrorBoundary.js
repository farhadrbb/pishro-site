import React from "react";
import { ErrorPage1 } from "./ErrorPage1";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorPage1 />;
        }

        return this.props.children;
    }
}


export default ErrorBoundary

