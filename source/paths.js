import {path} from './path'

export function paths(pathsToSearch, obj) {
  if (arguments.length === 1) {
    return _obj => paths(pathsToSearch, _obj)
  }

  return pathsToSearch.map(singlePath => path(singlePath, obj))
}
