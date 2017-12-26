import { TranslateService } from 'ng2-translate';
import { UserService } from './../../service/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      items: MenuItem[];
      display: Boolean = false;
      languages: SelectItem[];
      selectedType = 'zh';
      constructor(private router: Router, private userService: UserService, public translateService: TranslateService) {
        this.languages = [];
        this.languages.push({label: 'English', value: 'zh'});
        this.languages.push({label: 'Chinese', value: 'en'});
      }
      ngOnInit() {
          this.items = [
              {
                  label: 'File',
                  items: [{
                          label: 'New',
                          icon: 'fa-plus',
                          items: [
                              {label: 'Project'},
                              {label: 'Other'},
                          ]
                      },
                      {label: 'Open'},
                      {label: 'Quit'}
                  ]
              },
              {
                  label: 'Edit',
                  icon: 'fa-edit',
                  items: [
                      {label: 'Undo', icon: 'fa-mail-forward'},
                      {label: 'Redo', icon: 'fa-mail-reply'}
                  ]
              }
          ];
      }
      changeLan() {
          console.log(this.selectedType);
        this.translateService.setDefaultLang(this.selectedType);
        this.translateService.use(this.selectedType);
      }
      showDialog() {
        this.display = true;
      }
      logout() {
        this.userService.clearAuth();
        this.router.navigateByUrl('/login');
    }


}
