class Button {
    _binder 

    constructor() {
        this._binder = this._binder.bind(this);
    }

    _binder() {
        console.log('_binder bound to:', this);
    }
}

describe('Button', () => {
    it('does stuff', () => {
        const x = Button();
    })
});
