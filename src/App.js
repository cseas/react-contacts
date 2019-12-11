import React from "react";
import ContactCard from "./ContactCard"
import "./style.css"

function App() {
  return (
    <div className="contacts">
      <ContactCard 
      // First curly brace for getting into Js
      // Second curly brace for creating Js object
        contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}} 
      />

      <ContactCard 
        contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/300/201", phone: "(212) 555-2345", email: "fluff@me.com"}}
      />
            
      <ContactCard 
        contact={{name: "Destroyer", imgUrl: "http://placekitten.com/300/199", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
      />
            
      <ContactCard 
        contact={{name: "Felix", imgUrl: "http://placekitten.com/300/202", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
      />
    </div>
  );
}

export default App;
