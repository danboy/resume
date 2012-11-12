
/*
 * GET home page.
 */
var Resume = require('../data/resume.json');
exports.index = function(req, res){
  res.render('index', { 
      title: 'Express'
    , resume: JSON.stringify(Resume) 
    , details: Resume.details
    , experience: Resume.about.experience
  });
};
