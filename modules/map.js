function mapObject (fn, obj) {
  const willReturn = {}

  for (const prop in obj) {
    willReturn[ prop ] = fn(obj[ prop ], prop)
  }

  return willReturn
}

export default function map (fn, arr) {
  if (arguments.length === 1) return arrHolder => map(fn, arrHolder)

  if(arr === undefined) return []

  if (arr.length === undefined) return mapObject(fn, arr)

  let index = -1
  const len = arr.length
  const willReturn = Array(len)

  while (++index < len) {
    willReturn[ index ] = fn(arr[ index ])
  }

  return willReturn
}
