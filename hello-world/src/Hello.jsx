
export function Hello( {name, count, children } ) {

  count = isNaN(parseInt(count)) ? 1 : parseInt(count);
  //const count = 3; 
  //const name = "Lili";


  //return <h1>Hello {name.length === 0 ? 'Nincs kit üdvozölni' : name} </h1>

  // Kicsit szebben az előző sor
  return (
      <>
        {
            new Array(count).fill(null).map( (element, i) => (

                <h1 key={i}>{
                    name.length === 0
                    ? "Nincs kit üdvozölni"
                    : `Hello ${name}`
                }</h1>
            ))
        }
        {
          children
        }
      
      </>
  );
    
  
}