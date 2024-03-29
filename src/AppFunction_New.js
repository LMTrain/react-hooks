import React, { useState } from 'react'




    const App = (props) => {
        //const {title, body} = props
        const [toggled, setToggled] = useState(false);
        
        const handleToggleBody  = () => {
          setToggled(!toggled)
        }
        
        return (
          <section className="card">
            <h3 className="card__title" onMouseMove={handleToggleBody}>
              {props.title}
            </h3>
            
            {toggled && <article className="card__body">
              {props.body}
            </article>}
          </section>
        )
      }
     
    
      
      // Consumed as:
     //<Card name="something" body="very very interesting" />


  App.handleToggleBody = () => {
    const title = "Special"
    const body = "Special"
    return {
      title,
      body
    }
  }

  export default App;