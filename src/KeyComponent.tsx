import type {FC, ReactNode} from 'react'

export type PProps = {
  //children?: ReactNode
}

const KeyComponent: FC<PProps> = props => {
  //const {children} = props
  const text = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
  return <div>{text}</div>
}

export default KeyComponent
