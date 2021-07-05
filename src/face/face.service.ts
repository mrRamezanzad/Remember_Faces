import { Injectable } from "@nestjs/common";
import { IfaceQuestion } from './face.interface'

function shuffle(arr: any[]) {
    return arr.sort(() => Math.random() - 0.5)
}

@Injectable()
export class FaceService {
    getFaces(): IfaceQuestion[] {
        const images = shuffle([
            '/images/faces/1.jpg', '/images/faces/2.jpg', '/images/faces/3.jpg', '/images/faces/4.jpg', '/images/faces/5.jpg', '/images/faces/6.jpg', '/images/faces/7.jpg', '/images/faces/8.jpg', '/images/faces/9.jpg', '/images/faces/10.jpg', '/images/faces/11.jpg',
        ])
        const names = shuffle([
            'jordan', 'tom', 'mason', 'sam', 'john', 'jordan', 'tom', 'mason', 'sam', 'john', 'abraham'
        ])

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

    checkUserAnswers(userAnswers, correctAnswers): any {
        const results = []

        const questionsLength = correctAnswers.length
        let questionIndex = 0
        for (; questionIndex < questionsLength; questionIndex++) {

            if (userAnswers[questionIndex] === correctAnswers[questionIndex].name)
                results.push(true)
                
            else results.push(false)

        }

        console.log({ results })
        return results
    }

}