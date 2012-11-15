
/*
 * GET home page.
 */
var Resume = require('../data/resume.json');
exports.index = function(req, res){
  var experience = Resume.about.experience
  experience.forEach(function(exp,index){
    console.log(index, ':', experience.length);
    exp.siblings = {};
    if(index < experience.length - 1)
      exp.siblings.next = experience[ ( index + 1 ) ].camelName;
    if(index != 0)
      exp.siblings.previous = experience[ ( index - 1 ) ].camelName;
  });
  res.render('index', { 
      title: 'Express'
    , resume: JSON.stringify(Resume) 
    , details: Resume.details
    , experience: Resume.about.experience
  });
};
