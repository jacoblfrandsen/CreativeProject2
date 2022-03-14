document.getElementById("pokemonSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value1 = document.getElementById("pokemonInput1").value;
    const value2 = document.getElementById("pokemonInput2").value;
	if (value1 === "" || value2 === "")
      return;
    console.log(value1);
    let results1 = "";
    let results2 = "";

    let h1,w1,sd1,sa1,d1,a1,hp1,h2,w2,sd2,sa2,d2,a2,hp2;

    const url1 = "https://pokeapi.co/api/v2/pokemon/" + value1; 
    const url2 = "https://pokeapi.co/api/v2/pokemon/" + value2;
    fetch(url1)
        .then(function(response) {
        return response.json();
        }).then(function(json) {
	    results1 += '<h2 style="text-transform: capitalize" >' + json.name + '</h2>';                
	    results1 += '<img src="' + json.sprites.front_shiny + '"/>';

            results1 += '<p>'+ 'Type: ';
            for(let i=0; i<json.types.length;i++){
			results1 += json.types[i].type.name + ' '; 
	    }
	    results1 += '</p>';
	    
	    results1 += '<p>Height: ' + json.height*10 + ' cm</p>';
		h1 = json.height*10;
            results1 += '<p>Weight: ' + json.weight/10 + ' kg</p>';
		w1 = json.weight/10;
            results1 += '<p style="text-transform: capitalize">' + 
			json.stats[0].stat.name +': ' +
			json.stats[0].base_stat + '</p>';
			s1 = json.stats[0].base_stat;
            results1 += '<p style="text-transform: capitalize">' + 
			json.stats[1].stat.name +': ' +
			json.stats[1].base_stat + '</p>';
			sd1 = json.stats[1].base_stat;
            results1 += '<p style="text-transform: capitalize">' + 
			json.stats[2].stat.name +': ' +
			json.stats[2].base_stat + '</p>';
			sa1 = json.stats[2].base_stat;
            results1 += '<p style="text-transform: capitalize">' + 
			json.stats[3].stat.name +': ' +
			json.stats[3].base_stat + '</p>';
			d1 = json.stats[3].base_stat;
            results1 += '<p style="text-transform: capitalize">' + 
			json.stats[4].stat.name +': ' +
			json.stats[4].base_stat + '</p>';
			a1 = json.stats[4].base_stat;
            results1 += '<p style="text-transform: capitalize">' + 
			json.stats[5].stat.name +': ' +
			json.stats[5].base_stat + '</p>';
			hp1 = json.stats[5].base_stat;
		console.log(results1);

		
          		
		document.getElementById("pokemonResults1").innerHTML = results1;
        }).catch(error => alert(error.message)); // catch error message

    fetch(url2)
        .then(function(response) {
        return response.json();
        }).then(function(json) {
	    results2 += '<h2 style="text-transform: capitalize" >' + json.name + '</h2>';                
	    results2 += '<img src="' + json.sprites.front_shiny + '"/>';

            results2 += '<p>'+ 'Type: ';
            for(let i=0; i<json.types.length;i++){
			results2 += json.types[i].type.name + ' '; 
	    }
	    results2 += '</p>';
	    
	    results2 += '<p>Height: ' + json.height*10 + ' cm</p>';
		h2 = json.height*10;
            results2 += '<p>Weight: ' + json.weight/10 + ' kg</p>';
		w2 = json.weight/10;
            results2 += '<p style="text-transform: capitalize">' + 
			json.stats[0].stat.name +': ' +
			json.stats[0].base_stat + '</p>';
			s2 = json.stats[0].base_stat;
            results2 += '<p style="text-transform: capitalize">' + 
			json.stats[1].stat.name +': ' +
			json.stats[1].base_stat + '</p>';
			sd2 = json.stats[1].base_stat;
            results2 += '<p style="text-transform: capitalize">' + 
			json.stats[2].stat.name +': ' +
			json.stats[2].base_stat + '</p>';
			sa2 = json.stats[2].base_stat;
            results2 += '<p style="text-transform: capitalize">' + 
			json.stats[3].stat.name +': ' +
			json.stats[3].base_stat + '</p>';
			d2 = json.stats[3].base_stat;
            results2 += '<p style="text-transform: capitalize">' + 
			json.stats[4].stat.name +': ' +
			json.stats[4].base_stat + '</p>';
			a2 = json.stats[4].base_stat;
            results2 += '<p style="text-transform: capitalize">' + 
			json.stats[5].stat.name +': ' +
			json.stats[5].base_stat + '</p>';
			hp2 = json.stats[5].base_stat;
		console.log(results2);
            
	     document.getElementById("pokemonResults2").innerHTML = results2;

	}).catch(error => alert(error.message)); // catch error message
});