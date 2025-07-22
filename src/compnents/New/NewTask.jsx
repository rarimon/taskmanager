import React, {Fragment} from 'react';
import Card from "../card/Card.jsx";

const NewTask = () => {
    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">

                    <Card
                        title="ujkghk"
                        description="hjgkhkgh"
                        date="12-07-2022"
                        onEdit={() => alert('Edit clicked')}
                        onDelete={() => alert('Delete clicked')}
                    />


                </div>
            </div>
        </Fragment>
    );
};

export default NewTask;