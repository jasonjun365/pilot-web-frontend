interface PropTypes { // states
  data: any
  title: string
  open: boolean
  loading: boolean
  thunkName: string
}

interface PropTypes { // methods
  handleSubmit: (v: any) => void
  handleClose: () => void
}

export default PropTypes;