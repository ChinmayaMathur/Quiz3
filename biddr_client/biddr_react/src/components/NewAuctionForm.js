import React from 'react';
import FormErrors from './FormErrors';

//functional component
const NewAuctionForm = (props) => {

    const handleSubmit = (event) => {
       event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get('title'),
            details: formData.get('details'),
            reserve_price: formData.get('reserve_price'),
            end_date: formData.get('end_date')
        }

        props.createAuction(params);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title *</label>
                <br />
                <input name='title' id='title' ></input>
                <FormErrors forField="title" errors={props.errors} />
                <br />
            </div>
            <div>
                <label htmlFor='details'>Description *</label>
                <br />
                <textarea name='details' id='details' ></textarea>
                <FormErrors forField="details" errors={props.errors} />
                <br />
            </div>
            <div>
                <label htmlFor='reserve_price'>Reserve Price *</label>
                <br />
                <textarea name='reserve_price' id='reserve_price' ></textarea>
                <FormErrors forField="reserve_price" errors={props.errors} />
                <br />
            </div>
            <div>
                <label htmlFor='end_date'>End Date *</label>
                <br />
                <textarea name='end_date' id='end_date' ></textarea>
                <FormErrors forField="end_date" errors={props.errors} />
                <br />
            </div>
            <div>
                <input type='submit' value='submit' />
            </div>
        </form>    
    )
}

export default NewAuctionForm;
