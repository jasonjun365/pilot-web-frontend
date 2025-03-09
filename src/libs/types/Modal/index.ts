interface PropTypes { // states
  data: any
  title: string
  open: boolean
  loading: boolean
  thunkName: string
  container?: HTMLElement
  BackdropProps?: object
}

interface PropTypes { // methods
  handleSubmit: (v: any) => void
  handleClose: () => void
  handleOpen: () => void
}

export default PropTypes;