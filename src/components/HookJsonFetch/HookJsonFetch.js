import React from "react";
import PropTypes from "prop-types";

import useJsonFetch from "../../hooks/useJsonFetch/useJsonFetch";

function HookJsonFetch({ url }) {
  const [data, loading, error] = useJsonFetch(url);
  return (
    <div className="ui segment">
      {data && <p>{data.status}</p>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
    </div>
  );
}

HookJsonFetch.propTypes = {
  url: PropTypes.string,
};

export default HookJsonFetch;