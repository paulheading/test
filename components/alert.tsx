import styles from 'styles/alert.module.scss'
import React, { ReactNode } from 'react'

interface Alert {
  className: string
  success?: boolean
  error?: boolean
  children?: ReactNode
}

const styleStatus = (success?:boolean, error?:boolean) => {
  if (success) { return styles.success; }
  if (error) { return styles.error; }
  return "";
}

export const Alert = React.forwardRef<HTMLDivElement, Alert>((props, ref) => {
  const { children, className, success, error } = props;
  return <div ref={ref} className={`${styles.alert} ${styleStatus(success, error)} ${className}`}>{ children }</div>
});