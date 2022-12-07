class PlusObserver extends Component {
  setup() {
    this.$state = {
      value: 0,
    };
  }

  template () {
    const { value } = this.$state;
    return `
      <h3>Plus Observer ${+value}</h3>
    `
  }

  update(value) {
    console.log(value)
    this.setState({ value });
  }
}