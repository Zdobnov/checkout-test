import moment from "moment/moment";

import "./ResultsItem.scss";

const ResultsItem = ({ item }) => (
  <li className="results-item">
    <span className="results-item__name">
      {item.name}
    </span>
    <span className="results-item__date">
      {moment(item.date).format('DD MMMM YYYY, HH:mm:ss')}
    </span>
    <span className="results-item__email">
      {item.email}
    </span>
    <span className="results-item__rate">
      Rate: <b>{item.rate}</b>
    </span>
    <p className="results-item__message">
      {item.message}
    </p>
  </li>
);

export default ResultsItem;
