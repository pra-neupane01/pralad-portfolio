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
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-sans font-semibold rounded-xl transition-all duration-300 shadow-sm';

  const variants = {
    primary:
      'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:brightness-110 border border-emerald-400/30',
    secondary:
      'bg-[#0e1422] text-slate-200 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-[#121a2d]',
    outline:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-emerald-glow',
    solid:
      'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]',
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={16} />}
      <span>{children}</span>
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

