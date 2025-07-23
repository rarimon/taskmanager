import React, {Fragment} from 'react';

const Card = ({title, total}) => {
    return (
        <Fragment>
            <div className="card shadow-sm rounded-1 p-3 mb-4 " style={{ maxWidth: '450px' }}>

                <h3 className="fw-bold text-dark">{title} Task</h3>
                <h5 className="text-muted mb-2 mt-4">Total : {total}</h5>

            </div>
        </Fragment>
    );
};

export default Card;