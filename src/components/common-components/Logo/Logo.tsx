import React from 'react';
import Image from "../Image/Image";

const Logo: React.FC = () => {
    return (
       <Image src={'../Images/logo.png'} width={48} height={48} />
    );
};

export default Logo;