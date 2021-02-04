import React from 'react';

const Links = (props) =>(

    <div className='Links'>
                    <h3>Social Links: </h3>
                    <ul>
                        <li><a href="#">{props.linksA}</a></li>
                        <li><a href="#">{props.linksB}</a></li>
                        <li><a href="#">{props.linksC}</a></li>
                    </ul>
    </div>

);

export default Links;