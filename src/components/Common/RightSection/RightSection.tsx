import React from 'react';
import Phone from 'assets/phone.png';
import sectionStyle from './RightSection.module.scss';

const RightSection = () => (
<div className={sectionStyle.container}>
    <img src={Phone} className={sectionStyle.phone} alt="app display" />
</div>)

export default RightSection;
