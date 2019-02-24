import {
  Compiler, Component, Injector, NgModuleFactoryLoader, SystemJsNgModuleLoader, ViewChild, ViewContainerRef
} from '@angular/core';

declare const System;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    }
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  data: any;

  show: boolean = false;

  url = './profile.module';

  constructor(private _compiler: Compiler, private _injector: Injector) {
this.data = {
     url: './profile.module.js',
    className: 'ProfileModule'
  };


  }

  addModule() {
      System.import('./profile.module.js').then((module) => {
        this._compiler.compileModuleAndAllComponentsAsync(module[this.data.className])
          .then((compiled) => {
            const factory = compiled.componentFactories[0];
            this._container.createComponent(factory);
          });
      });

  }



 /* addModule2() {
    var loadScriptAsync = function (uri) {
      return new Promise((resolve, reject) => {
        var tag = document.createElement('script');
        tag.src = uri;
        tag.onload = () => {
          resolve();
        };
        var firstScriptTag = document.getElementsByTagName('head')[0];
        firstScriptTag.append(tag);
      });
    }
    let scriptLoaded = loadScriptAsync('http://localhost/test/profile.module.js');
    scriptLoaded.then((module)=>{
      debugger;
    })
  }*/
}

