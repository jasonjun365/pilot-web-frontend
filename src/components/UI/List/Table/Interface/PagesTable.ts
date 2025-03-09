import SearchFormTypes from './SearchForm';

interface PropTypes { // states
  data: any[]
  loading: boolean
  count: number
  searchForm: SearchFormTypes
  selects: any
  thunkNames: string[]
}

interface PropTypes { // methods
  handleGetData: (v: any) => void
  handleSetSelectValue: (v: string[]) => void
}

export default PropTypes;