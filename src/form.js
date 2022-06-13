import React from 'react';
import {useState} from 'react';
import './form.css'

const formDetail = ()=>{

    const [text,setText] = useState('');

    const inputChangeHandler = (e)=>{
        // console.log(e.target.value);
        setText(e.target.value);
    }

    const clickHandler = e => {
        if(text != '')
          window.location.href = `https://www.${text}.com/`
        else
          alert('Enter something valid!!')
    }

    return(
        <>
           <div className='main'>
           <div className='content'>
                   <div><input type="text" placeholder='Enter the website name to visit' value={text} onChange={inputChangeHandler}/></div>
                   <div><button onClick={clickHandler}>Search</button></div>
               </div>
               <div>Suggestions are: turtlemint, facebook, instagram, twitter.</div>
               <details>
                   <summary style={{background:'black', color:'whitesmoke', padding:'5px'}}>Demo Details</summary>
                   <ul>
                           <li className='list'>Demo Data 1</li>
                           <li className='list'>Demo Data 2</li>
                   </ul>
               </details>
               <br/><hr/>
               <iframe frameborder="1" className="iframeVid" src="//www.youtube.com/embed/HZ5g6np0Ngw"></iframe> 
           </div>
        </>
    )
}
export default formDetail;