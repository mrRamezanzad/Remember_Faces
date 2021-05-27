import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { IfaceQuestion } from "./face.interface";
import { FaceService } from "./face.service";

@Controller()
export class FaceController {
    constructor(private readonly faceService: FaceService) { }

    @Get('faces')
    getFaces(@Res() res: Response) {

        const questions: IfaceQuestion[] = this.faceService.getFaces()
        return res.render('./faces/index', { questions })
    }
}