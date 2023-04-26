import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLSpanElement>

export type IconProps = ReactSpanProps & {
  name: string
}

export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  console.log(className)
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}
