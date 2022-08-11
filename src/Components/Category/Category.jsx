import React from 'react';
import './Category.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Category = ()=>{
    
    const [pdrop,setpdrop] = React.useState(false);


    const handleClick = event=>{
        document.querySelector(".caret").classList.toggle('caret-rot');
        console.log(document.querySelector(".caret").classList);
        setpdrop(!pdrop);
        };

    return (<div className='category-main'>
    <div className="all-drop-div" 
    onClick={handleClick}>
    <a 
    className="all-drop" 
    href="#" >
    ALL CATEGORIES
    </a>
    <KeyboardArrowDownIcon className="caret" sx={{fontSize: 22} } />
    </div>
    {pdrop && <Drop />}
    <a href="#" className="cat-items" >Cars</a>
    <a href="#" className="cat-items" >Cars</a>
    <a href="#" className="cat-items" >Cars</a>
    <a href="#" className="cat-items" >Cars</a>
    <a href="#" className="cat-items" >Cars</a>
    <a href="#" className="cat-items" >Cars</a>
    <a href="#" className="cat-items" >Cars</a>
    </div>);
}

const Drop = (props)=>{
    
    const [data,setData] = React.useState(
        [
            {title:"Properties",content:[{ref:"#",text:"For Sale"},{ref:"#",text:"For Rent"}]},
            {title:"Fashion",content:[{ref:"#",text:"Men"},{ref:"#",text:"Women"}]}
        ]
    );
    // const [link, setLink] = React.useState({ref:"",text:""});

    const Item = (props)=>{
        
        return(
            <div className="drop-item">
                <h1 className="item-head">{props.title}</h1>
                {props.content.map((n,index)=>{
                    return(<div className="drop-ia">
                        <a key={index} className="item-text" href={n.ref}> {n.text} </a>
                        </div>);
                })}
                
            </div>
        );
    }

    return (
        <div className='drop'>
            <div>
            {data.map((n,index)=>{
                return(
                    <Item key={index} title={n.title} content={n.content}/>
                );
            })}
            </div>
            <div>
            {data.map((n,index)=>{
                return(
                    <Item key={index} title={n.title} content={n.content}/>
                );
            })}
            </div>
            <div>
            {data.map((n,index)=>{
                return(
                    <Item key={index} title={n.title} content={n.content}/>
                );
            })}
            </div>
            
        </div>
    );
}


export default Category;