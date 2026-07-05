import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  download,
  target,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-mono font-medium rounded-lg transition-all duration-300';

  const variants = {
    primary:
      'bg-terminal-green/10 text-terminal-green border border-terminal-green/30 hover:bg-terminal-green/20 hover:border-terminal-green/50',
    secondary:
      'bg-terminal-surface text-terminal-text border border-terminal-border hover:border-terminal-green/30 hover:text-terminal-green',
    outline:
      'bg-transparent text-terminal-green border border-terminal-green/40 hover:bg-terminal-green/10',
    solid:
      'bg-terminal-green text-terminal-bg border border-terminal-green hover:bg-terminal-greenDim font-semibold',
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={16} />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        download={download}
        className={combinedStyles}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedStyles}
      {...props}
    >
      {content}
    </motion.button>
  );
}
