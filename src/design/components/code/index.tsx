import React, { useCallback } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"
import { copyToClipboard } from "../../../utils"
import { CopyCode, LineNo, Pre } from "./styles"

type CodeProps = {
  codestring: string
  language: any
}

export function Code({ codestring, language }: CodeProps) {
  const handleCopy = useCallback(() => copyToClipboard(codestring), [
    codestring,
  ])

  return (
    <Highlight
      {...defaultProps}
      code={codestring}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleCopy}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
