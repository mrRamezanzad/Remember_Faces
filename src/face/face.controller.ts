import { Controller, Get, Post, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";
import { IfaceQuestion } from "./face.interface";
import { FaceService } from "./face.service";

@Controller('faces')
export class FaceController {
    constructor(private readonly faceService: FaceService) { }

    @Get()
    getFaces(@Req() req: Request, @Res() res: Response) {

        const questions: IfaceQuestion[] = this.faceService.getFaces()
        req.session['questions'] = questions
        // console.log(req.session)
        return res.render('./faces/index', { questions })
    }

    @Post()
    checkAnswers(@Req() req: Request, @Res() res: Response) {
        console.log('==========================================================Session')
        console.log(req.session)
        console.log('==========================================================Body')
        console.log(req.body)
        res.status(500).send('hello i got ya')
    }
}