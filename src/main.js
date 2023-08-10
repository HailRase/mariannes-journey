import kaboom from "kaboom"

// initialize context
kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    background: [0, 0, 0, 1]
});
loadSprite('player', 'sprites/mpixel.png')
loadSprite('evil-cop', 'sprites/cop.png')
loadSprite('mushroom', 'sprites/cop.png')
loadSprite('ground', 'sprites/ground.png')
loadSprite('block', 'sprites/ground.png')
loadSprite('surprise', 'sprites/ground.png')
loadSprite('unboxed', 'sprites/ground.png')
const myLevel = () => {
    return [
        sprite('ground'),
        solid()
    ];
};
scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
    const map = [
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '                                                        ',
        '=====================================    ===============',
    ]
    const levelCfg = {
        width: 32,
        height: 20,
        '=': () => [sprite('ground', solid())]

    }
    const gameLevel = addLevel(map, levelCfg)
})

go("game")

