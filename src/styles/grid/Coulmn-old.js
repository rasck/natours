export const Column_1_of_2 = Column.extend`
  width: calc((100% - ${gutterHorizontal})/2);
`;

export const Column_2_of_2 = Column.extend`
  width: 100%;
`;

export const Column_1_of_3 = Column.extend`
  width: calc((100% - ${gutterHorizontal} * 2)/3);
`;

export const Column_2_of_3 = Column.extend`
  /* 2 times 1_of_3 plus the gutter */
  width: calc(${gutterHorizontal} + 2*((100% - ${gutterHorizontal} * 2)/3));
`;

// //width: calc((100% - ${gutterHorizontal})/2)
//calc((${gutterPre}*${gutterHorizontal}) + (100% - ${gutterHorizontal} * ${gutters}))/(${max}/${columns}));
//  width: ${colCalc(props => props.columns, props => props.max)};

// width: calc((1-max)*${gutterHorizontal} + (100% - ${gutterHorizontal} * (max - 1)))/(max/columns));
export const Column_3_of_3 = Column.extend`
  /* 2 times 1_of_3 plus the gutter */
  width: width: 100%;
`;

export const Column_1_of_4 = Column.extend`
  width: calc((100% - ${gutterHorizontal} * 3)/4);
`;

export const Column_2_of_4 = Column.extend`
  width: calc(${gutterHorizontal} + 2*((100% - ${gutterHorizontal} * 3)/4));
`;

export const Column_3_of_4 = Column.extend`
  width: calc(2*${gutterHorizontal} + 3*((100% - ${gutterHorizontal} * 3)/4));
`;

export const Column_4_of_4 = Column.extend`
  width: 100%;
`;
