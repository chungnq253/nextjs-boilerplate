import { useMemo } from 'react';

export default function TextTruncate({
  children = null,
  lines = 1,
}) {
  const styles = useMemo(() => {
    if (lines <= 1) {
      return ({
        display: 'block',
        'white-space': 'nowrap',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
      });
    }

    return ({
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: lines,
      WebkitBoxOrient: 'vertical',
    });
  }, [lines]);
  
  return (
    <span style={styles}>
      {children}
    </span>
  )
}
