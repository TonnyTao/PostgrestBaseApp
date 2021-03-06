const env = process.env.REACT_APP_DEPLOY_ENV || "staging";

const apiHostMap = {
  prod: "https://domain.com/api",
  staging: "https://domain-staging.com/api",
  local: `http://${window.location.hostname}:9000/api`
};

const nodeHostMap = {
  prod: "https://domain.com",
  staging: "https://domain-staging.com",
  local: `http://${window.location.hostname}:9000`
};

export default {
  apiHost: apiHostMap[env],
  nodeHost: nodeHostMap[env]
};
