import React, { useState } from 'react'
import styled from '@emotion/styled'
import Loader from './_loader'

const StyledSandbox = styled.iframe`
  width: 95vw;
  height: 75vh;
  border: 0;
  border-radius: 0.7rem;
  overflow: hidden;
  opacity: ${props => (props.isLoading ? 0 : 1)};
`

const CodeSandbox = props => {
  const [isLoading, setIsLoading] = useState(true)

  const loadHandler = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <StyledSandbox
        src={props.url}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        onLoad={loadHandler}
        isLoading={isLoading}
        {...props}
      />
    </>
  )
}

CodeSandbox.defaultProps = {
  url: 'https://codesandbox.io/embed/new?codemirror=1',
}


export default CodeSandbox
