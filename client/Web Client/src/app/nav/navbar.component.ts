import {Component, Inject, OnInit} from '@angular/core';
// import {JQ_TOKEN} from '../common/jQuery.service';
 import {HomeService} from '../home/home.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
    logoURL: string;

    constructor( /*@Inject(JQ_TOKEN) private $: any,*/ private _homeService: HomeService) {
    }

    navbarClick(event, hashName) {
        if (hashName !== "" && hashName !== undefined) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = hashName;

            // Using jQuery's animate() method to add smooth page scroll
            // this.$('html, body').animate({
            //     scrollTop: this.$(hash).offset().top
            // }, 900, function () {
            //     // Add hash (#) to URL when done scrolling (default click behavior)
            //     window.location.hash = hash;

            // });
        } // End if

        //this.$('.navbar-collapse').collapse('hide');
    }

    ngOnInit() {
        var self = this;
        // this._homeService.getLogoImageUrl().then(function (url) {
        //     self.logoURL = url;
        // });
    }
}
