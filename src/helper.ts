export class FilesHelper {
    static customFileName(req, file, cb) {
      const datenow = new Date();
      // let uniqueSuffix = (datenow.getMonth() + 1) + "_" + datenow.getDay();
       let fileExtension = "";
      if(file.mimetype.indexOf("application/pdf") > -1){
          fileExtension = "pdf";
      }
      if(file.mimetype.indexOf("image/png") > -1){
          fileExtension = "png";
      }
      if(file.mimetype.indexOf("image/jpeg") > -1){
        fileExtension = "jpeg";
      }
      if(file.mimetype.indexOf("image/jpg") > -1){
        fileExtension = "jpeg";
    }
      // if(file.mimetype.indexOf("application/zip")> -1){
      //   fileExtension = "docx";
      // }
      var originalName = "";
      var fileArray = file.originalname.split(".");

            for(var i = 0; i < fileArray.length; i++){

              // fileArray[i] = fileArray[i].replaceAll(",", '');
                
                if(i == fileArray.length - 2){
                  // fileArray[i] = fileArray[i].replace(/[^a-zA-Z0-9 _-]/g, '');
                  originalName += fileArray[i];
                }
                else{
                  originalName += fileArray[i] + "."; 
                }
                
                if(i == fileArray.length - 2) break;

                

            }
      
      //const originalName = file.originalname.split(".")[0];
      cb(null, originalName + "."+ fileExtension);
    }
   
    static destinationPath(req, file, cb) {
      cb(null, '../product_images/')
    }
  }