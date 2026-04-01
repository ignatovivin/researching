function SummaryCard({ as: Tag = 'article', className = '', children, ...props }) {
  const classes = className ? `summary-card ${className}` : 'summary-card'

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

export default SummaryCard
