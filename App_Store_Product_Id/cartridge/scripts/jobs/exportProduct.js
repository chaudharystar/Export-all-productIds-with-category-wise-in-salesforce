'use strict';
var CatalogMgr = require('dw/catalog/CatalogMgr');

var File = require('dw/io/File');
function productCategoryToObject(category){
    let objects={};
    for (let x = 0; x < category.length; x++) {
        if (category[x].onlineSubCategories.length!=0) {
            objects[category[x].displayName]=productCategoryToObject(category[x].onlineSubCategories);
        } else {
            if(category[x].onlineProducts.length!=0 )
            {
            var array=[];
            for (let p = 0; p < category[x].onlineProducts.length; p++) {
                array.push(category[x].onlineProducts[p].ID);
               
            }
            objects[category[x].displayName] = {
                    products: []
                };
            objects[category[x].displayName].products = array;
            }
            else{
                objects[category[x].displayName] = { 
                    products: []
                };
            }
        }
        
    }
return objects;
}

exports.execute = function () {
    var File = require('dw/io/File');
    var FileWriter = require('dw/io/FileWriter');
    var   logger = require('dw/system/Logger');
    var siteRootCategory = CatalogMgr.getSiteCatalog().getRoot();
    var category = siteRootCategory.onlineSubCategories;
    var objects = {};
    objects[siteRootCategory.displayName] = productCategoryToObject(category);

    
    var destinationPath = File.IMPEX + '/src/export/catalog/';
    var destinationFile = new File(destinationPath + 'productIdStore.JSON');
    var fileWriter = new FileWriter(destinationFile, 'UTF-8');
     try {
        fileWriter.writeLine(JSON.stringify(objects,undefined,5));
        } catch (ex) {
            logger.error('[ERROR][Asset Updater Job] - ' + ex);
        } finally {
            fileWriter.flush();
            fileWriter.close();
        }
}

















