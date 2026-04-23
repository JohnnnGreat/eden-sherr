/**
 * SectionHeader
 *
 * Props:
 *   label        {string}            — section-label (uppercase, orange)
 *   title        {string}            — text-display-md, font-display
 *   description  {string=}           — section-body (optional)
 *   align        {'left'|'center'}   — default 'left'
 */
export default function SectionHeader({ id, label, title, description, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'flex flex-col items-center text-center' : ''}>
      {label && <p className="section-label">{label}</p>}

      <h2
        id={id}
        className="text-display-md text-charcoal-900"
        style={{
          marginTop: label ? '0.75rem' : 0,
          textWrap: 'balance',
          maxWidth: isCenter ? 640 : 560,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="section-body"
          style={{
            marginTop: '1.25rem',
            ...(isCenter && { marginInline: 'auto' }),
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
