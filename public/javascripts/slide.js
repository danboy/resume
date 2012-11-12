var Movie = function(cells, options){
  var stages = document.getElementsByClassName(cells);
  this.options = {
      foo: 'hello'
    , egg: 'muffin'
  };
  for (prop in options) { 
    if (prop in options)
      this.options[prop] = options[prop];
  };
};

