class Subject extends Component {
  setup () {
    this.$state = {
      value: 0,
      observers: []
    };
  }

  registerObserver(observer) {
    const { observers } = this.$state;
    this.setState({ observers: [...observers, observer] });
  }
  
  notifyObservers() {
    const { observers, value } = this.$state;
    observers.forEach((observer) => {
      observer.update(value);
    });
  }

  template () {
    const { value } = this.$state;
    return `
      <div>${value}</div>
      <button id="plus">+</button>
      <button id="minus">-</button>
    `
  }
  
  setEvent () {
    const $buttonList = this.$target.querySelectorAll('button');

    $buttonList.forEach($btn => {
      $btn.addEventListener('click', ({ target }) => {
        const { value } = this.$state;
        const isPlusBtn = target.id === "plus";

        if (isPlusBtn) {
          this.setState({ value: value + 1 });
        }

        else {
          this.setState({ value: value - 1 });
        }

        this.notifyObservers();
      })
    }); 
  }
}

const subject = new Subject(document.querySelector('div#subject'));
const plusObserver = new PlusObserver(document.querySelector('li#observer > #plus'));
const minusObserver = new MinusObserver(document.querySelector('li#observer > #minus'));

subject.registerObserver(plusObserver);
subject.registerObserver(minusObserver);