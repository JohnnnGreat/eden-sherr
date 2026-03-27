'use client';

import Link from 'next/link';

/**
 * Button
 *
 * Props:
 *   variant   {'primary'|'secondary'|'ghost'}  — default 'primary'
 *   href      {string=}                         — renders as <Link> when provided
 *   onClick   {function=}                       — renders as <button> when provided (no href)
 *   icon      {ReactNode=}                      — trailing icon
 *   children  {ReactNode}
 *   className {string=}                         — extra classes
 *   ...rest   — forwarded to the underlying element
 */
export default function Button({
  variant = 'primary',
  href,
  onClick,
  icon,
  children,
  className = '',
  ...rest
}) {
  const variantClass =
    variant === 'secondary' ? 'btn-secondary'
    : variant === 'ghost'   ? 'btn-ghost'
    :                         'btn-primary';

  const content = (
    <>
      {children}
      {icon && <span aria-hidden="true">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${variantClass} ${className}`.trim()} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variantClass} ${className}`.trim()}
      {...rest}
    >
      {content}
    </button>
  );
}
