import { Phase } from './Phase.js';//estos solo contienen la estructura del nivel correspondiente y lo imprimen

export class Phase1 extends Phase {

    create() 
    {//relatedScene esta implementada en la clase Phase
        this.bricks = this.relatedScene.physics.add.staticGroup({
        key: ['bluebrik', 'orangebrik', 'greenbrik', 'blackbrik', 'yellowbrick', 'blackbrik', 'yellowbrick', 'bluebrik', 'orangebrik', 'greenbrik'],
        frameQuantity: 1,
        gridAlign: {
        width: 5,
        height: 4,
        cellWidth: 150,
        cellHeight: 100,
        x: 135,
        y: 150
    }
        });
        
    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(316, 165, 'greybrik');
    this.fixedBricks.create(466, 165, 'greybrik');

    this.configureColisions();//estan implementadas en la clase Phase.js
    this.configureColisionsFixed();//este es para las colisiones con los bloques fixed

}
}
