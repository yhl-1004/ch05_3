import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type {WidthHeight} from './WidthHeight'
import type {LeftRightBottom} from './LeftRightTopBottom'
import type {MinMaxWidthHeight} from './MinMaxWidthHeight'
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightBottom &
  MinMaxWidthHeight & {src?: string}

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  className: _className,
  left,
  right,
  top,
  bottom,
  src,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && 'url(' + src + ')',
    left,
    right,
    top,
    bottom,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    ...props
  }
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} style={style} className={className} />
}
