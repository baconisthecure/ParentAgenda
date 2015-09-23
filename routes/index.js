exports.index = function(req, res){
  res.render('index',{
   title: 'Home'});  
  }

    
exports.classInfo=  function(req, res){
  res.render('classInfo',{
   title: 'Home'});  
  }
       
    
exports.threads = function(req, res){
  res.render('threads',{
   title: 'Home'});  
  }    
    
exports.focusMessage = function(req, res){
  res.render('focusMessage',{
   title: 'Home'});  
  }   