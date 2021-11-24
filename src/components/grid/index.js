import React, { useRef } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';

import CellTemplate from '../commons/rowTemplates/gridCellTemplate';

const FixedSizeGrid = ({columns, rows}) => {

  const gridRef = useRef(null);

    return (
      <>
      <Grid
        columnCount={columns}
        columnWidth={100}
        height={500}
        rowCount={rows}
        rowHeight={35}
        width={900}
        ref={gridRef}
      >
        {CellTemplate}
      </Grid>
      </>
    );
  
}

export default FixedSizeGrid;