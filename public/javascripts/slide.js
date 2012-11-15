var Movie = function(cells, options){
  this.stages = document.getElementsByClassName(cells);
  this.options = {
      next: 'next'
    , previous: 'previous'
    , current: 1
  };
  for (prop in options) { 
    if (prop in options)
      this.options[prop] = options[prop];
  };
  this.setNav();
};

Movie.prototype = {
  showSlide: function(cell){
    for(i=0;i<this.stages.length;i++){
      var stage = this.stages[i]
        , c = stage.className;
      if(cell != i){
        stage.className = c.replace(' current','');
      }else{
        c = c.replace(' current','');
        stage.className = c + ' current';
      }
    };
  }
, next: function(){
    if(this.options.current < this.stages.length)
      this.showSlide(this.options.current++); 
  }
, previous: function(){
    if(this.options.current > 0)
      this.showSlide(this.options.current--); 
  }
, setNav: function(){
    var nextButtons = document.getElementsByClassName(this.options.next);
    var prevButtons = document.getElementsByClassName(this.options.previous);
    this.each(nextButtons,function(button,i){
      button.addEventListener('click', this.next, false);
      if (button.captureEvents) button.captureEvents(Event.CLICK);
    }.bind(this));
  }
, each: function(collection,cb){
    for(i=0;i<collection.length;i++){
      cb(collection[i],i);
    };
  }
, event: function(e,cb){
    var event = e || window.event;
    event.cancelBubble = true;
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    cb();
  }
};
