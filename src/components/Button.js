// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import '../components/Button.css'
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/Login' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>

        </Link>
    );
};

// import React from 'react';
// import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({ children, type, onClick, buttonStyle, buttonSize, to }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   if (to) {
//     // Se è specificata una destinazione, usa il componente Link di react-router
//     return (
//       <Link to={to} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
//         {children}
//       </Link>
//     );
//   } else {
//     // Altrimenti, usa un pulsante normale
//     return (
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     );
//   }
// };
