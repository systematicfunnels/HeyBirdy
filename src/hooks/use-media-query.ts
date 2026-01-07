import { useEffect, useState, useCallback } from 'react' 
 
const breakpoints = { 
  sm: 640, 
  md: 768, 
  lg: 1024, 
  xl: 1280, 
  '2xl': 1536, 
} as const 
 
export function useMediaQuery(query: keyof typeof breakpoints | string) { 
  const getMediaQuery = useCallback(() => {
    if (typeof window === 'undefined') return null
    return window.matchMedia( 
      typeof query === 'string' 
        ? query 
        : `(min-width: ${breakpoints[query]}px)` 
    ) 
  }, [query])

  const [matches, setMatches] = useState(() => {
    const mq = getMediaQuery()
    return mq ? mq.matches : false
  }) 
 
  useEffect(() => { 
    const mediaQuery = getMediaQuery()
    if (!mediaQuery) return
 
    const listener = (event: MediaQueryListEvent) => { 
      setMatches(event.matches) 
    } 
 
    mediaQuery.addEventListener('change', listener) 
    return () => mediaQuery.removeEventListener('change', listener) 
  }, [getMediaQuery]) 
 
  return matches 
} 
 
// Custom hook for responsive values 
export function useResponsiveValue<T>(values: { 
  base: T 
  sm?: T 
  md?: T 
  lg?: T 
  xl?: T 
  '2xl'?: T 
}): T { 
  const isSm = useMediaQuery('sm') 
  const isMd = useMediaQuery('md') 
  const isLg = useMediaQuery('lg') 
  const isXl = useMediaQuery('xl') 
  const is2xl = useMediaQuery('2xl') 
 
  if (is2xl && values['2xl']) return values['2xl'] 
  if (isXl && values.xl) return values.xl 
  if (isLg && values.lg) return values.lg 
  if (isMd && values.md) return values.md 
  if (isSm && values.sm) return values.sm 
 
  return values.base 
} 
