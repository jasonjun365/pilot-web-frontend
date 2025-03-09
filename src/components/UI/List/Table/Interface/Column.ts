import React from 'react';

interface PropTypes {
  name: string
  label: string | React.ReactNode
  width?: number | string
  minWidth?: number | string
  align?: 'right' | 'left' | 'center' | 'inherit' | 'justify'
}

interface PropTypes {
  render?: (v: any, row: any, i: number) => any
}

export default PropTypes;