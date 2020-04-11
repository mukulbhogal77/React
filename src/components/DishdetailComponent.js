import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; 

class Dishdetail extends Component{

    renderComments(comments){
        if(comments != null){
            const cmnts = comments.map((comment) => {
                return(
                        <li key={comment.id} > 
                           <p>{comment.comment}</p>
                           <p>--{comment.author}, &nbsp; 
                                  {
                                    new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }).format(new Date(comment.date))
                                  }
                           </p>
                        </li>
                    );    
            })
            return (
               <div >
                    <h4>Comments</h4>
                    {cmnts}
               </div>
            );
            
        }
        return <div></div>
    }

    renderDish(dish){
        if(dish != null){
             return(
                 <div >
                 <card>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                      </CardBody>
                 </card>
                 </div>
             );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    
    render(){
         const dish = this.props.dish
         if(dish != null){ 
             return(
                 <div className="Container">
                     <div className="row">
                         <div className="col-12 col-md-5 m-1">
                             { this.renderDish(dish) }
                         </div>
                         <div className="col-12 col-md-5 m-1">
                             { this.renderComments(dish.comments) } 
                         </div>
                     </div>
                 </div>
            );
         }
         else{
             return(
                <div></div>
             );
         }
    }

}

export default Dishdetail