import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="Post">
                <img src="/blue-origami-bird.png" alt="blue-origami-bird"/>
                <div>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien nunc. Vivamus mi justo, egestas a nulla non, mattis blandit justo. Morbi vehicula mi eros, nec semper nisi fermentum vitae. Aenean interdum congue risus, nec faucibus nisl vulputate id. Ut suscipit, sapien ac vulputate elementum, enim enim fringilla eros, in rhoncus est lectus non lectus. Nulla aliquam quam a facilisis pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed risus neque. Duis finibus lorem non sapien pellentesque, ut ultricies lacus varius.
                    </div>
                    <div>
                        <span>
                            Author name
                        </span>
                    </div>
                </div>
                
                
            </div>
        )
    }

}


export default Post