/* eslint-disable react/prop-types */


import './index.scss'
const Button = ({variant,children,onClick}) => {
  return (
    <button onClick={onClick} className={`button button--${variant}`}>{children}</button>
  )
}

export default Button
