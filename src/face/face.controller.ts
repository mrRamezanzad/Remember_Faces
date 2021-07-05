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

        const correctAnswers = req.session['questions']
        const userAnswers = req.body
        const results = this.faceService.checkUserAnswers(userAnswers, correctAnswers)

        return res.status(200).send({results})
    }
}