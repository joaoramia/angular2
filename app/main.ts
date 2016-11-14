import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Component } from '@angular/core';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);