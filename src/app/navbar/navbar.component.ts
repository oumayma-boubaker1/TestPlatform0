import { Component, OnDestroy, OnInit } from '@angular/core';
// import { AuthService } from '../service/auth.service';
// import { ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { ProfileService } from '../service/profile.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // userIsAuthenticated = false;
  // private authListenerSubs: Subscription;
  // profile: any;
  // username: string
  // profileisSet = false
  // constructor(private authService: AuthService, private profileService: ProfileService,
  //             private route: ActivatedRoute) { }

   ngOnInit(): void {


  //   this.profileisSet = this.profileService.getIsProfileSet()
  //   this.userIsAuthenticated = this.authService.getIsAuth();
  //   if (this.userIsAuthenticated) {
  //     this.getProfile()
  //   }

  //   this.authListenerSubs = this.authService
  //     .getAuthStatusListener()
  //     .subscribe(isAuthenticated => {
  //       this.userIsAuthenticated = isAuthenticated;
  //       if (this.userIsAuthenticated) {
  //         this.getProfile()
  //       }
  //     });
  // }


  // onLogout() {
  //   this.authService.logout();
  // }

  // getProfile() {
  //   this.profileService.getProfileByCreatorId().subscribe(prof => {
  //     this.profileisSet = true
  //     this.username = prof.profile.username
  //     this.profile = {
  //       id: prof.profile._id,
  //       username: prof.profile.username,
  //       bio: prof.profile.bio,
  //       imagePath: prof.profile.imagePath,
  //       creator: prof.profile.creator
  //     };
  //   },
  //     err => {
  //       this.profileisSet = false
  //       this.username = null
  //     })

  // }


  // // tslint:disable-next-line:use-life-cycle-interface
  // ngOnDestroy() {
  //   this.authListenerSubs.unsubscribe();
  // }

}}
