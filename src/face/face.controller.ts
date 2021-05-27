import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { FaceService } from "./face.service";

@Controller()
export class FaceController {
    constructor(private readonly faceService: FaceService) { }

    @Get('faces')
    async getFaces(@Res() res: Response) {

        const cards = await this.faceService.getFaces()
        return res.render('./faces/index', { cards})
    }
}