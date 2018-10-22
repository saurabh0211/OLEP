import express from 'express';
import homePageController from '../controllers/homepageController';

var routes = function(HomePageModel){
    var homePageRouter = express.Router();

    homePageRouter.route('/home')
    .get(homePageController(HomePageModel).get);

    homePageRouter.route('/home/update')
    .post(homePageController(HomePageModel).post);

    return homePageRouter;
};

module.exports = routes;
