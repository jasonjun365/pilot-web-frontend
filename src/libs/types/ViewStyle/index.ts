interface PropTypes { // states
  mode: 'dark' | 'light'
  style: { [v: string]: string }
  mediaStyle: { [v: string]: string }
  breakpoints: { [v: string]: boolean }
}

interface PropTypes { // methods
  getMixinStyle: (v: string, n?: string[]) => string
}

export default PropTypes;