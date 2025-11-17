import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

//in App.jsx
export default ErrorBoundary;


// Then wrap your app:

import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <TodoApp />
    </ErrorBoundary>
  );
}