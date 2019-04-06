import React from 'react'

import '../styles/App.scss'

const PDFViewer = props => (
  <embed
    width="100%"
    height="100%"
    src={ props.src }
    type="application/pdf"/>
)

export default PDFViewer