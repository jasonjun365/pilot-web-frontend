interface PropTypes { // states
  initialData: any
  data: any
  loading: boolean
  thunkNames: string[]
}

interface PropTypes { // methods
  handleGetData: (v: any) => void
}

export default PropTypes;