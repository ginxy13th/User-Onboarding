import React from 'react';

function User({details}) {
    if (!details) {
        return <h3>We making your post, homie. Hold up!</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>

            {
                !!details.termsOfService  &&
                <div>
                    Do You Accept The Terms of Service:
                    <ul>
                        {details.termsOfService.map((accept, idx) => <li key={idx}>{accept}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default User