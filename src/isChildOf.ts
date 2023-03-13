export default function isChildOf(child: Element, parent: Element): boolean {
  if (!child || !parent) {
    return false
  }

  let parentNode = null

  parentNode = child.parentNode

  while (parentNode) {
    if (parent === parentNode) {
      return true
    }

    parentNode = parent.parentNode
  }

  return false
}
