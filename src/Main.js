import React from 'react';
import Table from './Table';

function Main(props) {

  var year = parseInt(props.year, 10);
  var month = parseInt(props.month, 10);

  const monthsTables = [];
  if (isNaN(month)) {
    for(var i = 0; i < 12; i++) {
      monthsTables.push(<Table month={i} year={year}/>);
    }
  } else {
    monthsTables.push(<Table month={month} year={year}/>);
  }

  return (
    <main role="main" class="flex-shrink-0">
      <div class="container">
        {monthsTables}
      </div>
    </main>
  );
}

export default Main;
