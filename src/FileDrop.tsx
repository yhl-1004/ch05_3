import type {DragEvent, SyntheticEvent} from 'react'

export default function FileDrop() {
  const onDragOver = (e: DragEvent) => e.preventDefault

  const onDrop = (e: DragEvent) => {
    console.log('!')
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i)
        console.log('file ', i, ' : ', file)
      }
    }
  }

  const onClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log(isTrusted, target, bubbles, currentTarget)
  }

  return (
    <div>
      <p>FileDrop</p>
      <div onDragOver={onDragOver} onClick={onClick}>
        <h1>Drop image files over Me</h1>
      </div>
    </div>
  )
}
