import { Link } from "react-router-dom";
import React from 'react';


const Tag = ({ children, className, count, ...props }) => {
  return (<Link href={{ pathname: '/', query: { tag: children } }}>
            <a className='tag' {...props}>
              {children}
            </a>
          </Link>
)
}

export default Tag
