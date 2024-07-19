const LoadingSpinner = () => { 
    return (
      <div className="text-center">
        <div
          className="spinner-border loading-spinner"
          role="status"
          style={{ width: "8rem", height: "8rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
}

export default LoadingSpinner