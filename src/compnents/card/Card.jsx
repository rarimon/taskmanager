import React, {Fragment} from 'react';

const Card = ({ title, description, date, onEdit, onDelete,status,statusbgcolor }) => {
    return (
        <Fragment>
            <div className="card shadow-sm rounded-1 p-3 mb-4 " style={{ maxWidth: '550px' }}>
                <h6 className="fw-bold text-dark">{title}</h6>
                <p className="text-muted mb-2">{description}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-muted small d-flex align-items-center gap-2">
                        <i className="bi bi-calendar4"></i>
                        <span>{date}</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <button onClick={onEdit} className="btn btn-link p-0 text-primary">
                            <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button onClick={onDelete} className="btn btn-link p-0 text-danger">
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>

                    <span className={`badge ${statusbgcolor} text-white ms-2`}>{status}</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;