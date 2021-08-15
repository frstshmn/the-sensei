let store = {
    _state: {
        sportsmen: {
            sportsmenData: [
                {name: 'Vova Korenha', id:'1'},
                {name: 'Yan Varakhin', id:'2'},
                {name: 'Alex Zinchuk', id:'3'},
                {name: 'Vlad Cherkasov', id:'4'}
            ],
            sportsmanName: ''
        },
    
        general: {
        }
    },
    subscribe(observer) {
        this._renderDOM = observer;
    },
    _renderDOM() {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },

    updateSportsmanName(name) {
        this._state.sportsmen.sportsmanName = name;
    },

    addSportsman() {
        let newSportsman = {
            name: this._state.sportsmen.sportsmanName,
            id: 5
        };
    
        this._state.sportsmen.sportsmenData.push(newSportsman);
        this._renderDOM(this._state);
    },

    

    dispatch(action) {
        if(action.type === 'addSportsman'){
            this.addSportsman(this._state.sportsmen.sportsmanName);
        }
        else if(action.type === 'updateSportsmanName'){
            this.updateSportsmanName(action.name);
        }
    },
}

export default store;