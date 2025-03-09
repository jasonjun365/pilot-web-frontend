import SearchFormTypes from './SearchForm';

interface PropTypes { // states
  data: any[]
  loading: boolean
  searchForm?: SearchFormTypes
}

interface PropTypes { // methods
  handleGetData?: (v?: any) => void
}

export default PropTypes;