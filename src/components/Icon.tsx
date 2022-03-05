import React from 'react';
type Props =  {
  name:string
}
function Icon(props:Props) {
    return (
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#icon-${props.name}`}/>
            </svg>
    )

}

export default Icon