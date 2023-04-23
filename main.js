var app = new Value ({
    el:"article",
    data:{
        products: [{id:1, title: "Prod 1", short_text:'short_text', image:'1.png', desc:"Full desc"},
    {id:2, title: "Prod 2", short_text:"short_text", image:'2.png', desc:"Full desc"},
    {id:3, title:"Prod 3", short_text:"short_text", image:'3.png', desc:"Full desc"},
    {id:4, title:"Prod 4", short_text:"short_text", image:'4.png', desc:"Full desc"},
    {id:5, title:"Prod 5", short_text:"short_text", image:'5.png', desc:"Full desc"}]
},
mounted: function(){
    console.log(window.localStorage.getItem('prod'));
},
methods: {
    addItem:function(id){
    window.localStorage.setItem('prod', id);
    }
    
},
product: [],
btnVisible: false,
cart: [],
contactFields: [],
order: 0,
},
mounted: function () {
this.getProduct();
},
methods: {
    getProduct: function () {
        if(window.location.hash){
            var id = window.location.hash.replace("#", "");
            if(this.products && this.products.length>0){      
      for (i in this.products) {
        if (this.products[i] && this.products[i].id && id==this.products[i].id) this.products=this.products[i];
      }
    }
}
    }
}   
)