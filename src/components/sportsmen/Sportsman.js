import React from 'react';
import '../../css/sportsmen.scss';

const Sportsman = (props) => {
  return <div className="sportsman">{props.name}</div>
}

export default Sportsman;