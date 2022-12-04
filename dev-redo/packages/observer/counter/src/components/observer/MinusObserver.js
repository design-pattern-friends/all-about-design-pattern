class MinusObserver extends Component {
  setup() {
    this.$state = {
      value: 0,
    };
  }

  template () {
    const { value } = this.$state;
    return `
      <h3>Minus Observer ${-value}</h3>
    `
  }

  update(value) {
    console.log(value)
    this.setState({ value });
  }
}