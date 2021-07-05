import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  renderHomePage(): string {
    return `
      <center style="margin-top: 20%; color: #3a3a3a; font-size: 3rem; font-family:Segoe UI; font-weight: 200; ">go to <a href="http://localhost/faces">Faces Game</a> page</center>
    `
  }
}
