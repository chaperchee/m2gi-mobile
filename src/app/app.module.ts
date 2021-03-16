import { CreateListComponent } from './modals/create-list/create-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from './../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './modals/create-todo/create-todo.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {HeaderComponent} from './components/header/header.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { UserPanelComponent } from './modals/user-panel/user-panel.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CommonModule } from '@angular/common';
import { UserSettingsImagePopoverComponent } from './modals/user-settings-image-popover/user-settings-image-popover.component';
import { FileTransfer } from '@ionic-native/file-transfer';

export function createTranslateLoader(http : HttpClient){
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

@NgModule({
    declarations: [
        AppComponent,
        CreateListComponent,
        CreateTodoComponent,
        HeaderComponent,
        UserPanelComponent,
        UserSettingsImagePopoverComponent
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },

        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
