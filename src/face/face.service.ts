import { Injectable } from "@nestjs/common";

function shuffle(arr: any[]) {
    return arr.sort(() => Math.random() - 0.5)
}

@Injectable()
export class FaceService {
    getFaces() {
        const images = shuffle(['/images/faces/1.jpg', '/images/faces/2.jpg', '/images/faces/3.jpg', '/images/faces/4.jpg', '/images/faces/5.jpg'])
        const names = shuffle(['jordan', 'tom', 'mason', 'sam', 'john'])
        
        let cards = []
        cards = images.reduce((result, image, index) => {
            result[names[index]] = image
            return result
        }, {})

        return cards
    }
}