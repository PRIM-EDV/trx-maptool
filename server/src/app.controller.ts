import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthApiService } from './api/auth/auth.api.service';

@Controller()
export class AppController {
  constructor() {}


}
