var awsUploads = require('../services/aws_streaming');

// Index route
// ===========
exports.index = function(req, res){
  if (req.method === 'POST') {
    return awsUploads(req, function() {
      res.end('<html><head></head><body>\
                 <h1>All good !</h1>\
              </body></html>');
    });
  }

  res.writeHead(200, { Connection: 'close' });
  res.end('<html><head></head><body>\
             <form method="POST" enctype="multipart/form-data">\
              <input type="file" name="filefield"><br />\
              <input type="submit">\
            </form>\
          </body></html>');
};
