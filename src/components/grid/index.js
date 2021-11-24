import React, { useRef } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';

import CellTemplate from '../commons/rowTemplates/gridCellTemplate';

const FixedSizeGrid = () => {

  const gridRef = useRef(null);

    return (
      <>
      <Grid
        columnCount={8}
        columnWidth={100}
        height={500}
        rowCount={1000}
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