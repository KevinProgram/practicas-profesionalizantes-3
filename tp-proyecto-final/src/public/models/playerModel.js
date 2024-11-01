class PlayerModel extends EventTarget
{
	constructor()
    {
        super();
        this.innerState = 'walking';
    }

    getCurrentState()
    {
        return this.innerState;
    }

    walk()
    {
        this.innerState = 'walking';
    }

    run()
    {
        this.innerState = 'running';
    }

    idle()
    {
        this.innerState = 'idle';
    }

    moveLeft()
    {
        this.dispatchEvent( new CustomEvent('moveleft') );
        this.walk();
    }

    moveRight()
    {
        this.dispatchEvent( new CustomEvent('moveright') );
        this.walk();
    }

    moveUp()
    {
        this.dispatchEvent( new CustomEvent('moveup') );
    }

    moveDown()
    {
        this.dispatchEvent( new CustomEvent('movedown') );
    }

}

export { PlayerModel };