import React from 'react';

const Opisaniya = ({data}) => {
    console.log(data )
    return (
        <div className={'container'}>
            {data.info_uz}
        </div>
    );
};

export default Opisaniya;