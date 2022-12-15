import React from 'react';

function Contact(props) {
    return (
        <div>
            <form action="">
                <input type="text" name='name' placeholder='Name'/>
                <input type="text" name='email' placeholder='Email'/>
                <textarea name='comment' placeholder='Comment' ></textarea>
            </form>
        </div>
    );
}

export default Contact;
