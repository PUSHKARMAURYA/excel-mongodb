var multer      = require('multer');

var MongoClient = require('mongodb').MongoClient;
const excelToJson = require('convert-excel-to-json');


	var storage = multer.diskStorage({  
      
    filename:(req,file,cb)=>{  
        cb(null,file.originalname);  
    }  
});  
  
var uploads = multer({storage:storage});  


function creation(req,url,name){
	const result = excelToJson({
    sourceFile: req.file.path
});
		var ty=name;
	if(ty==null){
		ty=req.file.filename.substring(0,req.file.filename.lastIndexOf('.'));
	}
		
		let [first] = Object.keys(result)

console.log(first);
		
		
 
MongoClient.connect(url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .collection(ty)
          .insertMany(result[first], (err, rest) => {
            if (err) throw err;
		

            console.log(`Inserted: ${rest.insertedCount} rows`);
			console.log("table is " + ty);
			
          });
      
	  }
)
	
		

}
module.exports.uploads=uploads;

module.exports.creation=creation;