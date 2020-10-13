import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedBack from '../feedBack/FeedBack';


const feedbackData = [
    {
        comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium! ',
        name : 'Nash Patrik',
        company : 'CEO, Manpol',
        img : customer1
    },
    {
        comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium! ',
        name : 'Miriam Barron',
        company : 'CEO, Manpol',
        img : customer2
    },
    {
        comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium! ',
        name : 'Bria Malone',
        company : 'CEO, Manpol',
        img : customer3
    }
]

const FeedBacks = () => {
    return (
       <section className="my-5 py-5">
           <div className="container">
               <div>
               <h2 className="m-3 text-center"style={{ color: '#171B4E' }}>Clients <span style={{ color: '#7AB259' }}>Feedback</span></h2>
               </div>
               <div className="card-deck mt-5">
                    {
                        feedbackData.map(feedback => <FeedBack feedback={feedback} key={feedback.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default FeedBacks;