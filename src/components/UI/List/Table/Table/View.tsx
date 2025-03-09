import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import {ColumnTypes} from '@/components/UI/List/Table/Interface';
import ViewStylePropTypes from '@/libs/types/ViewStyle';

interface PropTypes extends ViewStylePropTypes { // states
  columns: ColumnTypes[]
  data: any[]
  rowkey?: string | undefined
  animationStyle?: any
}

const View: React.FC<PropTypes> = ({ columns, data, rowkey, getMixinStyle, animationStyle }) => {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.name}
              align={column.align}
              sx={{ p: 2, pr: column.name === 'custom_checkbox' ? 0 : '', }}
              style={{ minWidth: column.minWidth, width: column.width }}
              className={getMixinStyle('th')} 
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody style={{ ...animationStyle }}>
        {data.map((row: any, i: number) => {
          return (
            <Fragment key={rowkey && row[rowkey] || i}>
              {row.head && (
                <TableRow hover tabIndex={i}>
                  <TableCell colSpan={100} className={getMixinStyle('tdHead')}>
                    {row.head}
                  </TableCell>
                </TableRow>
              )}
              <TableRow hover tabIndex={i}>
                {columns.map((column) => {
                  const value = row[column.name];
                  const render = column.render;
                  return (
                    <TableCell
                      key={column.name}
                      align={column.align}
                      sx={{ p: 2, pr: column.name === 'custom_checkbox' ? 0 : '', }}
                      className={getMixinStyle('td')}
                    >
                      {render && render(value, row, i) || value}
                    </TableCell>
                  );
                })}
              </TableRow>
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default View;