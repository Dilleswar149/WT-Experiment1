const orderForm = document.getElementById('order-form');
        const appetizers = document.getElementById('chocolates');
        const entrees = document.getElementById('entrees');
        const drinks = document.getElementById('drinks');
        const submitBtn = document.getElementById('submit-btn');
        const total = document.getElementById('total');
        const apqua = document.getElementById('aq');
        const enqua = document.getElementById('en');
        const drqua = document.getElementById('dr');
        function calculateTotal() {
            var chocolatesPrice=0;
            var entreesPrice =0;
            var drinksPrice =0;
            switch(chocolates.value)
            {
                case "Fruit and Nut":
                    chocolatesPrice = 150 ;break;
                case "Roasted Almond":
                    chocolatesPrice = 180 ;break;
                case "Heart Blush":
                    chocolatesPrice = 200 ;break;  
            }
            switch(entrees.value)
            {
                case "White Creme":
                    entreesPrice = 100 ;break;
                case "Raspberry Creme":
                    entreesPrice = 200 ;break;
                case "Fruity Cereal":
                    entreesPrice = 130 ;break;  
            }
            switch(drinks.value)
            {
                case "5 Star Oreo":
                    drinksPrice = 80 ;break;
                case "5 Star 3D":
                    drinksPrice = 100 ;break;
                case "5 Star Hazelnut":
                    drinksPrice = 130 ;break;  
            }

          const chocolatesQuantity=parseInt(aq.value);
          const entreesQuantity=parseInt(en.value);
          const drinksQuantity=parseInt(dr.value);

          const totalPrice = (chocolatesPrice*chocolatesQuantity) + (entreesPrice*entreesQuantity) + (drinksPrice*drinksQuantity);

          apval.innerText=`${chocolates.value}    :  ${chocolatesQuantity} items  => ${chocolatesPrice*chocolatesQuantity}/-`;
          enval.innerText=`${entrees.value}    :  ${entreesQuantity} items =>  ${entreesPrice*entreesQuantity}/-`;
          drval.innerText=`${drinks.value}    :  ${drinksQuantity} items => ${drinksPrice*drinksQuantity}/-`;

          total.innerText = `  ${totalPrice.toFixed(2)} /- only..`;
        }

        
        // Add event listener to the form
        orderForm.addEventListener('submit', function(e) {
          e.preventDefault();
          calculateTotal();
        });

        // Add event listeners to the select elements
        appetizers.addEventListener('change', calculateTotal);
        entrees.addEventListener('change', calculateTotal);
        drinks.addEventListener('change', calculateTotal);
