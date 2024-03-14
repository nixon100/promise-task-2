const api = "https://cat-fact.herokuapp.com/facts";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let parameter = {
          name: data[0].type,
          fact0: data[0].text,
          fact1: data[1].text,
          fact2: data[2].text,
          fact3: data[3].text,
          fact4: data[4].text,
        };
        console.log(parameter.name);
        content(parameter); // Pass the parameter object to the content function
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
  
  function content(parameter) {
    document.body.innerHTML += `

        <div>
        <header id="fh5co-header" role="banner">
            <div class="container">
                <nav class="row">
                    <nav class="header-inner" style="margin: 0px;">
                        <h1>
                            <a style="font-size:40px;">
                            ${parameter.name}
                                <span>.</span>
                            </a>
                            <span class="ww">®</span>
                        </h1>
                    </nav>
                </nav>
            </div>
        </header>

    </div>


    <div id="best-deal">
            <div id="MainContent_OverviewSection" class="container">
                <div class="row">


                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeIn animated-fast" data-animate-effect="fadeIn">
                    <h2>Cat Facts</h2>
                    <p>Amazing Cat Facts</p>
                </div>

                   
                <div class="col-md-4 item-block animate-box fadeIn animated-fast" data-animate-effect="fadeIn">


                    <div class="fh5co-property">
                        <div class="fh5co-property-innter">
                           
                            <h3>Cat Fact 1</h3>
                    <!--		<div class="price-status">
                             <span class="price">$540,000 </span>
                       </div> -->
                       <p>${parameter.fact0}</p>
                    </div>
                    </div>

                    
                </div>

                <div class="col-md-4 item-block animate-box fadeIn animated-fast" data-animate-effect="fadeIn">


                    <div class="fh5co-property">
                        <div class="fh5co-property-innter">
                           
                            <h3>Cat Fact 2</h3>
                    <!--		<div class="price-status">
                             <span class="price">$540,000 </span>
                       </div> -->
                       <p>${parameter.fact4}</p>
                    </div>
                    </div>

                    
                </div>

                <div class="col-md-4 item-block animate-box fadeIn animated-fast" data-animate-effect="fadeIn">


                    <div class="fh5co-property">
                        <div class="fh5co-property-innter">
                           
                            <h3>Cat Fact 3</h3>
                    <!--		<div class="price-status">
                             <span class="price">$540,000 </span>
                       </div> -->
                       <p>${parameter.fact2}</p>
                    </div>
                    </div>

                    
                </div>

                <div class="col-md-4 item-block animate-box fadeIn animated-fast" data-animate-effect="fadeIn">


                    <div class="fh5co-property">
                        <div class="fh5co-property-innter">
                           
                            <h3>Cat Fact 4</h3>
                    <!--		<div class="price-status">
                             <span class="price">$540,000 </span>
                       </div> -->
                       <p>${parameter.fact3}</p>
                    </div>
                    </div>

                    
                </div>

                <div class="col-md-4 item-block animate-box fadeIn animated-fast" data-animate-effect="fadeIn">


                    <div class="fh5co-property">
                        <div class="fh5co-property-innter">
                           
                            <h3>Cat Fact 5</h3>
                    <!--		<div class="price-status">
                             <span class="price">$540,000 </span>
                       </div> -->
                       <p>${parameter.fact1}</p>
                    </div>
                    </div>

                    
                </div>


            </div>
        </div>
    </div>
        `

      }
