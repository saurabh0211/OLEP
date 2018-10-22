var homePageController = function(HomePageModel){

    var get = function(req,res){
            HomePageModel.find((err, homePageModel) => {
                if (err)
                    console.log(err);
                else
                    res.json(homePageModel);
            });
    }
    
    var post = function(req,res){
            HomePageModel.find((err, homePageModel) => {
                if (err)
                    console.log(err);
                else {
                    if(homePageModel.length==0)
                        homePageModel = new HomePageModel(req.body);        
        
                    homePageModel[0].banner.branchImageUrl = req.body.banner.branchImageUrl;
                    req.body.banner.menuItems.forEach(element => {
                        homePageModel[0].banner.menuItems.item = element.item;
                    });
                    homePageModel[0].banner.heading = req.body.banner.heading;
                    homePageModel[0].banner.subHeading = req.body.banner.subHeading;
                    homePageModel[0].cards = req.body.cards;
                    
                    homePageModel[0].save().then(homePageModel => {
                        res.status(200).send(homePageModel);
                    }).catch(err => {
                        res.status(400).send('Update failed');
                    });
                }
            });
    }

    return{
        get: get,
        post: post
    }
}

module.exports = homePageController;