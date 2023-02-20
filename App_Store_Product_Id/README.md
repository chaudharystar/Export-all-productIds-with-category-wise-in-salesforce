# App_Store_Product_Id
  This is plugin cartridge, in this we export all  product id of a site.

# The latest version

The latest version of SFRA is 6.0.0

# Implementation
  
1.Create a job with side specific.
2.configuare job step(the id is provide in steptypes.json i.e,custom.exportProductId);
3.Add cartridge in cartride path.
4.Run job.

# Results
 All product ids are export in json formate according to category wise ,i.e.
 Example:
        {
            "root": {
                        "mens":{
                                    "clothing":{
                                                    "suits":{
                                                                                                                                                           "products":[
                                                                                                                                                                        "25686364M",
                                                                                                                                                                        "25686571M"
                                                                                                                                                                       ]
                                                                                                                                                       }
                                                }
                                }
                    }
        }
