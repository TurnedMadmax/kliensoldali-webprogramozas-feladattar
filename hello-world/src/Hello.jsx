export function Hello() {

  const count = 3; 
  const name = "Lili";


  //return <h1>Hello {name.length === 0 ? 'Nincs kit üdvozölni' : name} </h1>

  // Kicsit szebben az előző sor
  return (
      <div>
        {
            // Csinálok egy arrayt, count hosszút, amit feltöltök nullával
            // A mapel végig megyek
            // i a hányadik indexen vagyok
            // Egyedi kulcsot kell adni -> key
            // 
            new Array(count).fill(null).map( (_, i) => (
                <h1 key={i}>{
                    name.length === 0
                    ? "Nincs kit üdvozölni"
                    : `Hello ${name}`
                }</h1>
            ))
        }
      
      </div>
    );
    
  
}