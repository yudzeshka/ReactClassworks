function withLoading(Component) {
  return function ({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Somethings is loading...</p>;
    }
    return <Component {...props} />;
  };
}

export default withLoading;
