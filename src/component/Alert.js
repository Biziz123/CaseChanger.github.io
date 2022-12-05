import React from 'react'

export default function Alert(props) {
  return (
      props.alert && <div className="alert alert-success alert-dismissible fade show mx-5 my-3" role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg}  
</div>

  )
}
