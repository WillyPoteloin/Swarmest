import React from 'react'

const ColorSelector = React.createClass({
    getInitialState: function() {
        return {
            selected: this.props.color,
            proposed: ['#0277BD', '#FFB74D', '#FF8A65', '#90A4AE', '#F06292', '#7986CB']
        }
    },
    componentWillReceiveProps: function(newProps) {
        this.setState(Object.assign({}, this.state, {
            selected: newProps.color
        }))
    },
    onColorSelection: function(event) {
        event.preventDefault();

        let selected = event.target.getAttribute('color');

        this.setState(Object.assign({}, this.state, {
            selected: selected
        }))

        this.props.onColorChange(selected);

        this.toggleProposed(event);
    },
    toggleProposed: function(event) {
        event.preventDefault();

        let colorSelectorProposed = document.querySelector('.color-selector .color-selector-proposed');
        colorSelectorProposed.style.display = (colorSelectorProposed.style.display == 'none') ? 'block' : 'none';
    },
    render() {

        let proposedColors = this.state.proposed.map((color, index) => {
            return <span key={index} className="color-selector-proposed-color color-selector-color" style={{backgroundColor: color}} color={color} onClick={this.onColorSelection}></span>
        });

        return (
            <div className="color-selector">
                <span className="color-selector-selected color-selector-color" style={{backgroundColor: this.state.selected}} onClick={this.toggleProposed}></span>
                <div className="color-selector-proposed" style={{display: "none"}}>
                    {proposedColors}
                </div>
            </div>
        )
    }
})

export default ColorSelector
