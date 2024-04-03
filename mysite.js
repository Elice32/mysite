var lineBar = new ProgressBar.Line("#progressbar1", 
{
    strokeWidth: 10,
    trailWidth: 10,
    from: 
    { 
        color: "#F28482" 
    },

    to: 
    { 
        color: "#84A59D" 
    },

    step: (state, shape) => 
    {
      shape.path.setAttribute("stroke", state.color);

    }
  });

  lineBar.animate(1, 
    {
    duration: 1000
    });

  var lineBar = new ProgressBar.Line("#progressbar2", 
{
    strokeWidth: 10,
    trailWidth: 10,
    from: 
    { 
        color: "#F28482" 
    },

    to: 
    { 
        color: "#84A59D" 
    },

    step: (state, shape) => 
    {
      shape.path.setAttribute("stroke", state.color);
    }
  });

  lineBar.animate(0.6, 
    {
    duration: 1000
    });

    var lineBar = new ProgressBar.Line("#progressbar3", 
    {
        strokeWidth: 10,
        trailWidth: 10,
        from: 
        { 
            color: "#F28482" 
        },
    
        to: 
        { 
            color: "#84A59D" 
        },
    
        step: (state, shape) => 
        {
          shape.path.setAttribute("stroke", state.color);
    
        }
      });
    
      lineBar.animate(0.1, 
        {
        duration: 1000
        });

        
            var lineBar = new ProgressBar.Line("#progressbar5", 
            {
                strokeWidth: 10,
                trailWidth: 10,
                from: 
                { 
                    color: "#F28482" 
                },
            
                to: 
                { 
                    color: "#84A59D" 
                },
            
                step: (state, shape) => 
                {
                  shape.path.setAttribute("stroke", state.color);
            
                }
              });
            
              lineBar.animate(0.4, 
                {
                duration: 1000
                });

        var lineBar = new ProgressBar.Line("#progressbar4", 
        {
            strokeWidth: 10,
            trailWidth: 10,
            from: 
            { 
                color: "#F28482" 
            },
        
            to: 
            { 
                color: "#84A59D" 
            },
        
            step: (state, shape) => 
            {
              shape.path.setAttribute("stroke", state.color);
        
            }
          });
        
          lineBar.animate(0.85, 
            {
            duration: 1000
            });

            var lineBar = new ProgressBar.Line("#progressbar6", 
            {
                strokeWidth: 10,
                trailWidth: 10,
                from: 
                { 
                    color: "#F28482" 
                },
            
                to: 
                { 
                    color: "#84A59D" 
                },
            
                step: (state, shape) => 
                {
                  shape.path.setAttribute("stroke", state.color);
            
                }
              });
            
              lineBar.animate(0.2, 
                {
                duration: 1000
                });

                var lineBar = new ProgressBar.Line("#progressbar7", 
            {
                strokeWidth: 10,
                trailWidth: 10,
                from: 
                { 
                    color: "#F28482" 
                },
            
                to: 
                { 
                    color: "#84A59D" 
                },
            
                step: (state, shape) => 
                {
                  shape.path.setAttribute("stroke", state.color);
            
                }
              });
            
              lineBar.animate(1, 
                {
                duration: 1000
                });



    function validateForm() 
    {
      var name = document.querySelector("#name").value;
      var lastname = document.querySelector("#lastname").value;
      var date = document.querySelector("#date").value;
      var tel = document.querySelector("#tel").value;
      var email = document.querySelector("#email").value;
      var checkbox1 = document.querySelector("#check1");
      var checkbox2 = document.querySelector("#check2");
    
      if (name == "" || lastname == "" || date == "" || tel == "" || email == "") 
      {
        alert("Пожалуйста, заполните все поля.");
        return false;
      } 
      else 
      {
        var boxx2 = document.querySelector("#boxx2");
        var boxx = document.querySelector("#boxx");
        boxx2.style.display = "block";
        boxx.style.display = "block";
      }
    }

    $('.js-btn').click(() => {
        $('html, body').animate({
            scrollTop: $('.js-section').offset().top
        }, 200);
    });

    $(".tel").mask("+7(999)-999-99-99");

    $('.date').mask('99-99-9999г',{placeholder:"__-__-____г"});


    $('.js-btn').click(() => {
        $('html, body').animate({
            scrollTop: $('.sub_menu').offset().top
        }, 200);
    });