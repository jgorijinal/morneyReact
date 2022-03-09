import React from 'react';
import  classnames from 'classnames'
type Props =  {
  name:string
} & React.SVGAttributes<SVGElement>

function Icon(props:Props) {
   const {name , children,className , ...rest} = props
    return (
            <svg className={classnames('icon',className)} aria-hidden="true" {...rest}>
                <use xlinkHref={`#icon-${props.name}`}/>
            </svg>
    )

}

export default Icon