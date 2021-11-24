import React from 'react';

const CellTemplate = (props) => {

  const { isScrolling, columnIndex, rowIndex, style } = props;

  if(!isScrolling){

  return(
    <div style={style}>
      Item {rowIndex}, {columnIndex}
    </div>
  );

  }else{
    return(
      <div style={style}>
        Scrolling
      </div>
    )
  }
}

export default CellTemplate;