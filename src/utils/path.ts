// Returns true if the first slug of the path matches the first slug of the current path

import { Pathname } from '@/types/path'

// Example: /test/example and /test will return true
export const hasMatchingFirstSlug = (
  path: Pathname,
  currentPath: string
): boolean => {
  if (!path || !currentPath) return false
  if (path === '/') return currentPath === '/'

  const linkSlug = path.split('/')[1]
  const currentSlug = currentPath.split('/')[1]

  return linkSlug === currentSlug
}
