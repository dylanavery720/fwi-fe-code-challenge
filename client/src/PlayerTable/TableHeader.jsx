import React from 'react';

const TableHeader = ({ nextPage, page, backPage }) => (
  <table
    id="player-table-header"
    role="presentation"
    className="table table--fixed"
  >
    <thead>
      <tr role="row">
        <th role="columnheader" className="table__header table__avatar" />
        <th role="columnheader" className="table__header table__player">
          Player
        </th>
        <th role="columnheader" className="table__header table__winnings">
          Winnings
        </th>
        <th role="columnheader" className="table__header table__native">
          Native of
        </th>
        <th role="columnheader" className="table__header table__native"></th>
        {page > 1 && (
          <th
            onClick={backPage}
            role="columnheader"
            className="table__header table__native edit"
          >
            BACK
          </th>
        )}
        <th
          onClick={nextPage}
          role="columnheader"
          className="table__header table__native edit"
        >
          NEXT PAGE
        </th>
      </tr>
    </thead>
  </table>
);

export default TableHeader;
