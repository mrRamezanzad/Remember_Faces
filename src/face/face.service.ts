import { Injectable } from "@nestjs/common";
import { IfaceQuestion } from './face.interface'

function shuffle(arr: any[]) {
    return arr.sort(() => Math.random() - 0.5)
}

@Injectable()
export class FaceService {
    getFaces(): IfaceQuestion[] {
        const images = shuffle(['/images/faces/1.jpg', '/images/faces/2.jpg', '/images/faces/3.jpg', '/images/faces/4.jpg', '/images/faces/5.jpg'])
        const names = shuffle(['jordan', 'tom', 'mason', 'sam', 'john'])

        const questions = []
        images.forEach((image, index) => {
            const question = {}
            question['type'] = "faces"
            question['name'] = names[index]
            question['image'] = image
            questions.push(question)
            
        })
        return questions
    }
}