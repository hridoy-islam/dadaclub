import React from 'react';

const Blog = () => {
    return (
        <div className='mt-3'>
            <div className='card mt-3 p-3'>
            <h4>How Does React Works?</h4>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='card mt-3 p-3'>
            <h4>Diiference Between props vs state?</h4>
            <p>Use props to pass data and event handlers down to our child components.
                Props are immutable. State is mutable and pass it down with props instead. Bsically state to store the data your current page needs in your UI. 
            </p>
            </div>
            <div className='card mt-3 p-3'>
            <h4>Where we can use UseEffect without data load?</h4>
            <p>Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. </p>
            </div>
        </div>
    );
};

export default Blog;