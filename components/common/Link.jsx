import NextLink from 'next/link';
import clsx from 'classnames';

export default function Link({
  children = null,
  href = '/',
  classNames = {},
}) {  
  return (
    <NextLink href={href}>
      <a className={clsx(classNames)}>
        {children}
      </a>
    </NextLink>
  );
};
